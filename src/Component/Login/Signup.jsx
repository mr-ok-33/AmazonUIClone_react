import React from 'react'
import logo from '../../assets/amazonlogo.png';
import { Link } from 'react-router';

const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center text-md  px-4 sm:px-6 lg:px-8 py-6 ">

      <div className='bg-gray-400 w-full max-w-[500px] flex flex-col justify-between border rounded-md p-6'>
        <div className='w-[210px] py-3 md:py-7 px-5 h-[70px] mx-auto'>
          <Link to="/" className="" >
            <img src={logo} alt="" className='' />
          </Link>
          
        </div>

        <div className='w-[210px] text-center mx-auto  font-semibold text-[26px] my-3 md:my-5'>Create Account</div>


        <form action="" className='w-full flex flex-col gap-6'>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <label className="text-[18px] font-medium sm:w-[40%]">First Name:</label>
            <input className='sm:w-[60%] bg-white rounded-md px-2 py-1 outline-none' />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
           <label className="text-[18px] font-medium sm:w-[40%]">Last Name:</label>
            <input className='sm:w-[60%] bg-white rounded-md px-2 py-1 outline-none' />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <label className="text-[18px] font-medium sm:w-[40%]">Email:</label>
            <input className='sm:w-[60%] bg-white rounded-md px-2 py-1 outline-none border' />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <label className="text-[18px] font-medium sm:w-[40%]">Phone No:</label>
            <input className='sm:w-[60%] bg-white rounded-md px-2 py-1 outline-none' />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
           <label className="text-[18px] font-medium sm:w-[40%]">Password:</label>
            <input className='sm:w-[60%] bg-white rounded-md px-2 py-1 outline-none border' />
          </div>
           <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <label className="text-[18px] font-medium sm:w-[40%]">Confirm Password:</label>
            <input className='sm:w-[60%] bg-white rounded-md px-2 py-1 outline-none border' />
          </div>
          
          <div className="flex justify-center pt-7">
            <button className='bg-yellow-300 w-full max-w-[190px] cursor-pointer h-[42px] rounded-md text-[18px] '>Submit</button>
          </div>
        </form>
        <div className="flex justify-center text-[17px] pt-6">
          Terms and Conditions
        </div>
      </div>
      
    </div>


  )
}

export default SignUp