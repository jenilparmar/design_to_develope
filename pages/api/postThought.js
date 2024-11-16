// pages/api/saveData.js
// {
//     "data": {
//       "code": "wgwsdc",
//       "thought": "What a great day",
// "nameOfRoom":"HunnyBinny"
//     }
//   }
// pages/api/saveData.js
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { code, thought, nameOfRoom } = req.body.data;

      // Debugging logs
      console.log("MongoDB URI:", process.env.MONGODB_URI);
      console.log("Incoming data:", req.body.data);

      // Check if all required fields are provided
      if (!code  || !nameOfRoom) {
        return res
          .status(400)
          .json({ message: "Missing 'code', 'thought', or 'nameOfRoom'" });
      }

      // MongoDB client setup
      const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      try {
        // Connect to MongoDB
        await client.connect();

        // Access the database and collection
        const database = client.db("D2D");
        const collection = database.collection("ThoughtGallery");

        // Perform an upsert operation
        const result = await collection.updateOne(
          { code: code }, // Filter by code
          {
            $set: { nameOfRoom: nameOfRoom }, // Set nameOfRoom only if creating a new document
            $push: { thoughts: thought }, // Add the thought to the array
          },
          { upsert: true } // Create a new document if no matching code is found
        );

        // Send a success response
        res.status(201).json({ message: "Data saved successfully!", result });
      } finally {
        // Ensure the connection is closed
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
