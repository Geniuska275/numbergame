import React from 'react'
import { useParams } from 'react-router-dom'
import main20 from "./main20.jpg";
import main1 from "./main1.jpg";
import main2 from "./main2.jpg";
import main3 from "./main3.jpg";
import main4 from "./main4.jpg";
import main5 from "./main5.jpg";
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
          
    ]
    const installation=installations.find(i=>i.id===parseInt(id))
    console.log(installation)

  return (
    <div className='p-[80px]'>
        <div className='install'>
        {installation.images.map(image=>(
            <img src={image} className='h-[200px] w-[200px] mb-2'/>
        ))}
        </div>
    </div>
  )
}

export default Installation