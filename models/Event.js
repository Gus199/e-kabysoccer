import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    venue: { type: String, required: true },
    image: { type: String, required: true },
    date:{ type: String, required: true },
    time: { type: String, required: true },
    address: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Event =
  mongoose.models.Event || mongoose.model('Event', eventSchema);
export default Event;


