import express from 'express';
import { 
  getTailors, 
  getTailorById, 
  updateTailorProfile, 
  addPortfolioItem, 
  deletePortfolioItem 
} from '../controllers/tailorController.js';
import { protect, isTailor } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getTailors);
router.get('/:id', getTailorById);
router.put('/profile', protect, isTailor, updateTailorProfile);
router.post('/portfolio', protect, isTailor, addPortfolioItem);
router.delete('/portfolio/:id', protect, isTailor, deletePortfolioItem);

export default router;