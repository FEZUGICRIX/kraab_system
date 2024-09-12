import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

// Отключение встроенной обработки body в Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Обработка данных формы и файлов с использованием Formidable
  const form = formidable({ multiples: true }); // Включаем поддержку нескольких файлов

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ message: 'Form parsing failed' });
    }

    // Данные клиента
    const contact = {
      firstName: fields.firstName ? fields.firstName[0] : '',
      lastName: fields.lastName ? fields.lastName[0] : '',
      email: fields.email ? fields.email[0] : '',
      phone: fields.phone ? fields.phone[0] : '',
    };

    const dimensions = fields.dimensions ? fields.dimensions[0] : '';
    const installation = fields.installation ? fields.installation[0] : '';
    const repairStageDescription = fields.repairStageDescription
      ? fields.repairStageDescription[0]
      : '';
    const hasProject = fields.hasProject ? fields.hasProject[0] : '';

    // Обработка selectedTypes
    const selectedTypes = fields['selectedTypes[]'] || [];
    const typesArray = Array.isArray(selectedTypes)
      ? selectedTypes
      : [selectedTypes];

    // Обработка selectedRepairs
    const selectedRepairs = fields['selectedRepairs[]'] || [];
    const repairsArray = Array.isArray(selectedRepairs)
      ? selectedRepairs
      : [selectedRepairs];

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
      <p><strong>Valitut tyypit:</strong> 
        ${typesArray.length > 0 ? typesArray.join(', ') : 'Ei valittu'}
      </p>
      <p><strong>Valitut korjaukset:</strong> 
        ${repairsArray.length > 0 ? repairsArray.join(', ') : 'Ei valittu'}
      </p>
    `;

    // Опции письма с вложениями
    let attachments = [];
    if (files['files[]']) {
      const uploadedFiles = Array.isArray(files['files[]'])
        ? files['files[]']
        : [files['files[]']];

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
