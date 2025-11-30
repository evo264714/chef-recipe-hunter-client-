// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="footer p-10 bg-neutral text-neutral-content sm:w-full">
//       <div>
//         <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
//         <p>Chefs Table.<br />Providing reliable knowledge since 1992</p>
//       </div>
//       <div>
//         <span className="footer-title">Social</span>
//         <div className="grid grid-flow-col gap-4">
//           <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
//           <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//           <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { 
  FaUtensils, 
  FaTwitter, 
  FaYoutube, 
  FaFacebook, 
  FaInstagram,
  FaPinterest,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 50%, #1a1a1a 100%)',
      borderTop: '3px solid #fbbf24'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <FaUtensils className="text-4xl text-yellow-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Chef's Table
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Crafting culinary excellence since 1992. Join us on a journey through flavors, techniques, and the art of fine dining.
            </p>
            <div className="flex items-center gap-2 text-yellow-300">
              <FaClock className="text-sm" />
              <span className="text-sm text-gray-300">Mon-Sun: 6AM - 11PM</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-yellow-400 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-300 transition-colors cursor-pointer">
                <FaMapMarkerAlt className="text-red-400" />
                <span>123 Gourmet Avenue, Food City FC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-300 transition-colors cursor-pointer">
                <FaPhone className="text-green-400" />
                <span>(555) 123-CHEF</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-300 transition-colors cursor-pointer">
                <FaEnvelope className="text-blue-400" />
                <span>hello@chefstable.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-yellow-400 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['Our Story', 'Menu', 'Reservations', 'Gallery', 'Careers', 'Events', 'Catering', 'Gift Cards'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors text-sm py-1 hover:translate-x-1 transform duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-yellow-400 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow Us
            </h4>
            <p className="text-gray-300 text-sm">
              Stay connected for daily recipes, cooking tips, and exclusive events.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebook, color: 'text-blue-500', hover: 'hover:text-blue-400' },
                { Icon: FaTwitter, color: 'text-sky-400', hover: 'hover:text-sky-300' },
                { Icon: FaInstagram, color: 'text-pink-500', hover: 'hover:text-pink-400' },
                { Icon: FaYoutube, color: 'text-red-500', hover: 'hover:text-red-400' },
                { Icon: FaPinterest, color: 'text-red-600', hover: 'hover:text-red-500' }
              ].map(({ Icon, color, hover }, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`${color} ${hover} transform hover:scale-110 transition-all duration-300 bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20`}
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-4">
              <p className="text-gray-300 text-sm mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="text-gray-400 text-sm">
            © 1992 - {new Date().getFullYear()} Chef's Table. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;