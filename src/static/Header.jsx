import React from 'react'
import download from "../assets/images/download.svg";
import hamburger from "../assets/images/hamburger.png";

const Header = () => {
  return (
    <div className='flex'>

      <img src={download} alt="logo" />
      <img src={hamburger} alt=""  className='h-15 hidden' />
      <div className="">
        <a href="">Save</a>
        <a href="">Invest</a>
        <a href="">FAQs</a>
        <a href="">Stories</a>
        <a href="">Resources</a>

        
      </div>
      <div>
        <PiggyBtn title ="sign in"/>
         <PiggyBtn  className ="bg-black text-white"   title ="create free accounts"/>
      </div>
    </div>
  )
}

export default Header
