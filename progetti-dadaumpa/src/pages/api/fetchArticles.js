import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    let articles = [];

    // Query per gli articoli
    const articlesResult = await sql`
      SELECT id, titolo, sottotitolo, 
      CASE 
        WHEN LENGTH(contenuto) <= 100 THEN contenuto
        ELSE SUBSTRING(contenuto, 1, 150) || '...'
      END AS contenuto,
      autore, immagine_url, data_pubblicazione
      FROM articoli
      WHERE attivo = true
      ORDER BY data_pubblicazione DESC;
    `;
    articles = articlesResult.rows;

    return res.status(200).json({ articles });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
