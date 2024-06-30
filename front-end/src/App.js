import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { useState,useEffect } from 'react';
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
import { jwtDecode } from "jwt-decode";
import UserAnnouncementDetail from './components/pages/UserAnnouncementDetailDetail.jsx';
import MyAnnouncement from './components/pages/MyAnnouncement.jsx';
import UpdateAnnounce from './components/pages/UpdateAnnouncement.jsx';
function App() {
  const [userAccount,SetUserAccount]=useState(false)
  const [user,SetUser]=useState('')
  const [userId,setUserId]=useState('')
  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (token && isAuthenticated) {
      const decodedToken = jwtDecode(token);
    SetUser(decodedToken.username)
    setUserId(decodedToken.id)
    SetUserAccount(true)
    }
  }, []);
  
  return (
    <div className="App">
      <Router>
        <NavBar userAccount={userAccount} SetUserAccount={SetUserAccount} user={user}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path ="/update-announcement" element={<UpdateAnnounce userId={userId}/>}/>
          <Route path="/add-announcement" element={<AddAnnouncement userId={userId}/>} />
          <Route path="/user/auth/sign-in" element={<SignIn  SetUserAccount={SetUserAccount} user={SetUser}/>}/>
          <Route path="/user/auth/sign-up" element={<SignUp/>}/>
          <Route path='/category/real-estate' element={<RealEstate/>}/>
          <Route path='/category/cars' element={<Cars/>}/>
          <Route path='/category/electronics' element={<Electronics/>}/>
          <Route path='/category/hobbies' element={<Hobbies/>}/>
          <Route path='/annoucement/detail' element={<DetailAnnoucement/>}/>
          <Route path="/my-announcement" element={<MyAnnouncement />} />
          <Route path="/user-announcement-detail" element={<UserAnnouncementDetail />} />
        </Routes>
       <Footer/> 
      </Router>
    </div>
  );
}

export default App;
