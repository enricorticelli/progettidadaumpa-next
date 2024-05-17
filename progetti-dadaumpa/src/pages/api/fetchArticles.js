import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    let articles = [];

    // Query per gli articoli
    const articlesResult = await sql`
      SELECT id, titolo, sottotitolo, 
      CASE 
        WHEN LENGTH(contenuto) <= 100 THEN contenuto
        ELSE SUBSTRING(contenuto, 1, 250) || '...'
      END AS contenuto,
      autore, immagine_url, data_pubblicazione
      FROM articoli
      ORDER BY data_pubblicazione DESC;
    `;
    articles = articlesResult.rows;

    return response.status(200).json({ articles });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
