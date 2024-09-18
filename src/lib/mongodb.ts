import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cachedConnection: Connection | null = null;

async function connectToDatabase() {
  if (cachedConnection) {
    console.log('Using cached db connection');
    return cachedConnection;
  }

  try {
    const cached = await mongoose.connect(MONGODB_URI);
    cachedConnection = cached.connection;
    console.log('New mongodb connection established');
    return cachedConnection;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export default connectToDatabase;
