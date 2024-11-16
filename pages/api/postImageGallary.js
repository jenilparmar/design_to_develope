// pages/api/saveData.js
//  {
//     "data": {
//       "code": "wgwsdc",
//       "base64Image": "base64Azdxfgchvjbvgfxfsdghjkgfdsfghdfxgchddress"
//     }
//   }
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { base64Image, caption } = req.body;

    // Validate required fields
    if (!base64Image || !caption) {
      return res.status(400).json({
        message: "Missing 'base64Image' or 'caption' in the request body.",
      });
    }

    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      // Connect to the database
      await client.connect();
      console.log("Connected to MongoDB");

      const database = client.db("D2D");
      const collection = database.collection("ImageGallery");

      // Insert the new image and caption as a new document
      const insertResult = await collection.insertOne({
        base64Image,
        caption,
        createdAt: new Date(), // Optional: Add timestamp for when the image is added
      });

      console.log("Insert Result:", insertResult);

    
      res
        .status(200)
        .json({ message: "Image and caption saved successfully!" });
    } catch (error) {
      console.error("Error connecting to MongoDB or inserting data:", error);
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
      console.log("MongoDB connection closed");
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
