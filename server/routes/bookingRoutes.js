import express from 'express';
import { 
  createBooking, 
  getUserBookings, 
  getTailorBookings, 
  updateBookingStatus 
} from '../controllers/bookingController.js';
import { protect, isTailor } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, getUserBookings);
router.get('/tailor', protect, isTailor, getTailorBookings);
router.put('/:id/status', protect, updateBookingStatus);

export default router;