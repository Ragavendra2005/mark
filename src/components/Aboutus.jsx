import React from 'react';
import './../assets/css/Aboutus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import historyImage from './../assets/images/history.jpg'; 
import client1 from './../assets/images/client1.jpg';
import client2 from './../assets/images/person_2.jpg';
import client3 from './../assets/images/client3.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
// import { Link } from 'react-router-dom';


const teamMembers = [
    {
      name: "Elon Musk",
      role: " Chief Executive Officer (CEO)",
      description: "Veeraragavan's vision is to revolutionize the logistics industry through innovation and technology. With a focus on creating seamless, efficient, and intelligent logistics solutions, [Name] has led the development of our cutting-edge logistics management system that addresses the complex challenges faced by businesses today.",
      image: client1
    },
    {
      name: " Sundar Pichai  ",
      role: " Chief Financial Officer (CFO)",
      description: "With over 10 years of experience in the logistics and supply chain sector, Vinayagam has a profound understanding of the industry's complexities and challenges. This deep industry knowledge has been instrumental in developing a robust platform that addresses the unique needs of our clients and delivers exceptional value.",
      image: client2
    },
    {
      name: "Mark Zuckerbergi",
      role: "Chief Operations Officer (COO)",
      description: "At our marketing strategy is designed to highlight the unique value and innovative solutions offered by our logistics management system. We aim to build strong brand awareness, foster customer engagement, and drive growth through a combination of digital marketing, strategic partnerships, and thought leadership.",
      image: client3
    }
  ];

const Aboutus = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="hero-section">
        <h1>ABOUT US</h1>
      </div>
      <div className="content-section">
        <div className="history-container">
          <div className="history-content">
            <h2>HISTORY</h2>
            <p>
            Ancient civilizations such as the Egyptians, Phoenicians, and Greeks developed early forms of logistics to facilitate trade.
            The Silk Road (circa 200 BCE - 1400 CE) was one of the earliest and most significant trade routes, linking Asia and Europe and necessitating sophisticated logistics for transporting goods over long distances.
            </p>
            <p>
            The 15th and 16th centuries saw European powers exploring and colonizing new lands, necessitating advanced logistics to support long sea voyages and colonial administrations. Innovations included the development of better ships and navigational techniques.
            </p>
            <div className="play-video-button">
      <div className="play-icon-container">
        <div className="play-icon"></div>
      </div>
      <span className="play-text">Play Video</span>
      </div>
          </div>
          
          <div className="history-image">
          <img src={historyImage} alt="History" /> 
          </div>
        </div>
      </div>
      <div className="how-it-works-content">
        <h2>HOW IT WORKS</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Choose Your Service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta
              consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
            </p>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} /> Error minus sint nobis dolor</li>
              <li><FontAwesomeIcon icon={faCheck} /> Voluptatum porro expedita labore esse</li>
              <li><FontAwesomeIcon icon={faCheck} /> Voluptas unde sit pariatur earum</li>
            </ul>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Select Your Payment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta
              consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
            </p>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} /> Error minus sint nobis dolor</li>
              <li><FontAwesomeIcon icon={faCheck} /> Voluptatum porro expedita labore esse</li>
              <li><FontAwesomeIcon icon={faCheck} /> Voluptas unde sit pariatur earum</li>
            </ul>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Tracking Your Order</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta
              consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
            </p>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} /> Error minus sint nobis dolor</li>
              <li><FontAwesomeIcon icon={faCheck} /> Voluptatum porro expedita labore esse</li>
              <li><FontAwesomeIcon icon={faCheck} /> Voluptas unde sit pariatur earum</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="our-team-container">
      <h2>OUR TEAM</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Aboutus;
