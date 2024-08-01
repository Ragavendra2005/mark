import React from 'react';
import './../assets/css/Contacts.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contacts = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="hero-section">
        <h1>CONTACT US</h1>
      </div>
     
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>93/2, 2nd Ave, Shanthi Colony, Anna Nagar West , Chennai , Tamilnadu ,PinCode:600040</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>
          <div className="info-item">
            <h3>Email Address</h3>
            <p>voyagenet@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>More Info</h3>
            <p>
            Process
            If your knowledge of the project features is not complete, or you want to go live with the minimum viable set of features and then extend the product relying on the actual users' feedback, choose Scrum practices. We apply them for you to see or modify the product’s features, after each iteration, all along the development process. It suggests a lot of planning, requirement clarifications, some feature rework and your ever constant involvement. Although Scrum isn’t cost-saving, it provides the fastest time to market, as compared to Kanban and Waterfall.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contacts;
