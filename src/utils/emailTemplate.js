

export const generateEmailTemplate = ({ userName, amount, bankName, accountName, accountNumber, phoneNumber, currentYear }) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Withdrawal Request Received</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
      color: #333;
      line-height: 1.6;
    }

    .email-container {
      max-width: 600px;
      margin: 30px auto;
      background: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border: 1px solid #e0e0e0;
    }

    .header {
      text-align: center;
      color: #0056b3;
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    p {
      margin: 12px 0;
    }

    ul {
      padding-left: 20px;
      margin-top: 10px;
      background: #f9f9f9;
      border-radius: 5px;
      padding: 15px;
      list-style: none;
    }

    ul li {
      margin-bottom: 8px;
    }

    ul li strong {
      color: #0056b3;
    }

    .note {
      margin-top: 20px;
      padding: 15px;
      background-color: #fff3cd;
      border: 1px solid #ffeeba;
      border-radius: 5px;
      color: #856404;
      font-size: 14px;
    }

    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: #888;
    }

    a {
      color: #0056b3;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background-color: #1c1c1c;
        color: #dddddd;
      }

      .email-container {
        background-color: #2b2b2b;
        border-color: #444444;
      }

      .header {
        color: #72b4ff;
      }

      .note {
        background-color: #2f2f2f;
        border-color: #666666;
        color: #f1c40f;
      }

      .footer {
        color: #999;
      }

      a {
        color: #72b4ff;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">Withdrawal Request Acknowledged</div>
    <p>Dear ${userName},</p>

    <p>We’re writing to confirm that we have received your withdrawal request. It is currently under review and will be processed shortly.</p>

    <p><strong>Withdrawal Details:</strong></p>
    <ul>
      <li><strong>Amount:</strong> ₦${amount}</li>
      <li><strong>Bank Name:</strong> ${bankName}</li>
      <li><strong>Account Name:</strong> ${accountName}</li>
      <li><strong>Account Number:</strong> ${accountNumber}</li>
      <li><strong>Phone Number:</strong> ${phoneNumber}</li>
      <li><strong>Requested On:</strong> ${now}</li>
    </ul>

    <p class="note">Please allow up to 24–72 hours for your request to be processed.</p>

    <p>If you didn’t initiate this request, please reach out to our support team immediately for assistance.</p>

    <div class="footer">
      &copy; ${currentYear} Bclics. All rights reserved.
      <br />
      Need help? <a href="mailto:bclics01@gmail.com">Contact Support</a>
    </div>
  </div>
</body>
</html>
    `;
  }