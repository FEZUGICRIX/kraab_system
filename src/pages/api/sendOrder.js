import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Проверка метода запроса
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // Получение данных из POST-запроса
  const { orderData } = req.body;

  if (!orderData) {
    res.status(400).json({ error: 'Invalid order data' });
    return;
  }

  // Настройки для отправки письма
  const companyEmail = 'info@kraabmod.fi';
  const customerEmail = orderData.email;
  const from = 'info@kraabmod.fi';
  const subject = 'New Order Received';
  const customerSubject = 'Your Order Confirmation';

  // Настройка транспорта
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io', // Укажите свой SMTP-сервер здесь
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Пути к шаблонам
  const templatePath = path.join(
    process.cwd(),
    'templates',
    'email_template.html'
  );
  const productTemplatePath = path.join(
    process.cwd(),
    'templates',
    'product_template.html'
  );

  // Чтение HTML-шаблонов
  const template = fs.readFileSync(templatePath, 'utf8');
  const productTemplate = fs.readFileSync(productTemplatePath, 'utf8');

  // Замена плейсхолдеров в основном шаблоне
  const placeholders = {
    '{{fullName}}': orderData.fullName,
    '{{email}}': orderData.email,
    '{{phone}}': orderData.phone,
    '{{address}}': orderData.address,
    '{{state}}': orderData.state,
    '{{city}}': orderData.city,
    '{{zip}}': orderData.zip,
    '{{time}}': orderData.time,
    '{{shippingValue}}': orderData.shippingValue,
    '{{totalPrice}}': orderData.totalPrice,
  };

  let emailContent = template;
  for (const [key, value] of Object.entries(placeholders)) {
    emailContent = emailContent.replace(new RegExp(key, 'g'), value);
  }

  // Формирование списка товаров
  const baseUrl = 'https://kraabmod.fi';
  let productHtml = '';

  if (Array.isArray(orderData.items)) {
    for (const item of orderData.items) {
      const images = JSON.parse(item.images);
      const imagePath = item.image_path;

      let packagesHtml = '';
      let totalPriceForItem = '';
      if (item.packages) {
        const quantity = item.packages;
        const price = item.price;
        totalPriceForItem = (quantity * price).toFixed(2);
        packagesHtml = `<div><span class="item-title">Packages:</span> <span style="font-weight: 600; color: #333;">${quantity}</span></div>`;
      }

      const productPlaceholders = {
        '{{imageSrc}}': `${baseUrl}${imagePath}${images[0]}`,
        '{{title}}': item.title,
        '{{price}}': item.price,
        '{{packages}}': packagesHtml,
        '{{totalPriceForItem}}': totalPriceForItem
          ? `<div style="margin-bottom: 8px;"><span style="font-weight: 600; color: #333;">Total Price:</span> ${totalPriceForItem} €</div>`
          : '',
      };

      let productEntry = productTemplate;
      for (const [key, value] of Object.entries(productPlaceholders)) {
        productEntry = productEntry.replace(new RegExp(key, 'g'), value);
      }

      productHtml += productEntry;
    }
  } else {
    productHtml = '<p>No products found.</p>';
  }

  // Замена плейсхолдера для товаров
  emailContent = emailContent.replace('{{items}}', productHtml);

  // Убедитесь, что поля shippingValue и totalPrice расположены правильно
  emailContent = emailContent.replace(
    '{{shippingValue}}',
    `${orderData.shippingValue} €`
  );
  emailContent = emailContent.replace(
    '{{totalPrice}}',
    `${orderData.totalPrice} €`
  );

  // Опции письма
  const mailOptions = {
    from,
    to: [companyEmail, customerEmail],
    subject,
    html: emailContent,
  };

  try {
    // Отправляем письма
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
}
