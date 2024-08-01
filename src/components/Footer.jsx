import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        <div className="footer-column">
          <h4>Subscribe Newsletter</h4>
          <form className="footer-form">
            <input type="email" placeholder="Enter Email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with ♥ by Shiwani_R</p>
      </div>
    </footer>

  )
}

export default Footer