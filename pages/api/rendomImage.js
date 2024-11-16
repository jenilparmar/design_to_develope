import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();

      const database = client.db("D2D");
      const collection = database.collection("ImageGallery");

      // Fetch 8 random images with base64Image and caption
      const randomImages = await collection.aggregate([
        { $sample: { size: 8 } }, // Randomly sample 8 documents
        { $project: { base64Image: 1, caption: 1 } } // Select only the fields we need
      ]).toArray();

      res.status(200).json(randomImages);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
