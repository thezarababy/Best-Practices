import React from 'react'
import { Link } from 'react-router-dom'
import download from "../assets/images/download.svg";
import hamburger from "../assets/images/hamburger.png";
import PiggyBtn from "../components/reuseable/PiggyBtn";
import {ChevronDown } from "lucide-react"

const Header = () => {
  return (
    <>
      <header className='h-24'>

        <nav className='flex items-center justify-between  py-4 mx-auto px-16 max-w-[1280px]' >
          <div  className='flex items-center gap-5'>
            <img src={download} alt="logo" className='h-10 max-tablet:h-8 ' />
            <img src={hamburger} alt="" className='h-10 hidden max-tablet:block  ml-70' />
              <div className='flex text-base text-blue-950 font-medium  max-tablet:hidden'>
                   
                     <Link to="/save" className='mr-6   flex items-center'>Save <ChevronDown className="ml-1 w-4 h-4" /></Link>
                <Link to="/invest" className='mr-6 flex items-center'>Invest </Link>
                <Link to="/stories" className='mr-6 flex items-center'>Stories </Link>
                <Link to="/FAQs"className='mr-6 flex items-center'>FAQs </Link>
                <Link to="/resources"className='mr-6 flex items-center'>Resources<ChevronDown className="ml-1 w-4 h-4" /></Link>
              </div>
           
           
          </div>
          
          
              <div className='flex items-center max-tablet:hidden'>
            <PiggyBtn title ="Sign in"  margin ="mr-6" border = "border border-black" radius="rounded-xl" padding= "py-4 px-4" fontSize="text-sm"/>
            <PiggyBtn  textTransform="uppercase" btnBg="bg-black" textColor="text-white" padding= "py-4 px-6" radius ="rounded-xl" title ="create free accounts" fontSize="text-sm" className="font-semibold"/>
          </div>
          </nav>
          
         
          
          
        

      </header>
      {/* 
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
      */}
    </>
  )
}

export default Header
