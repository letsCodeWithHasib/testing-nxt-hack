// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; 2025 Nxthack IT Solutions. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/contact" className="mx-4 hover:underline">
            Contact Us
          </a>
          <a href="/privacy-policy" className="mx-4 hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="mx-4 hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
