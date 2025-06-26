import React from 'react';
import PiggyBtn from "../reuseable/PiggyBtn";
import hero from "../../assets/images/hero.png";
const Hero = () => {
  return (
    <div>
      <div className="">
          <PiggyBtn  btnBg= "bg-blue" textColor="text-white" radius="rounded-xl" title="The2024PiggyVestSavingsReport" />
          <h1>The Better Way to Save & Invest</h1>
        <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with ease.</p>
      </div>
        <img src={hero} alt="hero" />
      <div>
        <h1></h1>
      </div>
      


    </div>
  )
}

export default Hero

