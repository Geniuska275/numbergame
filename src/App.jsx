

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";





function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/About-Us" element={<AboutUs/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Contact" element={<Contact/>} />
      
    </Routes>
    <div style={{
        position:"fixed",
        bottom:"40px",
        background:" #37CA2A",
        width:"55px",
        height:"55px",
        borderRadius:"50%",
        left:"20px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:1000
       

      }}>

         <div
        style={{
          width:"45px",
        height:"45px",
        borderRadius:"50%",
        borderWidth:"2px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}
        >
        <a href="https://wa.me/+2347032188798">     
        <FaWhatsapp color='white' size={25} />
      </a>
        </div>
      </div>
    <Footer/>
    
  </Router>

   
  )
}

export default App
