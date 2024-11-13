import { MongoClient } from "mongodb";

// Function to generate a random 6-letter string
function generateRandomCode(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    
    // Generate a random string of the specified length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }

    return result;
}

export default async function handler(req, res) {
    if (req.method === "GET") {
        const client = new MongoClient(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();

            // Access the database and collection
            const database = client.db("D2D");
            const collection = database.collection("ThoughtGallery");

            let code;
            let existingDocument;

            // Loop until we find a unique code
            do {
                // Generate a random code
                code = generateRandomCode();

                // Check if the code already exists in the collection
                existingDocument = await collection.findOne({ code });

            } while (existingDocument);  // Continue looping if the code already exists

            // If a unique code is found, return it
            res.status(200).json({ code });
        } catch (error) {
            console.error("Error generating or checking code:", error);
            res.status(500).json({ message: "Something went wrong!" });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}
