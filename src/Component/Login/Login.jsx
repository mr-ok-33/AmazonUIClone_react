import React from 'react'
import logo from '../../assets/amazonlogo.png';
import { Link } from 'react-router-dom'
import SignUp from './Signup';
export const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center' >
      <div
        className='bg-gray-400 w-full max-w-[340px]  md:max-w-[440px] h-full max-h-[470px] mx-auto flex flex-col justify-between items-center border border-black rounded-md p-2 '

      >
        <div className='w-[210px] py-6 px-5 h-[70px]'>
           {/* <div className='w-[210px] py-3 md:py-7 px-5 h-[70px] mx-auto'> */}
                    <Link to="/" className="" >
                      <img src={logo} alt="" className='' />
                    </Link>
                    
                  
        </div>

        <form action="" className='w-full flex flex-col gap-9'>
          <div className="text-[22px] font-extralight flex flex-wrap md:flex-nowrap gap-2 justify-between px-4">
            <b >Username: </b>
            <input className='w-full md:max-w-[80%] mx-0 md:mx-4 bg-white rounded-md outline-none' />
          </div>
          <div className="text-[22px] font-extralight flex flex-wrap md:flex-nowrap gap-2  justify-between px-4">
            <b>Password: </b>
            <input className='w-full md:max-w-[80%] mx-0 md:mx-4 bg-white border rounded-md outline-none' />
          </div>
          <div className="flex justify-center pt-7">
            <button className='bg-yellow-300 w-full max-w-[190px] cursor-pointer h-[42px] rounded-md text-[18px] '>Login</button>
          </div>
        </form>
        <div className="">
          <Link to='/signup' className="flex justify-center text-[17px] cursor-pointer hover:underline">
            signup
          </Link>
        </div>

        <div className="flex justify-center text-[17px]">
          Terms and Conditions
        </div>
      </div>
    </div>

  )
}
