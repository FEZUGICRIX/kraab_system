import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

// Эта функция отключает встроенную обработку body в Next.js, чтобы использовать Formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Обрабатываем данные формы и файлы
  const form = formidable({ multiples: true }); // Используйте новую форму

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ message: 'Form parsing failed' });
    }

    // Данные клиента
    const contact = {
      firstName: fields.firstName || '',
      lastName: fields.lastName || '',
      email: fields.email || '',
      phone: fields.phone || '',
    };

    const dimensions = fields.dimensions || '';
    const installation = fields.installation || '';
    const repairStageDescription = fields.repairStageDescription || '';
    const hasProject = fields.hasProject || '';
    const selectedTypes = fields.selectedTypes
      ? JSON.parse(fields.selectedTypes)
      : [];

    // Создание транспортёра для Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru', // Ваш SMTP сервер
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    // Формируем текстовое сообщение
    let message = `
      <h2>Asiakasinfo</h2>
      <p><strong>Etunimi:</strong> ${contact.firstName}</p>
      <p><strong>Sukunimi:</strong> ${contact.lastName}</p>
      <p><strong>Sähköposti:</strong> ${contact.email}</p>
      <p><strong>Puhelin:</strong> ${contact.phone}</p>
      <p><strong>Mitat:</strong> ${dimensions}</p>
      <p><strong>Asennus:</strong> ${installation}</p>
      <p><strong>Korjausvaiheen kuvaus:</strong> ${repairStageDescription}</p>
      <p><strong>Onko projekti:</strong> ${
        hasProject === 'yes' ? 'Kyllä' : 'Ei'
      }</p>
      <p><strong>Valitut tyypit:</strong> ${
        selectedTypes.length > 0 ? selectedTypes.join(', ') : 'Ei valittu'
      }</p>
    `;

    // Опции письма с вложениями
    let attachments = [];
    if (files.files) {
      const uploadedFiles = Array.isArray(files.files)
        ? files.files
        : [files.files];

      uploadedFiles.forEach((file) => {
        const fileContent = fs.readFileSync(file.filepath); // Чтение содержимого файла
        attachments.push({
          filename: file.originalFilename,
          content: fileContent,
        });
      });
    }

    // Настройки письма
    const mailOptions = {
      from: 'info@kraabmod.fi',
      to: 'info@kraabmod.fi', // Почта компании
      subject: 'Asiakasdata',
      html: message,
      attachments: attachments, // Добавляем вложения
    };

    // Отправляем письмо
    try {
      await transporter.sendMail(mailOptions);
      return res
        .status(200)
        .json({ message: 'Sähköposti lähetetty onnistuneesti' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res
        .status(500)
        .json({ message: 'Sähköpostin lähettäminen epäonnistui' });
    }
  });
}
