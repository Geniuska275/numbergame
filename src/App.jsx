

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";





function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/About-Us" element={<AboutUs/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Contact-Us" element={<Contact/>} />
      
    </Routes>
  
  </Router>

   
  )
}

export default App
