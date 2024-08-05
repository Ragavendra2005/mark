import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerDetails.css';

const CustomerDetails = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    additionalInfo: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSearch = () => {
    navigate('/orders');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Customer Details</h2>
        <form className="customer-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customer.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={customer.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={customer.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={customer.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Info</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={customer.additionalInfo}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleSearch}>Search Orders</button>
        </form>
        <div className="customer-details">
          <h3>Details</h3>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Address:</strong> {customer.address}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Additional Info:</strong> {customer.additionalInfo}</p>
        </div>
      </div>
      <div className="gif-container">
        <img src="https://media.licdn.com/dms/image/D4E12AQEbI9MkYG0_kg/article-cover_image-shrink_720_1280/0/1657271106217?e=2147483647&v=beta&t=j0qOS-iQ4SBwc5Xojk1haqZVlkUwwg8V_Ij_QvxHqxg" alt="Logistics GIF" />
        <img src="https://media.lordicon.com/icons/wired/gradient/950-attract-customers.gif" alt="Attract Customers GIF" />
      </div>
    </div>
  );
};

export default CustomerDetails;
