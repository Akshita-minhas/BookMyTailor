import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Ruler, Clock, Star, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-400 to-primary-600 text-dark">
        <div className="container-custom py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Tailoring, Scheduled Your Way</h1>
              <p className="text-lg mb-8">
                Find trusted tailors near you and book appointments instantly. No more waiting — plan your visit at your convenience.              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/tailors" className="btn bg-dark text-white hover:bg-gray-800 text-center">
                  Find a Tailor
                </Link>
                <Link to="/services" className="btn btn-outline border-dark text-center">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Tailor working" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make professional tailoring simple and convenient by helping you find nearby tailors and book appointments with ease.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Scissors className="h-8 w-8 text-primary-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Tailors</h3>
            <p className="text-gray-600">
              Our platform features only the most skilled and experienced tailors, ensuring quality craftsmanship.
            </p>
          </div>

          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Convenient Booking</h3>
            <p className="text-gray-600">
              Book appointments at your preferred time and location with our easy-to-use online platform.
            </p>
          </div>

          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Ruler className="h-8 w-8 text-primary-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
            <p className="text-gray-600">
              Get personalized clothing designs that match your style and preferences perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting your perfect outfit is just a few simple steps away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-500 text-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-2">Browse Tailors</h3>
              <p className="text-gray-600">
                Explore our network of professional tailors and view their portfolios.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 text-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-2">Book an Appointment</h3>
              <p className="text-gray-600">
                Select a tailor and schedule a convenient time for your fitting.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 text-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-2">Get Measured</h3>
              <p className="text-gray-600">
                 Visit the tailor at your scheduled appointment to get professionally measured and discuss your design preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 text-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="text-xl font-semibold mb-2">Receive Your Outfit</h3>
              <p className="text-gray-600">
              Collect your custom-made outfit from the tailor at the scheduled time.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tailors */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Featured Tailors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Discover our top-rated tailors near you and book an appointment with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div key={id} className="card overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={`https://images.unsplash.com/photo-${id === 1 ? '1507679799987-c73779587ccf' : id === 2 ? '1573497019940-1c28c88b4f3e' : '1568602471122-7832951cc4c5'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`} 
                alt={`Tailor ${id}`} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">
                    {id === 1 ? 'James Wilson' : id === 2 ? 'Sarah Chen' : 'Michael Rodriguez'}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="ml-1 font-medium">{4.7 + (id * 0.1)}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {id === 1 
                    ? 'Specializes in formal wear and suits with 15+ years of experience.' 
                    : id === 2 
                      ? 'Expert in wedding dresses and evening gowns with a modern touch.' 
                      : 'Master of casual and trendy outfits with attention to detail.'}
                </p>
                <Link to={`/tailors/${id}`} className="btn btn-outline w-full text-center">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/tailors" className="btn btn-primary">
            View All Tailors
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 5 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  {id === 1 ? "I was amazed by the quality of service. Booking the appointment was simple, and my suit fits perfectly. Will definitely use BookMyTailor again!" : id === 2 ? "My wedding dress alterations were done flawlessly. Scheduling the appointment was smooth and hassle-free. The entire experience was professional and convenient.": "Great experience from start to finish. The app is easy to use, and the tailor was punctual and highly skilled. Highly recommend BookMyTailor!"}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-primary-800">
                      {id === 1 ? 'JD' : id === 2 ? 'EM' : 'RK'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {id === 1 ? 'John Doe' : id === 2 ? 'Emily Martinez' : 'Robert Kim'}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {id === 1 ? 'Business Professional' : id === 2 ? 'Bride' : 'Fashion Enthusiast'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-dark py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Wardrobe?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
           Join BookMyTailor today and say goodbye to waiting — find nearby tailors and schedule appointments effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register" className="btn bg-dark text-white hover:bg-gray-800">
              Sign Up Now
            </Link>
            <Link to="/tailors" className="btn bg-white text-dark hover:bg-gray-100">
              Browse Tailors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;