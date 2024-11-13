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
        try {
            const { code, base64Image } = req.body.data;
            console.log("MongoDB URI:", process.env.MONGODB_URI); // For debugging purposes only

            // Check if both `code` and `base64Image` are provided
            if (!code || !base64Image) {
                return res.status(400).json({ message: "Missing 'code' or 'base64Image'" });
            }

            // MongoDB client setup
            const client = new MongoClient(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            try {
                // Connect to the MongoDB database
                await client.connect();

                // Access the specified database and collection
                const database = client.db("D2D");
                const collection = database.collection("ImageGallery");

                // Update the document with the matching 'code', pushing the new base64Image to the `base64Images` array
                const result = await collection.updateOne(
                    { code: code },
                    { $push: { base64Images: base64Image } },
                    { upsert: true } // Creates a new document if no matching code is found
                );

                // Send a success response
                res.status(201).json({ message: "Data saved successfully!", result });
            } finally {
                // Close the MongoDB connection
                await client.close();
            }
        } catch (error) {
            console.error("Error saving data:", error);
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else {
        // Handle non-POST requests
        res.status(405).json({ message: "Method not allowed" });
    }
}
