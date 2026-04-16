import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Ruler, Clock, Shirt as TShirt, Shirt, Sparkles, Pencil, Palette } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Custom Clothing Design",
      description: "Get unique, made-to-measure clothing designed specifically for you. Our tailors work with you to create the perfect outfit that matches your style and preferences.",
      icon: <Palette className="h-10 w-10 text-primary-600" />,
      image: "https://images.unsplash.com/photo-1558227691-41a33044adb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Alterations & Repairs",
      description: "Transform ill-fitting garments into perfectly tailored pieces. Our experts can alter, repair, and revitalize your favorite clothing items.",
      icon: <Scissors className="h-10 w-10 text-primary-600" />,
      image: "https://images.unsplash.com/photo-1590401251071-3d1c249a2706?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Wedding & Formal Wear",
      description: "Look your best for special occasions with our premium wedding and formal wear services. From bridal gowns to tuxedos, we ensure a perfect fit.",
      icon: <Sparkles className="h-10 w-10 text-primary-600" />,
      image: "https://images.unsplash.com/photo-1525257831700-9e2e6c6eda77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Business Attire",
      description: "Make a strong impression with perfectly tailored business attire. Our tailors specialize in suits, shirts, blouses, and other professional clothing.",
      icon: <Shirt className="h-10 w-10 text-primary-600" />,
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      title: "Casual Wear",
      description: "Elevate your everyday style with custom-made casual wear. From jeans to t-shirts, experience the comfort and confidence of perfectly fitted clothes.",
      icon: <TShirt className="h-10 w-10 text-primary-600" />,
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      title: "Embroidery & Embellishments",
      description: "Add a personal touch to your garments with custom embroidery and embellishments. Make your clothing truly unique with our decorative services.",
      icon: <Pencil className="h-10 w-10 text-primary-600" />,
      image: "https://images.unsplash.com/photo-1596939122461-e48c8a8a2d85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-500 text-dark py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
           Discover expert tailoring services and book appointments with skilled professionals near you.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Scissors className="h-8 w-8 text-primary-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Tailors</h3>
            <p className="text-gray-600">
              All our services are provided by experienced, vetted tailors with years of industry experience.
            </p>
          </div>

          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Ruler className="h-8 w-8 text-primary-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Perfect Fit Guarantee</h3>
            <p className="text-gray-600">
              We guarantee a perfect fit for all our services, with free adjustments if needed.
            </p>
          </div>

          <div className="card p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Convenient Scheduling</h3>
            <p className="text-gray-600">
              Book appointments at times that work for you, including evenings and weekends.
            </p>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h2 className="text-3xl font-bold ml-3">{service.title}</h2>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  {service.description}
                </p>
                <Link to="/tailors" className="btn btn-primary">
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for all our services. The final cost may vary based on complexity and materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-dark">Basic</h3>
                <p className="text-dark opacity-75">For simple alterations</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{"\u20B9"}30-80</span>
                  <span className="text-gray-600">/service</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Hem pants/skirts</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Take in/let out waist</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Shorten sleeves</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Minor repairs</span>
                  </li>
                </ul>
                <Link to="/tailors" className="btn btn-outline w-full text-center">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-primary-500 transform scale-105">
              <div className="bg-primary-600 p-6 text-center">
                <h3 className="text-2xl font-bold text-dark">Standard</h3>
                <p className="text-dark opacity-75">For moderate alterations</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{"\u20B9"}80-150</span>
                  <span className="text-gray-600">/service</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>All Basic services</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Resize shirts/blouses</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Suit alterations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Simple customizations</span>
                  </li>
                </ul>
                <Link to="/tailors" className="btn btn-primary w-full text-center">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-dark">Premium</h3>
                <p className="text-dark opacity-75">For custom designs</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{"\u20B9"}150+</span>
                  <span className="text-gray-600">/service</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>All Standard services</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom clothing design</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Wedding dress alterations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Complex embroidery</span>
                  </li>
                </ul>
                <Link to="/tailors" className="btn btn-outline w-full text-center">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our tailoring services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {[
            {
  question: "How does the appointment booking process work?",
  answer: "Our process is simple: browse nearby tailors, check their availability, and book an appointment at your preferred time. Visit the tailor’s shop on the scheduled date to take measurements, discuss your requirements, and finalize your design."
},
{
  question: "How much does it cost to book a tailor?",
  answer: "The cost depends on the type of service required. Basic alterations typically start from ₹100, while custom designs may start from ₹800 and above. Each tailor sets their own pricing, which you can view on their profile before booking."
},
{
  question: "How long do alterations take?",
  answer: "The timeframe depends on the complexity of the work. Simple alterations may take 1-3 days, while custom designs or detailed stitching can take 1-3 weeks. Your tailor will provide a clear timeline during your appointment."
},
{
  question: "What if I'm not satisfied with the work?",
  answer: "Customer satisfaction is important. If you’re not happy with the final result, you can directly discuss adjustments with your tailor. Most tailors are happy to make necessary corrections within a reasonable time."
},
{
  question: "Do I need to provide materials?",
  answer: "For alterations, you only need to bring your garment. For custom designs, you may provide your own fabric or consult the tailor for fabric sourcing options at an additional cost."
},
{
  question: "Can I cancel or reschedule my appointment?",
  answer: "Yes, you can cancel or reschedule your appointment up to 24 hours in advance without any charge. Late cancellations may be subject to the tailor’s individual cancellation policy."
}

          ].map((faq, index) => (
            <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-dark py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
           Book an appointment with one of our skilled tailors today and enjoy a smooth, time-saving tailoring experience.
          </p>
          <Link to="/tailors" className="btn bg-dark text-white hover:bg-gray-800">
            Find a Tailor Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;