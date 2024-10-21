import React from 'react'

export default function Footer() {
  return (
    <div className='footer bg-[#EDF2EA]'>
        <div className='Foot border-b p-2 push '>
            <div className='space'>
             <img src="" />
              <div>
                <h1>Head Office :</h1>
                <p className='text-sm text-[#4A4E55]'>  3, Eguadase Street,<br></br> opposite James watt junction,
                <br></br> off Akpakpava road,<br></br> Benin City, <br></br>Edo State.
                </p>
              </div>
            
            </div>
            <div className='space mb-5'>
                <h1>Warri Branch :</h1>
                <p  className='text-sm text-[#4A4E55]'> 28, Effurum Sapele Road,<br></br> opposite unity bank,
                <br></br> before Enerhen junction ,<br></br>warri Delta State.
                </p>
              </div>
            <div className='space' >
                <h1> Company</h1>
                <a>
                    <h2 className='text-sm text-[#4A4E55] mb-2 hover:text-[#37CA2A]'>About us</h2>
                </a>
                <a>
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Products</h2>
                </a>
                <a>
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Services</h2>
                </a>
                <a>
                    <h2 className='text-sm text-[#4A4E55]  mb-2 hover:text-[#37CA2A]'>Our Staff</h2>
                </a>
                
            </div>
            <div>
            <h1> Social Media</h1>
                
            </div>


        </div>
        <h1 className='m-5 text-center'>copyright GreenFusion Energy.</h1>



    </div>
  )
}
