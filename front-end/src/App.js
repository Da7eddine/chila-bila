import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { useState } from 'react';
import NavBar from './components/NavBar'
import RealEstate from './components/pages/RealEstate'
import Cars from './components/pages/Cars'
import Electronics from './components/pages/Electronics'
import Hobbies from './components/pages/Hobbies'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import AddAnnouncement from './components/pages/AddAnnoucement.jsx';
import Home from './components/pages/Home' 
import Footer from './components/Footer.jsx' 
import DetailAnnoucement from './components/pages/detailAnnoucement.jsx';
function App() {
  const [userAccount,SetUserAccount]=useState(false)
  const [user,SetUser]=useState([])
  console.log(user);
  return (
    <div className="App">
      <Router>
        <NavBar userAccount={userAccount} SetUserAccount={SetUserAccount} user={user}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-announcement" element={<AddAnnouncement user/>} />
          <Route path="/user/auth/sign-in" element={<SignIn  SetUserAccount={SetUserAccount} user={SetUser}/>}/>
          <Route path="/user/auth/sign-up" element={<SignUp/>}/>
          <Route path='/category/real-estate' element={<RealEstate/>}/>
          <Route path='/category/cars' element={<Cars/>}/>
          <Route path='/category/electronics' element={<Electronics/>}/>
          <Route path='/category/hobbies' element={<Hobbies/>}/>
          <Route path='/annoucement/detail' element={<DetailAnnoucement/>}/>
        </Routes>
       <Footer/> 
      </Router>
    </div>
  );
}

export default App;
