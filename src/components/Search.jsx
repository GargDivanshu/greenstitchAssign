import React from 'react'
import {AiOutlineSearch, AiOutlineBell, AiOutlineAppstore, AiOutlineCalendar, AiOutlineUser} from 'react-icons/ai'


const Search = () => {
    return (
      <div className=" ">
       
       <div className="flex py-[12px] mx-auto pl-[40px] bg-white border-l-[1px] border-[#EAECF0] ">
       <div className="w-9/12 flex bg-white">

       <div className="flex rounded-md w-full mx-2 border-[1px] border-[#EAECF0] ">
       <AiOutlineSearch
        className="my-auto mx-2"
        fontSize={20}
       />
          <input
          className="w-11/12 p-2 outline-none"
          placeholder="Search ..."
          text="text-[#EAECF0]"
            type="text"
          />

</div>
       </div>

       <div className="flex w-1/5 justify-between px-3">
         <AiOutlineBell
          fontSize={20}
          className="my-auto"
         />

         <AiOutlineAppstore
          fontSize={20}
          className="my-auto"
         />

         <AiOutlineCalendar
          fontSize={20}
          className="my-auto"
         /> 

         <AiOutlineUser
          fontSize={20}
          className="my-auto"
         />
       </div>
</div>

      

      </div>


    )
}

export default Search