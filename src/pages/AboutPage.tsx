import React from 'react';
import { Users, Award, Heart, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-500 text-dark py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TailorDoor</h1>
          <p className="text-xl max-w-3xl mx-auto">
          We're on a mission to revolutionize the tailoring industry by making appointment booking simple, convenient, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              BookMyTailor was created with a simple yet powerful idea: to solve the common challenge of finding available tailors and booking appointments without wasting time.
            </p>
            <p className="text-gray-700 mb-4">
              We noticed that many people struggled to find available tailors and convenient appointment times, often leading to delays and unnecessary waiting. This common challenge inspired the creation of BookMyTailor.
            </p>
            <p className="text-gray-700">
             BookMyTailor aims to connect customers with skilled tailors, making appointment booking simple, convenient, and reliable.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558227691-41a33044adb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Tailor working" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At BookMyTailor, we are guided by a set of core principles that shape our vision and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We believe everyone deserves access to quality tailoring services, regardless of their location or schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We are committed to upholding high standards of quality, reliability, and user experience in every aspect of our platform.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We support local tailors and foster a community that values traditional craftsmanship in the modern world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind BookMyTailor who are dedicated to transforming the tailoring industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              name: "Emma Johnson",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            },
            {
              name: "David Chen",
              role: "CTO",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            },
            {
              name: "Sophia Patel",
              role: "Head of Operations",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
            },
            {
              name: "Marcus Williams",
              role: "Lead Designer",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="card overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}



      <section className="section">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      The dedicated team behind BookMyTailor, working together to simplify the tailoring appointment experience.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        name: "Akshita Minhas",
        role: "Co-Founder & Frontend Developer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      },
      {
        name: "Saneha Bhatia",
        role: "Co-Founder & Backend Developer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      },
      {
        name: "Suhani",
        role: "Co-Founder & UI/UX Designer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      }
    ].map((member, index) => (
      <div key={index} className="card overflow-hidden hover:shadow-lg transition-shadow">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-64 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Locations */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where We Operate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              TailorDoor is rapidly expanding across the country. Here are some of the major cities where our services are available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Mumbai, Maharashtra",
  "Delhi, India",
  "Bengaluru, Karnataka",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
  "Ahmedabad, Gujarat",
  "Pune, Maharashtra",
  "Surat, Gujarat"
            ].map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                <span className="font-medium">{city}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your city? We're constantly expanding! Contact us to request service in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-primary-600 text-dark py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join the TailorDoor Family</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a skilled tailor looking to expand your client base or a fashion enthusiast seeking perfect fits, TailorDoor welcomes you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="btn bg-dark text-white hover:bg-gray-800">
              Join as a Tailor
            </a>
            <a href="#" className="btn bg-white text-dark hover:bg-gray-100">
              Sign Up as a Customer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;