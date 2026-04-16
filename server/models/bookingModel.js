import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
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
  serviceType: {
    type: String,
    required: [true, 'Please add a service type']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  date: {
    type: Date,
    required: [true, 'Please add a date']
  },
  time: {
    type: String,
    required: [true, 'Please add a time']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  totalAmount: {
    type: Number,
    required: [true, 'Please add total amount']
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'paypal', 'cash'],
    required: [true, 'Please add payment method']
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'refunded'],
    default: 'pending'
  }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;