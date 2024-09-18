// pages/api/test-connection.ts
import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('test').findOne({});

    res.status(200).json({ message: 'Connection successful', result });
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({
          error: 'Failed to connect to MongoDB',
          details: error.message,
        });
    } else {
      res
        .status(500)
        .json({
          error: 'Failed to connect to MongoDB',
          details: 'Unknown error',
        });
    }
  }
}
