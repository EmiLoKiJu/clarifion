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
import arrow from '@/assets/arrow-right.svg';
import lock from '@/assets/lock.svg';
import visa from '@/assets/visa.svg';
import shoppay from '@/assets/shop-pay.svg';
import paypal from '@/assets/paypal.svg';
import mastercard from '@/assets/mastercard.svg';
import gpay from '@/assets/gpay.svg';
import applepay from '@/assets/apple-pay.svg';
import amex from '@/assets/amex.svg';
import satisfaction from '@/assets/satisfaction.svg';
import user1 from '@/assets/user1.png';
import star2 from '@/assets/star2.svg';
import verified from '@/assets/Verified.svg';
import clarifion2md from '@/assets/clarifion2md.svg';

const Clarifion = ()=> {
  const [clarifionSelected, setClarifionSelected] = useState(false);
  const toggleSelected = () => {
    setClarifionSelected(!clarifionSelected);
  };

  const [videoactive, setVideoactive] = useState(false);
  const toggleVideo = () => {
    setVideoactive(!videoactive);
  };

  return(
    <div className="flex flex-col items-center text-black mt-10 px-5 md:px-12 lg:px-18 xl:px-32 bg-white">
      <div className='flex w-full justify-between p-5'>
        <img src={logo} alt="logo clarifion" />
        <div className='flex justify-between'>
          <img className='mx-4' src={mcafee} alt="mcafee" />
          <img src={norton} alt="norton" />
        </div>
      </div>

      <div className='pt-[50px]'>
        <h1 className='text-4xl text-center lg:text-5xl'>Wait ! Your Order In Progress.</h1>
        <h2 className='text-xl text-blacktext text-center pt-1 pb-6 lg:text-3xl lg:pb-[60px]'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</h2>
      </div>

      <div className='flex w-full justify-between lg:mb-10'>
        <div className='flex flex-col items-center text-sm text-center lg:flex-row lg:text-2xl'>
          <img className="lg:w-[40px] lg:mr-5" src={checkedstep} alt="step" />
          Cart Review
        </div>
        <div className='flex flex-col items-center text-sm text-center lg:flex-row lg:text-2xl'>
          <img className="lg:w-[40px] lg:mr-5" src={checkedstep} alt="step" />
          Checkout
        </div>
        <div className='flex flex-col items-center text-sm text-center font-bold lg:flex-row lg:text-2xl'>
          <img className="lg:w-[40px] lg:mr-5" src={currentstep} alt="step" />
          Special Offer
        </div>
        <div className='flex flex-col items-center text-sm text-center lg:flex-row lg:text-2xl'>
          <img className="lg:w-[40px] lg:mr-5" src={futurestep} alt="step" />
          Confirmation
        </div>
      </div>
      { clarifionSelected && (<img className="my-6 lg:hidden" id="big-clarifion" src={bigclarifion} alt="bigclarifion" ></img>) }
      <div className="flex flex-col lg:flex-row lg:bg-[#fafafa] lg:p-10">
        <div className="mr-10">
          <div>
            <img className="hidden lg:block" id="big-clarifion" src={bigclarifion} alt="bigclarifion" ></img>
            <div className="hidden lg:flex flex-col bg-white rounded-[16px] mt-6 p-6">
              <div className="flex">
                <div className="mr-2">
                  <img src={user1} alt="user" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex">
                    <img src={star2} alt="star" />
                    <img src={star2} alt="star" />
                    <img src={star2} alt="star" />
                    <img src={star2} alt="star" />
                    <img src={star2} alt="star" />
                  </div>
                  <div className="flex">
                    <div className="text-[#333333] font-bold">Ken T.</div>
                    <img src={verified} className="mx-2" alt="verifiedicon" />
                    <div>Verified Customer</div>
                  </div>
                </div>
              </div>
              <div className="text-xl text-blacktext">“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</div>
            </div>
          </div>
          
        </div>
        <div className="w-full">
          <div className='text-3xl text-center py-6 lg:py-0 text-start'>
            <span className="text-blue2">ONE TIME ONLY </span>
            <span className="text-black">Special Price For 6 Extra Clarifion For Only </span>
            <span className="text-blue2">$14 Each </span>
            <span className="text-black">($84.00 Total!)</span>
          </div>

          <div className='w-full'>
            <div className='flex justify-between w-full lg:mt-8'>
              <div>
                <img className='hidden bg-blue2 rounded-md mr-4 lg:block' src={clarifion2md} alt="clarifionIMG" />
              </div>
              <div>
                <img className='bg-blue2 rounded-md mr-4 hover:bg-blue-700 lg:hidden' src={clarifion} alt="clarifionIMG" onClick={() => toggleSelected()} />
              </div>
              <div className='py-2 flex flex-col justify-between flex-1 lg:py-0'>
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
                <div className='hidden text-start text-blacktext text-sm my-4 xl:block'>
                  Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                </div>
              </div>
            </div>
            <div className='text-center text-blacktext text-sm my-4 xl:hidden'>
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

          <div className="flex items-center justify-center w-full text-base px-4 py-3 bg-white2 rounded-md my-6">
            <img className="" src={discount} alt="percent" /> 
            <div className="px-4">
              Save 
              <span className="text-blue2"> 53% </span> 
              and get 
              <span className="text-blue2"> 6 extra Clarifision </span> 
              for only 
              <span className="text-blue2"> $14 Each.</span></div>
          </div>

          { videoactive && (
            <div className="flex justify-center">
              <iframe
                width="360"
                height="215"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
          ) }

          <button className="bg-[#59ae43] text-white flex items-center w-full justify-center rounded-[36px]" onClick={() => toggleVideo()}>
            <div className="flex py-4">
              <div className="text-base text-bold pr-4">YES - CLAIM MY DISCOUNT</div>
              <img src={arrow} alt="arrow" />
            </div>
          </button>

          <div className="flex flex-col px-4 py-2 rounded border border-[#cfcfcf] my-3 text-sm w-full items-center">
            <div className="flex w-full justify-between items-center md:justify-around">
              <div>Free shipping</div>
              <span className="flex h-[14px] w-[1px] bg-[#cfcfcf]"></span>
              <div className="flex">
                <img src={lock} alt="lock" />
                <div className="ml-2">Secure 256-bit SSL encryption</div>
              </div>
            </div>
            <span className="flex h-[1px] w-full bg-[#cfcfcf] my-3"></span>
            <div className="flex">
              <img className="px-[1px]" src={visa} alt="visa" />
              <img className="px-[1px]" src={shoppay} alt="shop-pay" />
              <img className="px-[1px]" src={paypal} alt="paypal" />
              <img className="px-[1px]" src={mastercard} alt="mastercard" />
              <img className="px-[1px]" src={gpay} alt="gpay" />
              <img className="px-[1px]" src={applepay} alt="apple pay" />
              <img className="px-[1px]" src={amex} alt="amex" />
            </div>
          </div>

          <div className="font-medium text-[#f82c2c] underline text-sm">
            NO THANKS, I DON&apos;T WANT THIS.
          </div>

          <div className="flex justify-between items-start mt-6 mb-[50px] text-sm">
            <img className="mr-4" src={satisfaction} alt="satisfaction guarantee" />
            <div>If you are not completely thrilled with your Clarifion - We have a <span className="font-bold">30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clarifion;