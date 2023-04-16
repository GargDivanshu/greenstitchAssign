import React from 'react'
import {IoMdArrowDropup} from 'react-icons/io'
import {FiLifeBuoy, FiLogOut} from 'react-icons/fi'
import {AiOutlineFolder} from 'react-icons/ai'
import {TfiWorld} from 'react-icons/tfi'
import {GiSettingsKnobs} from 'react-icons/gi'



const Navbar = () => {
  return (
    <div className="w-[232px] bg-[#FFF] min-h-screen max-h-full relative pt-[24px]">
       
       <div className="max-w-[133px] max-h-[41px] pl-[18px]">
        <img 
        className="max-w-[133px] max-h-[41px] pl-[18px]"
            src="greenstitch.png"
            alt="Logo"
        />
        </div>

       <h1 className="pt-[39px] pl-[20px] text-[#9D9FA1] text-[12px] font-[600]">
        DASHBOARD
       </h1>

       <div className="mt-[36px] py-[12px] px-[20px]">
          <div className="flex justify-between">
          <div className="flex">
              <img 
                className="w-[20px] h-[20px] text-black m-auto mx-[1px]"
                alt="dashboard"
                src="dashboard.svg"
              />

              <div
              className="text-[14px] font-[600] mx-1"
              >Dashboard</div>

          </div>

          <div>
                <IoMdArrowDropup
                fontSize={25}
                    className="my-auto"
                />
          </div>   
          </div>


          <div className="mb-[32px] mt-[8px]">
              <h1 className="text-[14px] font-[600] cursor-pointer pl-[20px] text-[#5F6980] focus:text-black hover:text-black mb-[12px]">Records</h1>

              <h1 className="text-[14px] font-[600] cursor-pointer pl-[20px] text-[#5F6980] focus:text-black hover:text-black mb-[12px]">Reports</h1>

              <h1 className="text-[14px] font-[600] cursor-pointer pl-[20px] text-[#5F6980] focus:text-black hover:text-black mb-[12px]">Analyse</h1>

              <h1 className="text-[14px] font-[600] cursor-pointer pl-[20px] text-[#5F6980] focus:text-black hover:text-black mb-[12px]">Return</h1>
          </div>


          <h1 className=" pl-[20px] text-[#9D9FA1] text-[12px] font-[600]">
        PAGES
       </h1>

       <div className="flex justify-between my-[12px] hover:text-black cursor-pointer">
          <div className="flex">
              <FiLifeBuoy
                fontSize={20}
                    className="my-auto text-[#5F6980] hover:text-black"
              />

              <div
              className="hover:text-black text-[14px] my-auto font-[600] mx-1 text-[#5F6980]"
              >Help Center</div>

          </div>

          <div>
                <IoMdArrowDropup
                fontSize={25}
                    className="my-auto text-[#5F6980] hover:text-black"
                />
          </div>   
          </div>

          <div className="flex justify-between my-[12px] hover:text-black cursor-pointer">
          <div className="flex">
              <AiOutlineFolder
                fontSize={20}
                    className="my-auto text-[#5F6980] hover:text-black"
              />

              <div
              className="text-[14px] font-[600] my-auto mx-1 text-[#5F6980] hover:text-black"
              >File Manager</div>

          </div>

          <div>
                <IoMdArrowDropup
                fontSize={25}
                    className="my-auto text-[#5F6980] hover:text-black"
                />
          </div>   
          </div>


       </div>

       <div className="border-t-[1px] border-[#5F6980] absolute bottom-0 h-[50px] flex w-full justify-between p-[20px]">

            <GiSettingsKnobs
                className="cursor-pointer my-auto text-[#5F6980] hover:text-black"
            />

          <FiLogOut
            className="cursor-pointer my-auto text-[#5F6980] hover:text-black"
          />

          <TfiWorld
            className="cursor-pointer my-auto text-[#5F6980] hover:text-black"
          />
       </div>
    </div>
  )
}

export default Navbar