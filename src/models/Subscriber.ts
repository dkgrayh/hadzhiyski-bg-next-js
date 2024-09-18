import { Schema, model, models } from 'mongoose';

// Define the Subscriber schema
const subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Subscriber model (reuse the model if already defined)
const Subscriber = models.Subscriber || model('Subscriber', subscriberSchema);

export default Subscriber;
