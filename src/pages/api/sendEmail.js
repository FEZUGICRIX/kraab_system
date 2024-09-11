import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    fullName,
    email,
    phone,
    address,
    state,
    city,
    zip,
    time,
    tax,
    shippingValue,
    totalPrice,
    items,
  } = req.body;

  try {
    // Создаём транспортёр для отправки почты
    let transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    // Опции письма для клиента
    let clientMailOptions = {
      from: 'info@kraabmod.fi',
      to: email,
      subject: 'Your Order Confirmation',
      html: `
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tilaustiedot</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333;">Tilaustiedot</h2>
          <p style="margin: 5px 0;"><strong style="color: #555;">Täysi nimi:</strong> ${fullName}</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Sähköposti:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Puhelin:</strong> ${phone}</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Osoite:</strong> ${address}</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Maakunta:</strong> ${state}</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Kaupunki:</strong> ${city}</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Postinumero:</strong> ${zip}</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Tilausaika:</strong> ${time}</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Toimituskulut:</strong> ${shippingValue} €</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">ALV:</strong> ${tax} €</p>
          <p style="margin: 5px 0;"><strong style="color: #555;">Kokonaishinta:</strong> ${totalPrice} €</p>
          <h3 style="margin-top: 20px; color: #333;">Tuotteet:</h3>
          <ul style="padding: 0; list-style-type: none;">
          ${items
            .map((item) => {
              const imagesRaw = item.images;
              const images = JSON.parse(imagesRaw);
              const image = images[0];

              return `
                <li style="padding: 15px; margin-bottom: 15px; background: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 15px;">
                  <img src="https://kraabmod.fi${
                    item.image_path
                  }${image}" alt="Product Image" style="margin-right: 10px; width: 100px; height: auto; border-radius: 8px; object-fit: cover;" />
                  <div style="flex: 1;">
                    <div style="margin-bottom: 2px;">
                      <span style="font-weight: 600; color: #333;">Tuotteet:</span> ${
                        item.title
                      }
                    </div>
                    <div style="margin-bottom: 8px;">
                      <span style="font-weight: 600; color: #333;">Hinta:</span> ${
                        item.price
                      }€
                    </div>
                    ${
                      item.packages
                        ? `
                      <div style="margin-bottom: 8px;">
                        <span style="font-weight: 600; color: #333;">Pakkaus:</span> ${
                          item.packages
                        }
                      </div>
                      <div style="margin-bottom: 8px;">
                        <span style="font-weight: 600; color: #333;">Lopullinen hinta:</span> ${
                          item.packages * item.price
                        }€
                      </div>
                    `
                        : ''
                    }
                  </div>
                </li>
              `;
            })
            .join('')}
          
          </ul>
      </body>
      </html>`,
    };

    // Опции письма для компании
    let companyMailOptions = {
      from: 'info@kraabmod.fi',
      to: 'info@kraabmod.fi',
      subject: 'New Order Received',
      html: clientMailOptions.html, // отправляем те же данные, что и клиенту
    };

    // Отправляем письма
    let infoClient = await transporter.sendMail(clientMailOptions);
    let infoCompany = await transporter.sendMail(companyMailOptions);

    return res.status(200).json({
      message: 'Emails sent successfully',
      clientMessageId: infoClient.messageId,
      companyMessageId: infoCompany.messageId,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Error sending emails', error });
  }
}
