import logo from '@/assets/logo-with-text.svg';
import mcafee from '@/assets/McAfee-secure.svg';
import norton from '@/assets/norton-antivirus.svg';
import checkedstep from '@/assets/checked-step.svg';
import currentstep from '@/assets/current-step.svg';
import futurestep from '@/assets/future-step.svg';

const Clarifion = ()=> {
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
        <h2 className='text-xl text-black2 text-center pt-1 pb-6'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</h2>
      </div>
      <div className='flex w-full justify-between'>
        <div className='flex flex-col items-center text-base text-center'>
          <img src={checkedstep} alt="step" />
          Cart Review
        </div>
        <div className='flex flex-col items-center text-base text-center'>
          <img src={checkedstep} alt="step" />
          Checkout
        </div>
        <div className='flex flex-col items-center text-base text-center font-bold'>
          <img src={currentstep} alt="step" />
          Special Offer
        </div>
        <div className='flex flex-col items-center text-base text-center'>
          <img src={futurestep} alt="step" />
          Confirmation
        </div>
      </div>
      
    </div>
  );
}

export default Clarifion;