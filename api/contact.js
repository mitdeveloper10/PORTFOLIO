import { MongoClient } from 'mongodb';

// Cache the database connection in serverless execution environments
let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }
  
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = client.db('portfolio');
  cachedDb = db;
  return db;
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return res.status(500).json({ message: 'Database URI is not defined in environment variables' });
  }

  try {
    const db = await connectToDatabase(uri);
    const collection = db.collection('messages');

    // Insert message into the 'messages' collection
    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ message: 'Message sent successfully!', id: result.insertedId });
  } catch (error) {
    console.error('Database connection error:', error);
    return res.status(500).json({ message: 'Internal Server Error', errorString: error.toString() });
  }
}
