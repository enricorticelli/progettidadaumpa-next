// api/articles.js

import { NextResponse } from "next/server";
import { connectToDatabase } from "../../utils/db"; // Assicurati di avere un file di utilità per la connessione al database

export async function GET(request) {
  try {
    // Connessione al database
    const db = await connectToDatabase();

    // Esegui la query per recuperare gli articoli dal database
    const articles = await db.query("SELECT * FROM articles"); // Modifica la query in base al tuo schema del database

    // Restituisci gli articoli come JSON
    return NextResponse.json({ articles }, { status: 200 });
  } catch (error) {
    // Gestisci eventuali errori
    console.error("Errore durante il recupero degli articoli:", error);
    return NextResponse.json(
      { error: "Errore durante il recupero degli articoli" },
      { status: 500 }
    );
  }
}
