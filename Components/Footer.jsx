import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-4">
      <div className="container mx-auto text-center">
        {/* <h3 className="text-3xl font-bold mb-4 ">This is Footer Part Area </h3> */}
        <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
        <p className="mb-4">Follow us on social media for the latest updates!</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white hover:text-gray-300">Facebook</a>
          <a href="#" className="text-white hover:text-gray-300">Twitter</a>
          <a href="#" className="text-white hover:text-gray-300">Instagram</a>
        </div>
      <div className="container mx-auto text-center">
        <p>&copy; 2025 SeedShop. All rights reserved.</p>
        
      </div>
      </div>
    </footer>
  );
};

export default Footer;
