import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs-extra";
import path from "path";

// Function to read and compile the email template
async function getEmailTemplate(data) {
  try {
    // Use path.resolve to construct an absolute path
    const templatePath = path.resolve(
      process.cwd(),
      "src/components/requestEmailTemplate.hbs"
    );

    // Check if the file exists
    const fileExists = await fs.pathExists(templatePath);

    if (!fileExists) {
      throw new Error("Template file does not exist.");
    }

    const templateFile = await fs.readFile(templatePath, "utf-8");
    const template = handlebars.compile(templateFile);
    return template(data);
  } catch (error) {
    console.error("Error reading or compiling the template:", error);
    throw error;
  }
}

export async function POST(req) {
  const { to, subject, text } = await req.json();

  if (!to || !subject || !text) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP host
    port: 587, // Replace with your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // Your SMTP username
      pass: process.env.EMAIL_APP_PASSWORD, // Your SMTP password
    },
  });

  try {
    const templateData = JSON.parse(text);
    const htmlContent = await getEmailTemplate(templateData);

    await transporter.sendMail({
      from: '"IQ Night" <iq.night.georgia@gmail.com>', // Sender address
      to: "iq.night.georgia@gmail.com",
      subject,
      html: htmlContent,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
