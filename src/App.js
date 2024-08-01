import './App.css';
// import Forgotpassword from './components/Forgotpassword';
//  import SignUp from './components/SignUp';
// import Loginform from './components/Loginform';
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';
// import Homepage from './components/Homepage';
// import Contacts from './components/Contacts';
// import Reviews from './components/Reviews';
// import Aboutus from './components/Aboutus';

function App() {
  return (
   <div>
    <BrowserRouter>
    {/* <Loginform/> */}
    {/* <SignUp/> */}
    {/* <Homepage/> */}
    {/* <Forgotpassword/> */}
    <Routing/>
    </BrowserRouter>
    {/* <Contacts/> */}
    {/* <Reviews/> */}
    {/* <Aboutus/> */}
   </div>
  );
}

export default App;