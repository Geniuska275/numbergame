import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
function Statistics() {
  const [counterState,setCounterState]=useState()
  return (
      <ScrollTrigger onEnter={()=>setCounterState(true)} onExit={()=>setCounterState(false)} >
    <div className='Stats bg-white  p-5 mb-[100px]  shadow-lg'>

      <div className='flex gap-2 font-[lato] space '>
        <h1 className='font-bold text-3xl text-[#37CA2A]'> 
        {counterState && <CountUp
       start={0}
       end={5}
  duration={4.75}
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
  />}
          
          K+</h1>
        <p className='text-[#4A4E55]'>Happy <br></br>Clients</p>
      </div>
      <div className='flex gap-2 space'>
        <h1 className='font-bold text-3xl text-[#37CA2A]'> 
        {counterState &&  <CountUp
       start={1}
       end={100}
       duration={15}
       onEnd={() => console.log('Ended! 👏')}
       onStart={() => console.log('Started! 💨')}
       />}
          
          +</h1>
        <p className='text-[#4A4E55]'> Technical<br></br> Staff</p>
      </div>
      <div className='flex gap-2 space' >
        <h1 className='font-bold text-3xl text-[#37CA2A]'>
        {counterState && <CountUp
       start={0}
       end={5}
       duration={6.75}
       onEnd={() => console.log('Ended! 👏')}
       onStart={() => console.log('Started! 💨')}
       />}
           K+</h1>
        <p className='text-[#4A4E55]'>Happy <br></br> Clients</p>
      </div>
      <div className='flex gap-2'>
        <h1 className='font-bold text-3xl text-[#37CA2A]'>
        {counterState &&  <CountUp
       start={1}
       end={300}
       duration={4.75}
       onEnd={() => console.log('Ended! 👏')}
       onStart={() => console.log('Started! 💨')}
       />}
           K+</h1>
        <p className='text-[#4A4E55]'>Our <br></br> Green Solutions</p>
      </div>

    </div>
       </ScrollTrigger>
  )
}

export default Statistics