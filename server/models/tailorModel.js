import mongoose from 'mongoose';

const tailorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  specialization: {
    type: [String],
    required: [true, 'Please add specialization']
  },
  experience: {
    type: Number,
    required: [true, 'Please add years of experience']
  },
  hourlyRate: {
    type: Number,
    required: [true, 'Please add hourly rate']
  },
  location: {
    type: String,
    required: [true, 'Please add location']
  },
  availability: {
    type: [String],
    default: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  portfolio: [
    {
      image: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  rating: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Tailor = mongoose.model('Tailor', tailorSchema);

export default Tailor;