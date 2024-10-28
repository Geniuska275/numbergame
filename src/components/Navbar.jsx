import { FaTimes, FaBars } from "react-icons/fa";
// import logo from "./real.jpeg";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "./Glogo.jpeg"




export default function Navbar(){
     const [isOpen,setIsOpen]=useState(false)
     const toggle=()=>{
        setIsOpen(!isOpen)
     }
    const [activeTab, setActiveTab] = useState("home");
    const location = useLocation();
    useEffect(() => {
      if (location.pathname == "/") {
        setActiveTab("home");
      } else if (location.pathname == "/About-Us") {
        setActiveTab("About-Us");
      } else if (location.pathname=="/Services") {
        setActiveTab("Services");
      }else if (location.pathname=="/Products") {
        setActiveTab("Products");
      }else if (location.pathname=="/Contact") {
        setActiveTab("Contact");
      }
      
    }, [location]);
    return(
        <div className=" shadow-sm w-full sticky border-b top-0 py-3 bg-[#EDF2EA] z-[10] font-[lato]"> 
        <nav className="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    {/* navbar logo */}
                <Link to="/">
                <div className="flex gap-1 items-center ">

                <img src={logo}  className="w-10 h-10 rounded-full"/>
                <h1 className="font-[lato] text-[#37CA2A] font-bold text-2xl ">GreenFusion.</h1>
                </div>
                </Link>
                {/* end */}
                {/* navbar links */}
            {/* end */}
              {/*  */}

              <div className=" hidden md:flex  justify-between items-center p-4 gap-5 mr-[40px] font-[lato]">
            <Link  to="/" 
             className={`${activeTab =="home" ? "text-[#4A4E55]":"text-[#4A4E55]"} no-underline font-bold`}
             
             >
              Home
            </Link>
            <Link  to="/About-Us"
             className={`${activeTab =="About-Us" ? "text-[#37CA2A]":"text-[#4A4E55]"}  font-[lato] no-underline font-bold`}    
            >About Us
            </Link>
            <Link  to="/Services"
             className={`${activeTab =="Services" ? "text-[#37CA2A]":"text-[#4A4E55]"}  font-[lato] no-underline font-bold`}    
            >Services
            </Link>
            <Link  to="/Products"
             className={`${activeTab =="Products" ? "text-[#37CA2A]":"text-[#4A4E55]"}  font-[lato] no-underline font-bold`}    
            >Products
            </Link>
            <Link  to="/Contact"
             className={`${activeTab =="Contact" ? "text-[#37CA2A]":"text-[#4A4E55]"}  font-[lato] no-underline font-bold`}    
            >Contact
            </Link>
           
        <div className="flex justify-evenly items-center gap-3 mt-2">
        <a href="https://wa.me/+2348036808184"> 
         <button className="bg-[#37CA2A] md:ml-8 rounded-md 
           font-[lato] px-6 py-2 text-white shadow-lg hover:bg-[#37CA3A] duration-500">Contact Us</button>
         </a>
        
        </div>
        </div>
        {/*  */}

           {isOpen ?
           <div className="md:hidden">
            <FaTimes         
            onClick={toggle}
            
            className="text-[#37CA2A] text-2xl "
            />
            </div>
            :
            <div className="md:hidden border rounded bg-[#37CA2A] p-2">
            
            <FaBars
            
            onClick={toggle}
            className="text-[white] text-2xl"
            
            />
            </div>
            
        }
          

        
        </div>
        </div>
        </nav>
        {
            isOpen ?(
                <div className="md:hidden mt-5 border-t font-[lato] bg-[#EDF2EA] w-full flex z-[10] justify-center items-center">
    
        <div className=" flex flex-col justify-center items-center p-4 ">
            <Link  to="/About-Us" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="About-Us" ? "text-[#37CA2A]":"text-[#4A4E55]"} no-underline font-bold`}    
            >About Us
            </Link>
            <Link  to="/Services" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="Services" ? "text-[#37CA2A]":"text-[#4A4E55]"} no-underline font-bold`}    
            >Services
            </Link>
            <Link  to="/Products" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="Products" ? "text-[#37CA2A]":"text-[#4A4E55]"} no-underline font-bold`}    
            >Products
            </Link>
            <Link  to="/Contact" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="Contact" ? "text-[#37CA2A]":"text-[#4A4E55]"} no-underline font-bold`}    
            >Contact
            </Link>
            
           
      
        <div className="flex justify-evenly items-center gap-3 mt-2">
      
        <a href="https://wa.me/+2348036808184"> 
         <button className="bg-[#37CA2A] md:ml-8 rounded-md   font-[lato] px-6 py-2 text-white shadow-lg hover:bg-[#37CA2B] duration-500">CONTACT US</button>
         </a>
        </div>

        </div>
    
                </div>
            ):null
        }
        </div>
    )
}