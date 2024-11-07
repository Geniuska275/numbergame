import React from 'react'
import { useParams } from 'react-router-dom'
import main20 from "./main20.jpg";
import main1 from "./main1.jpg";
import main2 from "./main2.jpg";
import main3 from "./main3a.jpg";
import main3a from "./main3a1.jpg";
import lithium1 from "./lithium3.jpg";
import lithium1a from "./lithium3a.jpg";

import main20i from "./main20i.jpg";
import main20l from "./main20l.jpg";
import main20j from "./main20j.jpg";
import main20h from "./main20h.jpg";
import main10a from "./main10a.jpg";
import main10b from "./main10b.jpg";
import main10c from "./main10c.jpg";
import main10d from "./main10d.jpg";

import main4 from "./main4.jpg";
import main5 from "./main5.jpg";
import main60 from "./main60.jpg";

import main5a from "./main5a.jpg";
import main5a1 from "./main5a1.jpg";
import main5a2 from "./main5a2.jpg";
import main5a3 from "./main5a3.jpg";


import a10 from "./10a.jpg";
import b10 from "./10b.jpg";
import c10 from "./10c.jpg";
import a60 from "./60a.jpg";
import b60 from "./60b.jpg";
import c60 from "./60c.jpg";

import main20a from "./main20a.jpg";
import main20b from "./main20b.jpg";
import main20c from "./main20c.jpg";
import main20d from "./main20d.jpg";
import main20e from "./main20e.jpg";
import main20f from "./main20f.jpg";

import a5 from "./5a.jpg";
import b5 from "./5b.jpg";
import c5 from "./5c.jpg";

import d5 from "./5d.jpg";
import e5 from "./5e.jpg";
import f5 from "./5f.jpg";
import main10 from "./main10.jpg";
import g5 from "./5g.jpg";
import h5 from "./5h.jpg";
import main20k from "./main20k.jpg";
import main20ka from "./main20ka.jpg";
import main20kb from "./main20kb.jpg";
import main20kc from "./main20kc.jpg";
import main20kd from "./main20kd.jpg";

import Benin from "./Benin.jpg";
import Benina from "./Benina.jpg";
import Benin1 from "./Benin1.jpg";
import Benin2 from "./Benin2.jpg";


import Beta from "./beta.jpg";
import Beta1 from "./beta1.jpg";
import Beta2 from "./beta2.jpg";

import west from "./west.jpg";

import west2 from "./west2.jpg";
import west3 from "./west3.jpg";
import west4 from "./west4.jpg";
import west5 from "./west5.jpg";
import west6 from "./west6.jpg";
import west7 from "./west7.jpg";
import west8 from "./west8.jpg";
import west9 from "./west9.jpg";
import west10 from "./west10.jpg";
import west11 from "./west11.jpg";
import west12 from "./west12.jpg";
import west13 from "./west13.jpg";
import west14 from "./west14.jpg";
import west15 from "./west15.jpg";
import west16 from "./west16.jpg";
import west17 from "./west17.jpg";
import west18 from "./west18.jpg";
import west19 from "./west19.jpg";
import west20 from "./west20.jpg";
import west21 from "./west21.jpg";

import maink1a from "./maink1a.jpeg";
import maink1b from "./maink1b.jpg";

import maink2 from "./maink2.jpg";
import maink2a from "./maink2a.jpg";
import Bet1 from "./bet1.jpg";
import Bet2 from "./bet2.jpg";
import new20 from "./new20.jpg";

