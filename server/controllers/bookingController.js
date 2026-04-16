import Booking from '../models/bookingModel.js';
import Tailor from '../models/tailorModel.js';

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req, res) => {
  try {
    const {
      tailorId,
      serviceType,
      description,
      date,
      time,
      address,
      paymentMethod,
      totalAmount
    } = req.body;

    // Check if tailor exists
    const tailor = await Tailor.findById(tailorId);
    if (!tailor) {
      return res.status(404).json({ message: 'Tailor not found' });
    }

    // Create booking
    const booking = await Booking.create({
      user: req.user.id,
      tailor: tailorId,
      serviceType,
      description,
      date,
      time,
      address,
      paymentMethod,
      totalAmount,
      status: 'pending',
      paymentStatus: paymentMethod === 'cash' ? 'pending' : 'paid'
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate({
        path: 'tailor',
        populate: {
          path: 'user',
          select: 'name profilePicture'
        }
      })
      .sort({ createdAt: -1 });

    const formattedBookings = bookings.map(booking => ({
      _id: booking._id,
      tailorId: booking.tailor._id,
      tailorName: booking.tailor.user.name,
      tailorImage: booking.tailor.user.profilePicture,
      serviceType: booking.serviceType,
      description: booking.description,
      date: booking.date,
      time: booking.time,
      address: booking.address,
      status: booking.status,
      totalAmount: booking.totalAmount,
      paymentStatus: booking.paymentStatus,
      createdAt: booking.createdAt
    }));

    res.status(200).json(formattedBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get tailor bookings
// @route   GET /api/bookings/tailor
// @access  Private/Tailor
export const getTailorBookings = async (req, res) => {
  try {
    const tailor = await Tailor.findOne({ user: req.user.id });

    if (!tailor) {
      return res.status(404).json({ message: 'Tailor profile not found' });
    }

    const bookings = await Booking.find({ tailor: tailor._id })
      .populate('user', 'name email profilePicture')
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id/status
// @access  Private
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if user owns this booking or is the tailor
    const tailor = await Tailor.findOne({ user: req.user.id });
    const isTailor = tailor && tailor._id.toString() === booking.tailor.toString();
    const isUser = req.user.id === booking.user.toString();

    if (!isUser && !isTailor) {
      return res.status(403).json({ message: 'Not authorized to update this booking' });
    }

    // Validate status transitions
    if (
      (booking.status === 'cancelled' && status !== 'cancelled') ||
      (booking.status === 'completed' && status !== 'completed')
    ) {
      return res.status(400).json({ 
        message: `Cannot change status from ${booking.status} to ${status}` 
      });
    }

    booking.status = status;
    await booking.save();

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};