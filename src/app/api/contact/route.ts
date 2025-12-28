import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const TO_EMAIL = "info@midastouch.it";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const emailContent = `
<h2>Nuova richiesta dal sito Midas Touch</h2>

<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Nome</td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
  </tr>
  ${data.company ? `
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Azienda</td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.company}</td>
  </tr>
  ` : ''}
  ${data.projectType ? `
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Tipo Progetto</td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.projectType}</td>
  </tr>
  ` : ''}
  ${data.budget ? `
  <tr>
    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget</td>
    <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.budget}</td>
  </tr>
  ` : ''}
  <tr>
    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Messaggio</td>
    <td style="padding: 10px; white-space: pre-wrap;">${data.message}</td>
  </tr>
</table>
`;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Midas Touch Website",
          email: "noreply@midastouch.it",
        },
        to: [
          {
            email: TO_EMAIL,
            name: "Midas Touch",
          },
        ],
        replyTo: {
          email: data.email,
          name: data.name,
        },
        subject: `[Midas Touch] Nuovo contatto da ${data.name}${data.company ? ` - ${data.company}` : ''}`,
        htmlContent: emailContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
