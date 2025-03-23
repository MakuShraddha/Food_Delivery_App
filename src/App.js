import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import "./App.css";
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom' ;
function App () {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/home"element={<Home />} />
        <Route path="/login"element={<Login />} />
        <Route path="/register"element={<Register />} />
        
      </Routes>
    </Router>
  )
}

export default App
