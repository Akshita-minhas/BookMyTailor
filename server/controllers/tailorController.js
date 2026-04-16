import Tailor from '../models/tailorModel.js';
import User from '../models/userModel.js';

// @desc    Get all tailors
// @route   GET /api/tailors
// @access  Public
export const getTailors = async (req, res) => {
  try {
    const tailors = await Tailor.find().populate('user', 'name email profilePicture');

    const formattedTailors = tailors.map(tailor => ({
      _id: tailor._id,
      name: tailor.user.name,
      email: tailor.user.email,
      profilePicture: tailor.user.profilePicture,
      specialization: tailor.specialization,
      experience: tailor.experience,
      hourlyRate: tailor.hourlyRate,
      location: tailor.location,
      rating: tailor.rating,
      numReviews: tailor.numReviews,
      isVerified: tailor.isVerified
    }));

    res.status(200).json(formattedTailors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get tailor by ID
// @route   GET /api/tailors/:id
// @access  Public
export const getTailorById = async (req, res) => {
  try {
    const tailor = await Tailor.findById(req.params.id).populate('user', 'name email profilePicture bio');

    if (!tailor) {
      return res.status(404).json({ message: 'Tailor not found' });
    }

    const formattedTailor = {
      _id: tailor._id,
      name: tailor.user.name,
      email: tailor.user.email,
      profilePicture: tailor.user.profilePicture,
      bio: tailor.user.bio,
      specialization: tailor.specialization,
      experience: tailor.experience,
      hourlyRate: tailor.hourlyRate,
      location: tailor.location,
      availability: tailor.availability,
      portfolio: tailor.portfolio,
      rating: tailor.rating,
      numReviews: tailor.numReviews,
      isVerified: tailor.isVerified
    };

    res.status(200).json(formattedTailor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update tailor profile
// @route   PUT /api/tailors/profile
// @access  Private/Tailor
export const updateTailorProfile = async (req, res) => {
  try {
    const { specialization, experience, hourlyRate, location, availability } = req.body;

    let tailor = await Tailor.findOne({ user: req.user.id });

    if (!tailor) {
      return res.status(404).json({ message: 'Tailor profile not found' });
    }

    tailor.specialization = specialization || tailor.specialization;
    tailor.experience = experience || tailor.experience;
    tailor.hourlyRate = hourlyRate || tailor.hourlyRate;
    tailor.location = location || tailor.location;
    tailor.availability = availability || tailor.availability;

    tailor = await tailor.save();

    res.status(200).json(tailor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add portfolio item
// @route   POST /api/tailors/portfolio
// @access  Private/Tailor
export const addPortfolioItem = async (req, res) => {
  try {
    const { image, description } = req.body;

    let tailor = await Tailor.findOne({ user: req.user.id });

    if (!tailor) {
      return res.status(404).json({ message: 'Tailor profile not found' });
    }

    tailor.portfolio.push({ image, description });
    tailor = await tailor.save();

    res.status(201).json(tailor.portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete portfolio item
// @route   DELETE /api/tailors/portfolio/:id
// @access  Private/Tailor
export const deletePortfolioItem = async (req, res) => {
  try {
    let tailor = await Tailor.findOne({ user: req.user.id });

    if (!tailor) {
      return res.status(404).json({ message: 'Tailor profile not found' });
    }

    tailor.portfolio = tailor.portfolio.filter(
      item => item._id.toString() !== req.params.id
    );

    tailor = await tailor.save();

    res.status(200).json(tailor.portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};