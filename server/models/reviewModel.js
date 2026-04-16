import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  tailor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Tailor'
  },
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Booking'
  },
  rating: {
    type: Number,
    required: [true, 'Please add a rating between 1 and 5'],
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: [true, 'Please add a comment']
  }
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;