import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Calendar, Clock, Award, Scissors, MessageCircle, Phone, Mail, ChevronRight, ChevronLeft } from 'lucide-react';

interface Tailor {
  _id: string;
  name: string;
  profilePicture: string;
  rating: number;
  specialization: string[];
  location: string;
  experience: number;
  bio: string;
  hourlyRate: number;
  availability: string[];
  portfolio: {
    image: string;
    description: string;
  }[];
  reviews: {
    user: {
      name: string;
      profilePicture?: string;
    };
    rating: number;
    comment: string;
    date: string;
  }[];
}

const TailorProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tailor, setTailor] = useState<Tailor | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('portfolio');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchTailor = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await axios.get(`/api/tailors/${id}`);
        // setTailor(response.data);
        
        // Mock data for demonstration
        setTailor({
          _id: id || '1',
          name: id === '1' ? 'James Wilson' : id === '2' ? 'Sarah Chen' : 'Michael Rodriguez',
          profilePicture: `https://images.unsplash.com/photo-${id === '1' ? '1507679799987-c73779587ccf' : id === '2' ? '1573497019940-1c28c88b4f3e' : '1568602471122-7832951cc4c5'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
          rating: id === '1' ? 4.8 : id === '2' ? 4.9 : 4.7,
          specialization: id === '1' 
            ? ['Formal Wear', 'Suits', 'Business Attire'] 
            : id === '2' 
              ? ['Wedding Dresses', 'Evening Gowns', 'Formal Wear']
              : ['Casual Wear', 'Denim', 'Streetwear'],
          location: id === '1' ? 'Delhi, India': id === '2' ? 'Mumbai, Maharashtra': 'Bengaluru, Karnataka',
          experience: id === '1' ? 15 : id === '2' ? 12 : 8,
          bio: id === '1' 
            ? 'Specializing in formal wear and suits with over 15 years of experience in the fashion industry. I have worked with numerous high-profile clients and luxury brands, developing a keen eye for detail and precision. My approach combines traditional tailoring techniques with modern aesthetics to create timeless pieces that fit perfectly and reflect the wearer\'s personality.' 
            : id === '2' 
              ? 'Expert in wedding dresses and evening gowns with a modern touch. Trained in Paris with experience working for luxury fashion houses. I believe that every garment should not only look beautiful but also feel comfortable and enhance the wearer\'s confidence. My designs blend elegance with functionality, ensuring that special occasions are complemented by exceptional attire.'
              : 'Master of casual and trendy outfits with attention to detail. Specializes in denim alterations and contemporary streetwear. I focus on creating versatile, comfortable clothing that reflects current trends while maintaining individuality. My background in sustainable fashion influences my approach to tailoring, emphasizing quality and longevity in every piece I work on.',
          hourlyRate: id === '1' ? 85 : id === '2' ? 95 : 75,
          availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          portfolio: [
            {
              image: `https://images.unsplash.com/photo-${id === '1' ? '1617137968515-2efe13c3e6c6' : id === '2' ? '1594575970352-c8e75ed7aa4e' : '1489987707025-afc232f7ea0f'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
              description: id === '1' ? 'Custom tailored suit for a business executive' : id === '2' ? 'Wedding dress alterations with lace detailing' : 'Denim jacket customization'
            },
            {
              image: `https://images.unsplash.com/photo-${id === '1' ? '1598522280875-e7f9ecd05f2a' : id === '2' ? '1525257831700-9e2e6c6eda77' : '1551488831-00ddaafe3a00'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
              description: id === '1' ? 'Formal tuxedo with custom lapels' : id === '2' ? 'Evening gown with hand-sewn embellishments' : 'Custom t-shirt design with embroidery'
            },
            {
              image: `https://images.unsplash.com/photo-${id === '1' ? '1593030761757-71fae45fa0e7' : id === '2' ? '1539008835657-9513b0d906c8' : '1556905055-8f358a7a47b2'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
              description: id === '1' ? 'Business attire collection for a corporate client' : id === '2' ? 'Bridal party dresses with coordinated designs' : 'Streetwear collection with custom patches'
            }
          ],
          reviews: [
            {
              user: {
                name: 'Alex Thompson',
                profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              },
              rating: 5,
              comment: id === '1' 
                ? 'James created an amazing suit for my wedding. The fit was perfect and the attention to detail was impressive. Highly recommend!' 
                : id === '2' 
                  ? 'Sarah altered my wedding dress beautifully. She understood exactly what I wanted and delivered beyond my expectations.'
                  : 'Michael customized my denim jacket with unique embroidery that gets compliments everywhere I go. Great work!',
              date: '2023-05-15'
            },
            {
              user: {
                name: 'Emily Rodriguez',
                profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
              },
              rating: 4,
              comment: id === '1' 
                ? 'Very professional service. My business suits fit better than any I\'ve had before. Would use again.' 
                : id === '2' 
                  ? 'Sarah designed a beautiful evening gown for my charity event. The only reason for 4 stars is that it took a bit longer than expected.'
                  : 'Great work on my casual wear collection. Michael has a good eye for current trends while keeping things unique.',
              date: '2023-04-22'
            },
            {
              user: {
                name: 'David Kim',
                profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
              },
              rating: 5,
              comment: id === '1' 
                ? 'James altered my entire wardrobe after I lost weight. Everything fits perfectly now. His expertise is evident in every stitch.' 
                : id === '2' 
                  ? 'I can\'t say enough good things about Sarah\'s work on my daughter\'s prom dress. It was stunning and fit like a glove.'
                  : 'Michael\'s streetwear designs are innovative and comfortable. He really understands how to blend style with functionality.',
              date: '2023-03-10'
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching tailor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTailor();
  }, [id]);

  const nextImage = () => {
    if (tailor) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === tailor.portfolio.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (tailor) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? tailor.portfolio.length - 1 : prevIndex - 1
      );
    }
  };

  if (loading || !tailor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-primary-500 text-dark py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={tailor.profilePicture} 
                alt={tailor.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{tailor.name}</h1>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="ml-1 font-medium">{tailor.rating} (
                  {tailor.reviews.length} reviews)
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{tailor.location}</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {tailor.specialization.map((spec, index) => (
                  <span key={index} className="bg-white text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:ml-auto mt-6 md:mt-0">
              <Link to={`/booking/${tailor._id}`} className="btn btn-dark bg-dark text-white hover:bg-gray-800">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="flex border-b">
                <button 
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'portfolio' ? 'text-primary-600 border-b-2 border-primary-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('portfolio')}
                >
                  Portfolio
                </button>
                <button 
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'about' ? 'text-primary-600 border-b-2 border-primary-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('about')}
                >
                  About
                </button>
                <button 
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'reviews' ? 'text-primary-600 border-b-2 border-primary-500' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>

              {/* Portfolio Tab */}
              {activeTab === 'portfolio' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
                  
                  {/* Portfolio Carousel */}
                  <div className="relative mb-8">
                    <div className="rounded-lg overflow-hidden h-96 bg-gray-100">
                      <img 
                        src={tailor.portfolio[currentImageIndex].image} 
                        alt={`Portfolio item ${currentImageIndex + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                  </div>
                  
                  <p className="text-lg text-center mb-8">
                    {tailor.portfolio[currentImageIndex].description}
                  </p>
                  
                  {/* Thumbnails */}
                  <div className="flex justify-center space-x-4">
                    {tailor.portfolio.map((item, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-20 h-20 rounded-md overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-primary-500' : 'opacity-70'}`}
                      >
                        <img 
                          src={item.image} 
                          alt={`Thumbnail ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">About {tailor.name}</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Bio</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {tailor.bio}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 text-primary-600 mr-2" />
                        <h3 className="font-semibold">Experience</h3>
                      </div>
                      <p className="text-gray-700">{tailor.experience} years in professional tailoring</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Scissors className="h-5 w-5 text-primary-600 mr-2" />
                        <h3 className="font-semibold">Specialization</h3>
                      </div>
                      <p className="text-gray-700">{tailor.specialization.join(', ')}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary-600 mr-2" />
                        <h3 className="font-semibold">Hourly Rate</h3>
                      </div>
                      <p className="text-gray-700">{"\u20B9"}{tailor.hourlyRate} per hour</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                        <h3 className="font-semibold">Availability</h3>
                      </div>
                      <p className="text-gray-700">{tailor.availability.join(', ')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Client Reviews</h2>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="ml-1 font-medium">{tailor.rating} ({tailor.reviews.length} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {tailor.reviews.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img 
                              src={review.user.profilePicture || 'https://via.placeholder.com/150'} 
                              alt={review.user.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold">{review.user.name}</h3>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Contact & Booking */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{tailor.name.toLowerCase().replace(' ', '.')}@tailordoor.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Message via app</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
                <p className="text-gray-600 mb-6">
                  Ready to work with {tailor.name}? Book an appointment now to get started on your custom tailoring project.
                </p>
                <Link 
                  to={`/booking/${tailor._id}`} 
                  className="btn btn-primary w-full text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Why Choose {tailor.name}?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{tailor.experience} years of professional experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Specializes in {tailor.specialization[0]} and {tailor.specialization[1]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Top-rated with {tailor.rating} stars</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Satisfaction guaranteed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorProfilePage;