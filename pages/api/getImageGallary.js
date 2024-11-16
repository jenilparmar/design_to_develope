import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { code, base64Image, caption } = req.body;

    // Validate required fields
    if (!code || !base64Image || !caption) {
      return res.status(400).json({
        message: "Missing 'code', 'base64Image', or 'caption' in the request body.",
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

      // Update the document with the specified 'code', appending the new image and caption to the array
      const updateResult = await collection.updateOne(
        { code: code },
        {
          $push: {
            base64Images: { image: base64Image, caption: caption },
          },
        },
        { upsert: true } // Create the document if it doesn't exist
      );

      console.log("Update Result:", updateResult);

      if (updateResult.matchedCount === 0 && updateResult.upsertedCount === 0) {
        return res.status(404).json({ message: "Document with specified code not found." });
      }

      // Success response
      res.status(200).json({ message: "Image and caption saved successfully!" });
    } catch (error) {
      console.error("Error connecting to MongoDB or updating data:", error);
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
      console.log("MongoDB connection closed");
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
