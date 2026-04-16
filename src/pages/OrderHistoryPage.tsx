import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Clock, CheckCircle, XCircle, AlertCircle, ChevronDown, ChevronUp, Calendar, MapPin, IndianRupee } from 'lucide-react';

interface Order {
  _id: string;
  tailorId: string;
  tailorName: string;
  tailorImage: string;
  serviceType: string;
  date: string;
  time: string;
  address: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: number;
  paymentStatus: 'paid' | 'pending' | 'refunded';
  createdAt: string;
  description: string;
}

const OrderHistoryPage: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled'>('all');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await axios.get('/api/orders/history');
        // setOrders(response.data);
        
        // Mock data for demonstration
        setOrders([
          {
            _id: '1',
            tailorId: '1',
            tailorName: 'James Wilson',
            tailorImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            serviceType: 'Suit Alteration',
            date: '2023-06-15',
            time: '10:00 AM',
            address: '123 Main St, New York, NY 10001',
            status: 'completed',
            totalAmount: 120,
            paymentStatus: 'paid',
            createdAt: '2023-06-10',
            description: 'Tailoring of a navy blue suit, including taking in the waist and shortening the sleeves.'
          },
          {
            _id: '2',
            tailorId: '2',
            tailorName: 'Sarah Chen',
            tailorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            serviceType: 'Wedding Dress Alterations',
            date: '2023-07-20',
            time: '2:00 PM',
            address: '456 Park Ave, New York, NY 10022',
            status: 'confirmed',
            totalAmount: 250,
            paymentStatus: 'paid',
            createdAt: '2023-07-05',
            description: 'Wedding dress alterations including hem adjustment, taking in the bodice, and adding bustle points.'
          },
          {
            _id: '3',
            tailorId: '3',
            tailorName: 'Michael Rodriguez',
            tailorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            serviceType: 'Custom Jeans',
            date: '2023-08-05',
            time: '11:30 AM',
            address: '789 Broadway, New York, NY 10003',
            status: 'pending',
            totalAmount: 95,
            paymentStatus: 'pending',
            createdAt: '2023-07-28',
            description: 'Custom tailoring of denim jeans with distressed details and personalized fit.'
          },
          {
            _id: '4',
            tailorId: '1',
            tailorName: 'James Wilson',
            tailorImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            serviceType: 'Shirt Alterations',
            date: '2023-05-10',
            time: '9:00 AM',
            address: '123 Main St, New York, NY 10001',
            status: 'cancelled',
            totalAmount: 60,
            paymentStatus: 'refunded',
            createdAt: '2023-05-01',
            description: 'Alterations for three dress shirts, including sleeve shortening and taking in the sides.'
          }
        ]);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const toggleOrderExpansion = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  const getStatusBadgeClass = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary-500 text-dark p-6">
            <h1 className="text-2xl font-bold">Order History</h1>
            <p className="text-dark opacity-75">View and manage your tailoring appointments and orders</p>
          </div>

          <div className="p-6">
            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'all' 
                    ? 'bg-primary-500 text-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Orders
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'pending' 
                    ? 'bg-primary-500 text-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilter('confirmed')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'confirmed' 
                    ? 'bg-primary-500 text-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Confirmed
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'completed' 
                    ? 'bg-primary-500 text-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter('cancelled')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'cancelled' 
                    ? 'bg-primary-500 text-dark' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cancelled
              </button>
            </div>

            {filteredOrders.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-2">No orders found</h3>
                <p className="text-gray-600 mb-6">
                  {filter === 'all' 
                    ? "You haven't placed any orders yet." 
                    : `You don't have any ${filter} orders.`}
                </p>
                <Link to="/tailors" className="btn btn-primary">
                  Find a Tailor
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredOrders.map((order) => (
                  <div key={order._id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="bg-gray-50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer"
                      onClick={() => toggleOrderExpansion(order._id)}
                    >
                      <div className="flex items-center mb-4 sm:mb-0">
                        <img 
                          src={order.tailorImage} 
                          alt={order.tailorName} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{order.serviceType}</h3>
                          <p className="text-sm text-gray-600">with {order.tailorName}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">{new Date(order.date).toLocaleDateString()}</span> at {order.time}
                        </div>
                        <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1 capitalize">{order.status}</span>
                        </div>
                        <div className="text-gray-700 font-medium">
                          {"\u20B9"}{order.totalAmount}
                        </div>
                        {expandedOrder === order._id ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    {expandedOrder === order._id && (
                      <div className="p-4 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Service Details</h4>
                            <p className="text-gray-700">{order.description}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Appointment Information</h4>
                            <div className="space-y-2">
                              <div className="flex items-start">
                                <Calendar className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                                <span className="text-gray-700">{new Date(order.date).toLocaleDateString()} at {order.time}</span>
                              </div>
                              <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                                <span className="text-gray-700">{order.address}</span>
                              </div>
                              <div className="flex items-start">
                                <IndianRupee className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                                <span className="text-gray-700">
                                  {"\u20B9"}{order.totalAmount} ({order.paymentStatus === 'paid' 
                                    ? 'Paid' 
                                    : order.paymentStatus === 'refunded' 
                                      ? 'Refunded' 
                                      : 'Payment Pending'})
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Link 
                            to={`/tailors/${order.tailorId}`} 
                            className="btn btn-outline"
                          >
                            View Tailor
                          </Link>
                          
                          {order.status === 'pending' && (
                            <>
                              <button className="btn btn-primary">
                                Confirm Appointment
                              </button>
                              <button className="btn bg-red-500 text-white hover:bg-red-600">
                                Cancel Order
                              </button>
                            </>
                          )}
                          
                          {order.status === 'confirmed' && (
                            <button className="btn bg-red-500 text-white hover:bg-red-600">
                              Cancel Appointment
                            </button>
                          )}
                          
                          {order.status === 'completed' && (
                            <button className="btn btn-primary">
                              Leave a Review
                            </button>
                          )}
                          
                          {order.status === 'cancelled' && (
                            <button className="btn btn-primary">
                              Book Again
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Looking for a new tailoring service?</p>
          <Link to="/tailors" className="btn btn-primary">
            Find a Tailor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;