import React from 'react'
import logo from '../../assets/amazonlogo.png';

function Footer() {
  return (
    <div className='w-full text-[22px] h-[550px] flex flex-col justify-center items-center py-[350px] gap-16 bg-gray-700 relative'>
        <div className='w-[80%] flex flex-row justify-between p-5'>
            <div className=" p-3 w-[250px]">
                <ul>
                    <div className='text-[21px] text-white font-semibold'>Get to Know Us</div>
                    <li className='text-[19px] text-white'>About Amazon</li>
                    <li className='text-[19px] text-white'>Careers</li>
                    <li className='text-[19px] text-white'>Press Releases</li>
                    <li className='text-[19px] text-white'>Amazon science</li>
                </ul>
            </div>
            <div className=" p-3 w-[250px]">
                <ul>
                    <div className='text-[21px] text-white font-semibold'>Connect with Us</div>
                    <li className='text-[19px] text-white'>Instagram</li>
                    <li className='text-[19px] text-white'>Twitter</li>
                    <li className='text-[19px] text-white'>Facebook</li>
                  
                </ul>
            </div>
            <div className=" p-3 w-[250px]">
                <ul>
                    <div className='text-[21px] text-white font-semibold'>Make Money with Us</div>
                    <li className='text-[19px] text-white'>Sell on Amazon</li>
                    <li className='text-[19px] text-white'>Sell under Amazon Accelerator</li>
                    <li className='text-[19px] text-white'>Protect and Build Your Brand</li>
                    <li className='text-[19px] text-white'>Amazon Global Selling</li>
                     <li className='text-[19px] text-white'>Supply to Amazon</li>
                    <li className='text-[19px] text-white'>Sell under Amazon Accelerator</li>
                    <li className='text-[19px] text-white'>Become an Affiliate</li>
                    <li className='text-[19px] text-white'>Advertise Your Products</li>
                </ul>
            </div>
            <div className=" p-3 w-[250px]">
                <ul>
                    <div className='text-[21px] text-white font-semibold'>Let Us Help You</div>
                    <li className='text-[19px] text-white'>Your Account</li>
                    <li className='text-[19px] text-white'>Returns Centre</li>
                    <li className='text-[19px] text-white'>Recalls and Product Safety Alerts</li>
                    <li className='text-[19px] text-white'>100% Purchase Protection</li>
                </ul>
            </div>
            


        </div>
        <div className='w-[190px]  py-4 px-5 h-[70px]'>
            <img  src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer 