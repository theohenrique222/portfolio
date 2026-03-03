import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    const { name, email, message } = req.body

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'theodoro222@hotmail.com',
      subject: `Menssagem de: ${name}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `
    })

    return res.status(200).json({ success: true })

  } catch (error) {
    return res.status(500).json({ error: 'Erro ao enviar email' })
  }
}