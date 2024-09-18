import { Schema, model, models } from 'mongoose';

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

const Subscriber = models.Subscriber || model('Subscriber', subscriberSchema);

export default Subscriber;
