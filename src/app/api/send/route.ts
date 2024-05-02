import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(process.env);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },

      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mail = await transporter.sendMail({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: "There is new Query from your portfolio",
      html: `<div>
    <p>Hello Faizer,</p>
    <p>
      ${body.name} ${body.lastName} has submitted the contact form on your website.
      <br />
      Their email is ${body.email}!
      <br />
      Their number is ${body.number}!
      <br />
      and there message is ${body.message}
    </p>
    <p>
      Regards,
      <br />
      ${body.name}
    </p>
  </div>`,
    });

    return NextResponse.json(
      {
        status: "Email sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
}
