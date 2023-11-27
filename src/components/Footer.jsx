import lock2 from '@/assets/lock2.svg';

const footer = () => {
  return (
    <div className="bg-black2 text-sm text-white items-center flex flex-col text-center pt-5 pb-1">
      <div className='flex justify-between py-2'>
        <div>Copyright (C) 2023</div>
        <span className="flex h-[14px] w-[1px] bg-[#cfcfcf] mx-3"></span>
        <div>clarifionsupport@clarifion.com</div>
      </div>
      <div className='flex justify-between py-2'>
        <img src={lock2} alt="secured" />
        <div className='pl-4'>Secure 256-Bit SSL Encryption.</div>
      </div>
    </div>
  );
};

export default footer;