import { useState } from 'react';
function Installation() {
    const {id}=useParams();
    const [installations,setInstallations]=useState([
      { id:3,
        images:[maink2a,maink2],
       desc: "2.5kva/12V Inverter Solar system",
      powers: " 10 LED Lights,3 Fans,2 TV ,1 Decoder ,1 Fridge 1 Washing Machine and 1 Laptop",
      capacity:"5 180W Panels , 1 Battery. "

       },
       { id:4,
        images:[maink1a,maink1b],
        desc: "1kva/12V Inverter Solar system",
         capacity:"4 180W Panels, 1 Battery. ",
        powers: "10 LED Lights,3 Fans,2 TVs ,1 Home Theatre,1 Decoder, 1 fridge,Washing Machine and 1 laptop."
      },
      // { id:2,
      //   images:[main10,main1,main2,main3,main4,main5],
      //   desc: "1kva / 12volts Inverter Solar system",
      //   powers: " 6 LED Lights,2 Fans,1 TV ,1 Decoder and Home Theater."
      // },
      // { id:3,
      //   images:[main20,main1,main2,main3,main4,main5],
      //   desc: "2.5kva/12volts Inverter Solar system",
      //   powers: " 8 LED Lights,2 Fans,1 TV ,1 Decoder and 1 laptop"
      // },
      // { id:4,
      //   images:[main20,main1,main2,main3,main4,main5],
      //   desc: "2.5kva/24Volts Inverter Solar system",
      //   powers: "10 LED Lights,3 Fans,2 TVs ,1 Home Theatre,1 Decoder, 1 fridge,Washing Machine and 1 laptop."
      // },
      { id:5,
        images:[main3,main3a],
        desc: "3.5kva/ 24V Inverter Solar system",
        powers: "",
         capacity:"8 180W Panels ,2 Batteries. "
      },
      { id:6,
        images:[lithium1,lithium1a],
        desc: "3.5kva/ 24V  Lithium Inverter Solar system",
         capacity:"8 180W Panels, 2 Batteries. ",
        powers: ""
      },
      { id:9,
        images:[main5a,main5a1,main5a2,main5a3],
        desc: "5kva/48V Inverter Solar system",
         capacity:"12 250W Panels, 4 Batteries. ",
        powers: "15 LED Lights,4 Fans ,3 Tvs,1 Home Theatre,2 Decoders,1 fridge,1 Washing Machine,2 Laptops,1 Freezer,1 ,1 blender ,1 Inverter And Borehole"
      },
      { id:7,
        images:[main10a,main10c,main10d,main10b],
        desc: "10kva/48V Inverter Solar system",
         capacity:"24 250W Panels With 8 Batteries. ",
        powers: ""
      },
      { id:1,
        images:[main20k,main20ka,main20kb,main20kc,main20kd,main20i,main20j,new20],
        desc: "20kva / 96V Solar system Installation",
        powers: ""
      },
      { id:8,
        images:[ Benina,Benin,Benin1,Benin2],
        desc: "Benin Owina River Basin 40Kva/192V Solar System",
        powers: ""
      },
      { id:11,
        images:[Beta,Beta1,Beta2,Bet1,Bet2],
        desc: "Installation of 100 Beta Life Boxes across 100 primary schools in Edo State.",
         capacity:"2 180W Panels ",
        powers: "1 TV ,1 GoTV Decoder ,6 LED Lights and 1 Fan"
      },
      { id:10,
        images:[main60,a60,b60,c60],
        desc: "60kva/120V Inverter Solar system",
        powers: ""
      },
      { id:12,
        images:[west,west2,west3,west4,west5,west6,west7,west8,west9,west10,west11,west12,west13,west14,west15,west16,west17,west18,west19,west20,west21],
        desc: "Wetland Banks Installation",
        powers: ""
      },
    ])
    const installation=installations.find(i=>i.id===parseInt(id))
     console.log(installation)
  return (
    <div className='p-[80px]'>
            <h1 className='font-bold text-xl mb-4 text-center'>{installation.desc}</h1>
            <h4 className='font-bold text-sm mb-4 text-center'> Comes with  {installation.capacity}</h4>

            
        <div className='install'>

        {installation.images.slice(0,4).map(image=>(
            <img src={image} className='h-[400px] w-full mb-2'/>
        ))}
        </div>
         <div className='install'>

{installation.images.slice(4,8).map(image=>(
    <img src={image} className='h-[400px] w-full mb-2'/>
  ))}
</div>
<div className='install'>

    {installation.images.slice(9,12).map(image=>(
    <img src={image} className='h-[400px] w-full mb-2 width'/>
  ))}
     </div>
     <div className='install'>

{installation.images.slice(13,17).map(image=>(
    <img src={image} className='h-[300px] w-[300px] mb-2 width'/>
  ))}
</div>
<div className='install'>

{installation.images.slice(18,22).map(image=>(
    <img src={image} className='h-[300px] w-[300px] mb-2 width'/>
  ))}
</div>
    </div>
  )
}

export default Installation