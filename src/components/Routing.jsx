import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Homepage from './Homepage';
import Loginform from './Loginform';
import Aboutus from './Aboutus';
import Reviews from './Reviews';
import Contacts from './Contacts';
import Logout from './Logout';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Loginform />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Homepage' element={<Homepage />} />
      <Route path='/Aboutus' element={<Aboutus />} />
      <Route path='/Review' element={<Reviews />} />
      <Route path='/Contacts' element={<Contacts />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  );
};

export default Routing;
