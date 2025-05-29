// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, message } = req.body;

  try {
    const response = await fetch(process.env.FORMSPREE_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `${name} contacted you via your portfolio`, // Custom subject
      }),
    });

    const result = await response.json();

    if (response.ok) {
      res.status(200).json({ message: "Message sent successfully!" });
    } else {
      res.status(500).json({ message: result?.message || "Formspree error" });
    }
  } catch (error) {
    console.error("Formspree error:", error);
    res.status(500).json({ message: "Server error" });
  }
}