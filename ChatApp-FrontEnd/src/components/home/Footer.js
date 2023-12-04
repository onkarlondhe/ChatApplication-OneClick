import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-2">
        <div className="row">
          <div className="col-lg-10">
            <h5>About Us</h5>
            <p>Our OneClick chat application is a real-time messaging platform that enables users to engage in text-based conversations.</p>
          </div>
          <div className="col-lg-4">
            
          </div>
          {/* <div className="col-lg-4">
            <h5>Contact Us</h5>
            <p>Email: onkarrameshlondhe@gmail.com</p>
            <p>Phone: +91 9370025900</p>
          </div> */}
        </div>
      </div>
      <div className="bg-primary text-center py-2">
        &copy; {new Date().getFullYear()} All rights reserved by Onkar | we develop what you need 💻
      </div>
    </footer>
  );
};

export default Footer;
