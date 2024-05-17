import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  const { id } = request.query;

  try {
    const result = await sql`
      SELECT *
      FROM articoli
      WHERE id = ${id};
    `;
    let article = result.rows[0];
    return response.status(200).json(article);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
