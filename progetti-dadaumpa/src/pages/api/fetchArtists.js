import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    let artists = [];

    // Query per gli artisti
    const artistsResult = await sql`
      SELECT id, nome, img1, img2, img3, img4
      FROM artisti
      WHERE attivo = true
      ORDER BY ordine;
    `;
    artists = artistsResult.rows;

    return response.status(200).json({ artists });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
