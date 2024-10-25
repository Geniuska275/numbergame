import React from 'react'
import { useParams } from 'react-router-dom'
import main20 from "./main20.jpg";
import main1 from "./main1.jpg";
import main2 from "./main2.jpg";
import main3 from "./main3.jpg";
import main4 from "./main4.jpg";
import main5 from "./main5.jpg";
import main60 from "./main60.jpg";
import main5k from "./main5k.jpg";

import a10 from "./10a.jpg";
import b10 from "./10b.jpg";
import c10 from "./10c.jpg";
import a60 from "./60a.jpg";
import b60 from "./60b.jpg";
import c60 from "./60c.jpg";


import a5 from "./5a.jpg";
import b5 from "./5b.jpg";
import c5 from "./5c.jpg";

import d5 from "./5d.jpg";
import e5 from "./5e.jpg";
import f5 from "./5f.jpg";
import main10 from "./main10.jpg";
import g5 from "./5g.jpg";
import h5 from "./5h.jpg";
function Installation() {
    const {id}=useParams();

    const installations=[   
            { id:1,
              images:[main20,main1,main2,main3,main4,main5],
              desc: "20kva Solar system Installation",
              powers: ""
            },
            { id:2,
              images:[main20,main1,main2,main3,main4,main5],
              desc: "1kva / 12volts Inverter Solar system",
              powers: " 6 LED Lights,2 Fans,1 TV ,1 Decoder and Home Theater."
            },
            { id:3,
              images:[main20,main1,main2,main3,main4,main5],
              desc: "2.5kva/12volts Inverter Solar system",
              powers: " 8 LED Lights,2 Fans,1 TV ,1 Decoder and 1 laptop"
            },
            { id:4,
              images:[main20,main1,main2,main3,main4,main5],
              desc: "2.5kva/24Volts Inverter Solar system",
              powers: "10 LED Lights,3 Fans,2 TVs ,1 Home Theatre,1 Decoder, 1 fridge,Washing Machine and 1 laptop."
            },
            { id:5,
              images:[main20,main1,main2,main3,main4,main5],
              desc: "3.5kva/ 24Volts Inverter Solar system",
              powers: ""
            },
            { id:6,
              images:[main10,a10,b10,c10],
              desc: "10kva/48V Inverter Solar system",
              powers: ""
            },
            { id:7,
              images:[main60,a60,b60,c60],
              desc: "60kva/120V Inverter Solar system",
              powers: ""
            },
            { id:8,
              images:[main5k,a5,b5,c5,d5,e5,f5,g5,h5,],
              desc: "5kva/48V Inverter Solar system",
              powers: ""
            },
          
    ]
    console.log(id)
    const installation=installations.find(i=>i.id===parseInt(id))
     console.log(installation)
  return (
    <div className='p-[80px]'>
            <h1 className='font-bold text-2xl mb-2 text-center'>{installation.desc}</h1>
            
        <div className='install'>

        {installation.images.slice(0,4).map(image=>(
            <img src={image} className='h-[300px] w-[300px] mb-2'/>
        ))}
        </div>
        <div className='install'>

{installation.images.slice(4,8).map(image=>(
    <img src={image} className='h-[300px] w-[300px] mb-2'/>
))}
</div>
    </div>
  )
}

export default Installation