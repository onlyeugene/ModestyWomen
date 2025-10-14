import React from 'react';
import { assets } from '../../../assets';

const Logo = () => {
  return (
    <div className='flex gap-2 items-center'>
      <img src={assets.logo} alt="logo" className=''/>
     <div className='flex flex-col leading-tight items-center'>
        <h2 className='text-sm text-green-600'>Woman & Modesty</h2>
        <span className='text-xs'>GLOBAL INITIATIVE</span>
        <p className='text-[10px]'>Rewarding Womanhood</p>
     </div>
    </div>
  );
}

export default Logo;
