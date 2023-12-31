import { useSelector, useDispatch } from 'react-redux';

import { next, prev } from '@/redux/navtext/navtextSlice';

import nextarrow from '@/assets/next-arrow.svg';
import prevarrow from '@/assets/prev-arrow.svg';
import checknav from '@/assets/checkmark-navbar.svg';
import truck from '@/assets/truck-light.svg';
import moneyback from '@/assets/money-back.svg';
import hearth from '@/assets/hearth.svg';

const Nav = ()=> {
  const dispatch = useDispatch();
  const navtext = useSelector((store) => store.navtext);

  const imgurl = [checknav, truck, moneyback, hearth]

  return(
    <div className='font-manrope z-50 flex flex-col fixed'>
      <nav className="bg-black2 flex justify-between items-center fixed w-full text-sm text-white lg:hidden">
        <img className='px-5' src={prevarrow} alt="prev" onClick={() => dispatch(prev())} />
        <div className='flex justify-center items-center'>
          <img className='py-[10px] pr-2' src={imgurl[navtext.current]} alt="current" />
          {navtext.textarr[navtext.current]}
        </div>
        <img className='px-5' src={nextarrow} alt="next" onClick={() => dispatch(next())} />
      </nav>
      <nav className="hidden bg-black2 justify-center items-center fixed w-full text-sm text-white lg:flex">
        <div className='flex w-full justify-around items-center'>
          {navtext.textarr.map((currenttext, index) => (
            <div className='flex justify-center items-center' key={index}>
              <img className='py-[10px] pr-2' src={imgurl[index]} alt="current" />
              {currenttext}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Nav;