import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

interface Tailor {
  _id: string;
  name: string;
  profilePicture: string;
  rating: number;
  specialization: string[];
  location: string;
  hourlyRate: number;
}

interface BookingFormData {
  date: string;
  time: string;
  address: string;
  serviceType: string;
  description: string;
  paymentMethod: 'credit_card' | 'paypal' | 'cash';
}

const BookingPage: React.FC = () => {
  const { tailorId } = useParams<{ tailorId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [tailor, setTailor] = useState<Tailor | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingStep, setBookingStep] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    time: '',
    address: '',
    serviceType: '',
    description: '',
    paymentMethod: 'credit_card',
  });

  useEffect(() => {
    // Redirect if not logged in
    if (!user) {
      toast.error('Please login to book a tailor');
      navigate('/login');
      return;
    }

    const fetchTailor = async () => {
      try {
        // In a real app with backend connected:
        // const response = await axios.get(`/api/tailors/${tailorId}`);
        // setTailor(response.data);
        
        // Mock data for demonstration
        setTailor({
          _id: tailorId || '1',
          name: tailorId === '1' ? 'James Wilson' : tailorId === '2' ? 'Sarah Chen' : 'Michael Rodriguez',
          profilePicture: `https://images.unsplash.com/photo-${tailorId === '1' ? '1507679799987-c73779587ccf' : tailorId === '2' ? '1573497019940-1c28c88b4f3e' : '1568602471122-7832951cc4c5'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
          rating: tailorId === '1' ? 4.8 : tailorId === '2' ? 4.9 : 4.7,
          specialization: tailorId === '1' 
            ? ['Formal Wear', 'Suits', 'Business Attire'] 
            : tailorId === '2' 
              ? ['Wedding Dresses', 'Evening Gowns', 'Formal Wear']
              : ['Casual Wear', 'Denim', 'Streetwear'],
          location: tailorId === '1' ? 'New York, NY' : tailorId === '2' ? 'Los Angeles, CA' : 'Chicago, IL',
          hourlyRate: tailorId === '1' ? 85 : tailorId === '2' ? 95 : 75,
        });
      } catch (error) {
        console.error('Error fetching tailor:', error);
        setError('Failed to load tailor information. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTailor();
  }, [tailorId, user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      // In a real app with backend connected:
      // await axios.post('/api/bookings', {
      //   tailorId,
      //   userId: user?._id,
      //   ...formData
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      toast.success('Booking created successfully!');
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      toast.error('Failed to create booking');
    }
  };

  const nextStep = () => {
    setBookingStep(bookingStep + 1);
  };

  const prevStep = () => {
    setBookingStep(bookingStep - 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!tailor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tailor Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find the tailor you're looking for. They may no longer be available.
          </p>
          <button 
            onClick={() => navigate('/tailors')}
            className="btn btn-primary"
          >
            Browse Other Tailors
          </button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your appointment with {tailor.name} has been scheduled for {formData.date} at {formData.time}.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-gray-500">Tailor</p>
                  <p className="font-medium">{tailor.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="font-medium">{formData.serviceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="font-medium">{formData.date} at {formData.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{formData.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => navigate('/history')}
                className="btn btn-primary"
              >
                View My Bookings
              </button>
              <button 
                onClick={() => navigate('/')}
                className="btn btn-outline"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-3xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary-500 text-dark p-6">
            <h1 className="text-2xl font-bold mb-2">Book an Appointment with {tailor.name}</h1>
            <p>Complete the form below to schedule your tailoring service</p>
          </div>

          {/* Booking Progress */}
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bookingStep >= 1 ? 'bg-primary-500 text-dark' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="text-sm mt-2">Service Details</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${bookingStep >= 2 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bookingStep >= 2 ? 'bg-primary-500 text-dark' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="text-sm mt-2">Schedule</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${bookingStep >= 3 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bookingStep >= 3 ? 'bg-primary-500 text-dark' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="text-sm mt-2">Payment</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="px-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Details */}
            {bookingStep === 1 && (
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select a service</option>
                    {tailor.specialization.map((spec, index) => (
                      <option key={index} value={spec}>{spec}</option>
                    ))}
                    <option value="Alterations">Alterations</option>
                    <option value="Custom Design">Custom Design</option>
                    <option value="Repairs">Repairs</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description of Service Needed
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="input-field"
                    placeholder="Please describe what you need (e.g., suit alteration, dress hemming, custom shirt design)"
                    required
                  />
                </div>

                {/* <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Location
                  </label>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Enter your address for the tailor to visit"
                      required
                    />
                  </div>
                </div> */}

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                  >
                    Continue to Schedule
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Schedule */}
            {bookingStep === 2 && (
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="input-field"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-2">Tailor Availability</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {tailor.name} is generally available on weekdays from 9 AM to 6 PM.
                  </p>
                  <p className="text-sm text-gray-600">
                    If you need a specific time outside these hours, please mention it in your service description and the tailor will confirm if they can accommodate.
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {bookingStep === 3 && (
              <div className="p-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-4">Booking Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Tailor</p>
                      <p className="font-medium">{tailor.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Service</p>
                      <p className="font-medium">{formData.serviceType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p className="font-medium">{formData.date} at {formData.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{formData.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-4">Estimated Cost</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Consultation Fee</span>
                      <span>{"\u20B9"}{tailor.hourlyRate}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm text-gray-500">
                      <span>Service cost will be determined after consultation</span>
                      <span>TBD</span>
                    </div>
                    <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-semibold">
                      <span>Initial Payment</span>
                      <span>{"\u20B9"}{tailor.hourlyRate}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Payment Information
  </label>

  <div className="p-4 bg-gray-50 border rounded-md text-sm text-gray-700">
    Payment will be collected directly by the tailor at the time of appointment.
    <br />
    Accepted modes: Cash / UPI.
  </div>
</div>


                {/* {formData.paymentMethod === 'credit_card' && (
                  <div className="mb-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>
                )} */}

                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I agree to the terms and conditions
                    </label>
                    <p className="text-gray-500">
                      By booking, you agree to our cancellation policy and service terms.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;