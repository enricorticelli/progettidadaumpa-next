import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    let artists = [];

    const artistsResult = await sql`
      SELECT id, nome, img1, img2, img3, img4
      FROM artisti
      WHERE attivo = true
      ORDER BY ordine;
    `;

    artists = artistsResult.rows;

    return res.status(200).json({ artists });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
