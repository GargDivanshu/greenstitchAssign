import React from 'react'

const Card = ({heading, data, netChange}) => {
  return (
    <div className="w-[231px] h-[182px] rounded-xl relative bg-white p-[20px]">
       
       <h1 className="text-[#5F6980] text-[16px] font-[400]">{heading}</h1>

       <div className="my-2">
       <span className="font-[600] text-[26px]">{data}</span> 
       <br/>
       <span className="font-[400] text-[16px] text-[#929292]"> CO2</span>
       </div>
       <h1 
       className={`rounded-xl px-3 h-[22px] w-fit bottom-4 absolute ${(netChange.charAt(0) === '-') ? "bg-[#ffbdbd]" : 
       (netChange.charAt(0) === '0') ? "bg-[#F2F4F7]" : "bg-[#DCFFF5]" 
       }`}
       > 
       <span className={`text-[12px] font-[600]
       ${(netChange.charAt(0) === '-') ? "text-[#ff7c7c]" : 
       (netChange.charAt(0) === '0') ? "text-[#5F6980]" : "text-[#20C997]" 
       }
       `}>{netChange}</span> 
       </h1>
    </div>
  )
}

export default Card