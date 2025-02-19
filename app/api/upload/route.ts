import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Désactive le bodyParser (même si pas utile ici)
  },
};

export async function POST(req: NextRequest) {
  console.log("📩 Nouvelle requête reçue");

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File; // Récupérer le fichier

    if (!file) {
      console.error("❌ Aucun fichier reçu !");
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    console.log("📁 Fichier reçu :", file.name);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const uploadDir = path.join(process.cwd(), "public/uploads");

    console.log("📂 Création du dossier d'upload :", uploadDir);
    await fs.mkdir(uploadDir, { recursive: true });

    const newPath = path.join(uploadDir, file.name);
    console.log(`🚀 Enregistrement du fichier : ${newPath}`);

    await fs.writeFile(newPath, buffer);

    console.log("✅ Upload terminé avec succès");

    return NextResponse.json({ message: "File uploaded successfully", filePath: `/uploads/${file.name}` });
  } catch (error) {
    console.error("❌ ERREUR INTERNE :", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}