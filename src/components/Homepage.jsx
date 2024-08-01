import React from 'react';
import './../assets/css/Homepage.css';
import historyImage from './../assets/images/history.jpg'; 
import storageImage from './../assets/images/storage.jpg';
import airTransportImage from './../assets/images/air_transport.jpg';
import cargoTransportImage from './../assets/images/cargo_transport.jpg';
import cargoShipImage from './../assets/images/cargo_ship.jpg';
import warehouseImage from './../assets/images/history.jpg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const Homepage = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="hero-section">
        <h1>Logistics Management System</h1>
        <button className="cta-button">Get Started!</button>
      </div>
      <div className="quote-section">
      <div className="quote-item">
        <div className="quote-icon ">₹</div>
        <h3>BEST PRICES</h3>
        <p>We offer the most competitive pricing in the market, ensuring you get the best value for your investment.</p>
      </div>
      <div className="quote-form">
        <h3>GET FREE QUOTE</h3>
        <form>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <button type="submit">GET QUOTE</button>
        </form>
      </div>
      <div className="quote-item">
        <div className="quote-icon">📞</div>
        <h3>24/7 SUPPORT</h3>
        <p>Get assistance whenever you need it with our round-the-clock customer support team.Benefit from comprehensive training programs to ensure your team is proficient with our system.</p>
      </div>
    </div>
      <div className="content-section">
        <div className="history-container">
          <div className="history-content">
            <h2>ABOUT US</h2>
            <h3>Our Mission</h3>
            <p>
            Our mission is to empower businesses with innovative technology that simplifies logistics management, optimizes supply chains, and improves overall operational efficiency. We strive to provide our clients with the tools they need to meet their logistics challenges head-on, enabling them to focus on their core business activities and achieve their strategic goals.
            </p>
            <h3>Vision</h3>
            <p>
            We envision a world where logistics operations are seamless, transparent, and highly efficient. By leveraging advanced technology and industry expertise, we aim to be the leading provider of logistics management solutions, setting new standards for excellence and innovation in the industry.
            </p>
            <h3>Order Management</h3>
            <p>
            Our logistics management system facilitates the entire order lifecycle, from placement to fulfillment. It captures and processes order details, tracks order status, and integrates with other systems to ensure accurate and timely order processing.
            </p>
            <h3>
            Transportation Planning and Execution
            </h3>
            <p>
            We provide tools for efficient transportation planning and execution, including route optimization, carrier selection, load planning, and scheduling. Our system helps reduce transportation costs and improve delivery times.
            </p>
            <h3>Supplier and Vendor Management</h3>
            <p>Manage supplier relationships and vendor performance with ease. Our system enables businesses to track supplier information, monitor performance metrics, and collaborate effectively with suppliers to ensure timely and quality deliveries.</p>
            <Link to='/Aboutus'>
            <p>Learn more</p>
            </Link>
          </div>
          <div className="history-image">
          <img src={historyImage} alt="History" /> 
          </div>
        </div>
      </div>
        <div className="services-section">
          <h2>OUR SERVICES</h2>
          <div className="services-container">
            <div className="service-item" style={{ backgroundImage: `url(${storageImage})` }}>
              <div className="service-content">
                <h3>Storage</h3>
              </div>
            </div>
            <div className="service-item" style={{ backgroundImage: `url(${airTransportImage})` }}>
              <div className="service-content">
                <h3>Air Transports</h3>
              </div>
            </div>
            <div className="service-item" style={{ backgroundImage: `url(${cargoTransportImage})` }}>
              <div className="service-content">
                <h3>Cargo Transports</h3>
              </div>
            </div>
            <div className="service-item" style={{ backgroundImage: `url(${warehouseImage})` }}>
            <div className="service-content">
              <h3>Warehouse</h3>
            </div>
            </div>
            <div className="service-item" style={{ backgroundImage: `url(${cargoShipImage})` }}>
              <div className="service-content">
                <h3>Cargo Ship</h3>
              </div>
            </div>
          </div>
        </div>
      
      <section className="more-services-section">
                <h2>MORE SERVICES</h2>
                <p>We Offer The Following Services</p>
                <div className="more-services-container">
                    <div className="more-service-item">
                        <div className="more-service-icon">✈️</div>
                        <h3>Air Freight</h3>
                        <p> Refers specifically to the commercial transportation of goods by air, including the costs, logistics, and regulations involved.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚢</div>
                        <h3>Ocean Freight</h3>
                        <p>As one of the world's largest container shipping companies, we move 12 million containers every year and deliver to every corner of the globe.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚚</div>
                        <h3>Ground Shipping</h3>
                        <p>Transportation of goods over land, typically via truck or train, to deliver items from the seller to the buyer.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🏢</div>
                        <h3>Warehousing</h3>
                        <p>More than just storage, our warehouses are your supply chain pit-stop, expertly designed to keep your products flowing through the supply chain at a pace of your choosing. </p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">📦</div>
                        <h3>Storage</h3>
                        <p>The storage of goods takes place in various ways depending on the type of goods and the needs of the warehouse or the company handling them.</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚛</div>
                        <h3>Delivery Van</h3>
                        <p>A delivery van is a motor vehicle for the carriage of goods, with a maximum mass not exceeding 3,500 kg</p>
                        <a href="#learn-more" className="learn-more">Learn More</a>
                    </div>
                </div>
            </section>
            <Footer/>
    </div>
  );
};

export default Homepage;
