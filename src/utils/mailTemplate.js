const mailTemplate = (details) => {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('he-IL');
  const timeString = currentDate.toLocaleTimeString('he-IL', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
  <!DOCTYPE html>
  <html lang="he">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { font-family: 'Arial', sans-serif; background-color: #ffffff; direction: rtl; }
      .header { padding: 4px; text-align: center; }
      table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      th, td { text-align: right; padding: 8px; border: 1px solid #ddd; }
      th { background-color: #f2f2f2; }
      .logo-img { width: 50px; height: 50px; }
    </style>
  </head>
  <body dir="rtl">
    <div class="header">
      <img src="https://res.cloudinary.com/dxpmdqqdc/image/upload/v1711986334/ashdod%20-%20driving%20school/cmrpcs2o0kuo7fk1f32a.png" alt="לוגו" class="logo-img">
    </div>
    <table>
      <tr>
        <th>תאריך ושעה</th>
        <td>${dateString} ${timeString}</td>
      </tr>
      <tr>
        <th>שם</th>
        <td>${details.name}</td>
      </tr>
      <tr>
        <th>טלפון</th>
        <td>${details.tel}</td>
      </tr>
    </table>
  </body>
  </html>
  `;
};

export default mailTemplate;
