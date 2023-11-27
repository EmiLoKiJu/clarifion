import React, { useState } from "react";

import logo from '@/assets/logo-with-text.svg';
import mcafee from '@/assets/McAfee-secure.svg';
import norton from '@/assets/norton-antivirus.svg';
import checkedstep from '@/assets/checked-step.svg';
import currentstep from '@/assets/current-step.svg';
import futurestep from '@/assets/future-step.svg';
import star from '@/assets/star-filled.svg';
import smallcircle from '@/assets/small-circle.svg';
import clarifion from '@/assets/clarifion-nobg.svg';
import bigclarifion from '@/assets/image4.png';
import checkblue from '@/assets/tick-blue.svg';
import discount from '@/assets/discount-percent.svg';

const Clarifion = ()=> {
  const [clarifionSelected, setClarifionSelected] = useState(false);
  const toggleSelected = () => {
    setClarifionSelected(!clarifionSelected);
  };

  return(
    <div className="flex flex-col items-center text-black mt-10 p-5">
      <div className='flex w-full justify-between'>
        <img src={logo} alt="logo clarifion" />
        <div className='flex justify-between'>
          <img className='px-4' src={mcafee} alt="mcafee" />
          <img src={norton} alt="norton" />
        </div>
      </div>

      <div className='pt-[50px]'>
        <h1 className='text-4xl text-center'>Wait ! Your Order In Progress.</h1>
        <h2 className='text-xl text-blacktext text-center pt-1 pb-6'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</h2>
      </div>

      <div className='flex w-full justify-between'>
        <div className='flex flex-col items-center text-sm text-center'>
          <img src={checkedstep} alt="step" />
          Cart Review
        </div>
        <div className='flex flex-col items-center text-sm text-center'>
          <img src={checkedstep} alt="step" />
          Checkout
        </div>
        <div className='flex flex-col items-center text-sm text-center font-bold'>
          <img src={currentstep} alt="step" />
          Special Offer
        </div>
        <div className='flex flex-col items-center text-sm text-center'>
          <img src={futurestep} alt="step" />
          Confirmation
        </div>
      </div>

      <div className='text-3xl text-center py-6'>
        <span className="text-blue2">ONE TIME ONLY </span>
        <span className="text-black">Special Price For 6 Extra Clarifion For Only </span>
        <span className="text-blue2">$14 Each </span>
        <span className="text-black">($84.00 Total!)</span>
      </div>
      { clarifionSelected? (<img className="pb-6" src={bigclarifion} alt="bigclarifion" ></img>) : (<div></div>) }

      <div className='w-full'>
        <div className='flex justify-between w-full'>
          <img className='bg-blue2 rounded-md mr-4 hover:bg-blue-700' src={clarifion} alt="clarifionIMG" onClick={() => toggleSelected()} />
          <div className='py-2 flex flex-col justify-between flex-1'>
            <div className='flex justify-between text-base'>
              Clarifion Air Ionizer
              <div className='flex justify-between items-center'>
                <div className='text-[10px] line-through text-[#969696] mr-2'>$180</div>
                <div className='text-base text-blue2 font-semibold'>$84</div>
              </div>
            </div>
            <div className='flex py-3'>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className='flex'>
              <img className='pr-4' src={smallcircle} alt="O" />
              <div className='text-sm text-[#37465a] font-light'>12 left in Stock</div>
            </div>
          </div>
        </div>
        <div className='text-center text-blacktext text-sm my-4'>
          Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
        </div>
      </div>

      <div className='text-sm text-blacktext w-full my-1'>
        <div className='flex'>
          <img className='pr-4' src={checkblue} alt="check" />
          <div><span className=''>Negative Ion Technology may</span> <span className='font-bold'>help with allergens</span></div>
        </div>
        <div className='flex my-4'>
          <img className='pr-4' src={checkblue} alt="check" />
          <div><span className=''>Designed for </span> <span className='font-bold'>air rejuvenation</span></div>
        </div>
        <div className='flex'>
          <img className='pr-4' src={checkblue} alt="check" />
          <div><span className='font-bold'>Perfect for every room </span><span className=''>in all types of places.</span></div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full text-base px-4 py-3 bg-white2 rounded-md my-6">
        <img className="" src={discount} alt="percent" /> 
        <div className="px-4">
          Save 
          <span className="text-blue2"> 53% </span> 
          and get 
          <span className="text-blue2"> 6 extra Clarifision </span> 
          for only 
          <span className="text-blue2"> $14 Each.</span></div>
      </div>
      
    </div>
  );
}

export default Clarifion;