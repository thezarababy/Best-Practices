import React from 'react'
import download from "../assets/images/download.svg";
import hamburger from "../assets/images/hamburger.png";
import PiggyBtn from "../components/reuseable/PiggyBtn";

const Header = () => {
  return (
    <div className='flex  justify-between px-7 py-6'>
      <div className='flex justify-between items-center'>
       <img src={download} alt="logo" />
      <img src={hamburger} alt=""  className='h-15 hidden' />
      <div className=" pl-10 ">
        <a href="" className='mr-6'>Save</a>
        <a href=""  className='mr-6'>Invest</a>
        <a href=""  className='mr-6'>FAQs</a>
        <a href=""  className='mr-6'>Stories</a>
        <a href=""  className='mr-6'>Resources</a>

      </div>
     
        
      </div>
      <div className='flex items-center'>
        <PiggyBtn title ="sign in" margin ="mr-6" border = "border border-black" radius="rounded-xl" padding= "py-4 px-6" />
         <PiggyBtn textTransform="uppercase" btnBg="bg-black" textColor="text-white" padding= "py-4 px-6" radius ="rounded-xl" title ="create free accounts"/>
      </div>
    </div>
  )
}

export default Header
