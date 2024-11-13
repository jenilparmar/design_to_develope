// {
//     "code":"wgwsdc"
//   }
// import { MongoClient } from "mongodb";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { code } = req.body;

    // Validate if 'code' is present
    if (!code) {
      return res
        .status(400)
        .json({ message: "Missing 'code' in the request body." });
    }

    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      // Log to check if MongoDB connection is established
      await client.connect();
      console.log("Connected to MongoDB");

      const database = client.db("D2D");
      const collection = database.collection("ImageGallery");

      // Find the document with the specified 'code'
      const document = await collection.findOne({ code: code });

      console.log("Found Document:", document);

      if (!document) {
        console.log(`No document found with code: ${code}`);
        return res
          .status(404)
          .json({ message: "Document with specified code not found." });
      }

      // Return the found document, including the base64Images field
      res.status(200).json({ base64Images: document.base64Images || [] });
    } catch (error) {
      console.error("Error connecting to MongoDB or retrieving data:", error);
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
      console.log("MongoDB connection closed");
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
