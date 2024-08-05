// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import OrderPage from './components/Order';
import Transportation from './components/Transportation';
import WarehousePage from './components/Warehouse';
import ShipmentsPage from './components/Shipments';
import CustomerDetails from './components/CustomerDetails';
import SearchResults from './components/SearchResults';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<Layout OpenSidebar={OpenSidebar} openSidebarToggle={openSidebarToggle} />}>
          <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
          <Route path="/orders" element={isAuthenticated() ? <OrderPage /> : <Navigate to="/login" />} />
          <Route path="/transport" element={isAuthenticated() ? <Transportation /> : <Navigate to="/login" />} />
          <Route path="/warehouse" element={isAuthenticated() ? <WarehousePage /> : <Navigate to="/login" />} />
          <Route path="/shipments" element={isAuthenticated() ? <ShipmentsPage /> : <Navigate to="/login" />} />
          <Route path="/customers" element={isAuthenticated() ? <CustomerDetails /> : <Navigate to="/login" />} />
          <Route path="/search-results" element={isAuthenticated() ? <SearchResults /> : <Navigate to="/login" />} />
        </Route>
      </Routes>
    </Router>
  );
}

const Layout = ({ OpenSidebar, openSidebarToggle }) => (
  <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <main>
      <Outlet />
    </main>
  </div>
);

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

export default App;
