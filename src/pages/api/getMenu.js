import { list } from "@vercel/blob";

export const runtime = "edge";

export default async function GET(request) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { blobs } = await list();
    return res.status(200).json(blobs);
  } catch (error) {
    res.status(500).json({ error: "Errore server" });
  }
}
