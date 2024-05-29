import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    let images = [
      "https://firebasestorage.googleapis.com/v0/b/progettidadaumpa-965ab.appspot.com/o/Bergo10.webp?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/progettidadaumpa-965ab.appspot.com/o/phLeonardo%20Giannini.webp?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/progettidadaumpa-965ab.appspot.com/o/ascolese.webp?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/progettidadaumpa-965ab.appspot.com/o/vito2.webp?alt=media",
    ];

    // const artistsResult = await sql`
    //   SELECT id, nome, img1, img2, img3, img4
    //   FROM artisti
    //   WHERE attivo = true
    //   ORDER BY ordine;
    // `;

    //images = artistsResult.rows;

    return res.status(200).json({ images });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
