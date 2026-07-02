import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfólio Vinikra <onboarding@resend.dev>", // Em produção com domínio próprio, seria contato@vinikra.com
      to: "vinikra14@gmail.com", // Seu email real cadastrado no resend
      subject: `Novo Lead Premium: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nWhatsApp: ${phone}\n\nDetalhes do Projeto:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}
