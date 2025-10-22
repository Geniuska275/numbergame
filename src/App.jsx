

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
import Installation from "./pages/Installation";

import {motion} from "framer-motion"



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
      <Route path="/Installation/:id" element={<Installation/>} />
      
    </Routes>
    <div style={{
        position:"fixed",
        bottom:"70px",
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
        <a href="https://wa.me/+2348145544903">     
        <FaWhatsapp color='white' size={25} />
      </a>
        </div>
      </div>

      <motion.div 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.5}}>
      <Footer/>
      </motion.div>
    
  </Router>

   
  )
}

export default App
