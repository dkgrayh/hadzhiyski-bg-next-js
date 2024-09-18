import { NextRequest, NextResponse } from 'next/server';
import Subscriber from '@/models/Subscriber';
import connectToDatabase from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the incoming JSON
    console.log('Request Body:', body); // Log the request body

    const { email } = body;

    // Validate the email is present in the request
    if (!email) {
      console.log('Error: Email is required');
      return NextResponse.json(
        { message: 'Failed', error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('Connecting to MongoDB...');
    await connectToDatabase(); // Ensure the MongoDB connection is established

    // Check if the email already exists
    const existingEmail = await Subscriber.findOne({ email });

    if (existingEmail) {
      console.log('Error: Email is already subscribed');
      return NextResponse.json(
        { message: 'Failed', error: 'Email is already subscribed' },
        { status: 400 }
      );
    }

    // Insert the new email
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Return success response
    console.log('Subscription successful');
    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in /api/subscribe:', error);
    return NextResponse.json(
      { message: 'Failed', error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
