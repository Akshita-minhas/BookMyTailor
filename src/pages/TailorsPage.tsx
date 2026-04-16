import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, MapPin, Filter, X } from 'lucide-react';
import axios from 'axios';

interface Tailor {
  _id: string;
  name: string;
  profilePicture: string;
  rating: number;
  specialization: string[];
  location: string;
  experience: number;
  bio: string;
}

const TailorsPage: React.FC = () => {
  const [tailors, setTailors] = useState<Tailor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    specialization: '',
    minRating: 0,
    location: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await axios.get('/api/tailors');
        // setTailors(response.data);
        
        // Mock data for demonstration
        setTailors([
          {
  _id: '1',
  name: 'James Wilson',
  profilePicture: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?...',
  rating: 4.8,
  specialization: ['Formal Wear', 'Suits', 'Business Attire'],
  location: 'Delhi, India',
  experience: 15,
  bio: 'Specializing in formal wear and suits with over 15 years of experience in the fashion industry. Known for precision and attention to detail.'
},
{
  _id: '2',
  name: 'Sarah Chen',
  profilePicture: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?...',
  rating: 4.9,
  specialization: ['Wedding Dresses', 'Evening Gowns', 'Formal Wear'],
  location: 'Mumbai, Maharashtra',
  experience: 12,
  bio: 'Expert in wedding dresses and evening gowns with a modern touch. Trained in Paris with experience working for luxury fashion houses.'
},
{
  _id: '3',
  name: 'Michael Rodriguez',
  profilePicture: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?...',
  rating: 4.7,
  specialization: ['Casual Wear', 'Denim', 'Streetwear'],
  location: 'Bengaluru, Karnataka',
  experience: 8,
  bio: 'Master of casual and trendy outfits with attention to detail. Specializes in denim alterations and contemporary streetwear.'
},
{
  _id: '4',
  name: 'Emily Johnson',
  profilePicture: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?...',
  rating: 4.6,
  specialization: ['Alterations', 'Repairs', 'Custom Embroidery'],
  location: 'Chandigarh, India',
  experience: 10,
  bio: 'Specializes in alterations, repairs, and custom embroidery. Known for breathing new life into old garments with creative solutions.'
},
{
  _id: '5',
  name: 'David Kim',
  profilePicture: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?...',
  rating: 4.9,
  specialization: ['Traditional Clothing', 'Cultural Wear', 'Formal Wear'],
  location: 'Jaipur, Rajasthan',
  experience: 20,
  bio: 'Master tailor with 20 years of experience specializing in traditional and cultural clothing. Trained in both Eastern and Western tailoring techniques.'
},
{
  _id: '6',
  name: 'Sophia Martinez',
  profilePicture: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?...',
  rating: 4.7,
  specialization: ['Children\'s Clothing', 'School Uniforms', 'Casual Wear'],
  location: 'Pune, Maharashtra',
  experience: 7,
  bio: 'Specializes in children\'s clothing and school uniforms. Known for creating durable, comfortable, and stylish garments for kids of all ages.'
}

        ]);
      } catch (error) {
        console.error('Error fetching tailors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTailors();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => {
    setFilters({
      specialization: '',
      minRating: 0,
      location: '',
    });
    setSearchTerm('');
  };

  const filteredTailors = tailors.filter((tailor) => {
    // Search term filter
    const matchesSearch = tailor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tailor.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tailor.specialization.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Specialization filter
    const matchesSpecialization = filters.specialization === '' || 
                                 tailor.specialization.includes(filters.specialization);
    
    // Rating filter
    const matchesRating = tailor.rating >= filters.minRating;
    
    // Location filter
    const matchesLocation = filters.location === '' || 
                           tailor.location.includes(filters.location);
    
    return matchesSearch && matchesSpecialization && matchesRating && matchesLocation;
  });

  // Get unique specializations and locations for filter dropdowns
  const specializations = Array.from(new Set(tailors.flatMap(t => t.specialization)));
  const locations = Array.from(new Set(tailors.map(t => t.location)));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-500 text-dark py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Tailor</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Browse our network of skilled tailors and find the perfect match for your tailoring needs.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
              <div className="pl-4">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, specialization, or keyword..."
                className="w-full py-3 px-4 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                className="bg-primary-600 text-dark px-6 py-3 font-medium hover:bg-primary-700 transition-colors"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <section className="bg-gray-50 py-6 border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h2 className="text-xl font-semibold mb-4 md:mb-0">Filters</h2>
              <button 
                onClick={resetFilters}
                className="flex items-center text-primary-600 hover:text-primary-800"
              >
                <X className="h-4 w-4 mr-1" />
                Reset Filters
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                <select
                  name="specialization"
                  value={filters.specialization}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Specializations</option>
                  {specializations.map((spec, index) => (
                    <option key={index} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
                <select
                  name="minRating"
                  value={filters.minRating}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value={0}>Any Rating</option>
                  <option value={4}>4+ Stars</option>
                  <option value={4.5}>4.5+ Stars</option>
                  <option value={4.8}>4.8+ Stars</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Locations</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tailors List */}
      <section className="section">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {filteredTailors.length} {filteredTailors.length === 1 ? 'Tailor' : 'Tailors'} Available
          </h2>
          <div className="text-gray-600">
            Showing {filteredTailors.length} of {tailors.length} tailors
          </div>
        </div>

        {filteredTailors.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">😕</div>
            <h3 className="text-2xl font-semibold mb-2">No tailors found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any tailors matching your criteria. Try adjusting your filters or search term.
            </p>
            <button 
              onClick={resetFilters}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTailors.map((tailor) => (
              <div key={tailor._id} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={tailor.profilePicture} 
                  alt={tailor.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{tailor.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="ml-1 font-medium">{tailor.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tailor.location}</span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Specializes in:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {tailor.specialization.map((spec, index) => (
                        <span key={index} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {tailor.bio}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Link to={`/tailors/${tailor._id}`} className="btn btn-outline flex-1 text-center">
                      View Profile
                    </Link>
                    <Link to={`/booking/${tailor._id}`} className="btn btn-primary flex-1 text-center">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Become a Tailor CTA */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Professional Tailor?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our platform to expand your client base and grow your business. BookMyTailor connects skilled tailors with customers looking for quality tailoring services.
          </p>
          <Link to="/register" className="btn btn-primary">
            Join as a Tailor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TailorsPage;