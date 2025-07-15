import logo from '../../../assets/amazonlogo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import flag from '../../../assets/indiaflag.png';
import { Form, Link } from 'react-router';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { Login } from '../../Login/Login';

const Navbarbelt = () => {
    const cartItems = useSelector((state)=> state.cart.items);
    const [input,setInput] = useState('');

    return (
        <div className='flex justify-between flex-wrap lg:flex-nowrap bg-black w-[100%] min-h-[90px] whitespace-nowrap z-40 sticky top-0'>
            <div className="leftside pt-3 pb-1 min-h-[70px] pl-2 flex">
                <Link to="/" className='border border-transparent hover:border-white border-spacing-0 flex justify-center items-center w-[130px]'>
                    <img className='h-[45px] w-[100px] object-contain' src={logo} alt="logo" />
                    <span className='text-white'>.in</span>
                </Link>
                <div className="border border-transparent hidden lg:flex hover:border-white border-spacing-0 ml-2 align-center items-center  ">
                    <LocationOnOutlinedIcon className='text-white' />
                    <div className='flex justify-center flex-col px-1'>
                        <p className='text-white text-sm'>Delievering to pune 411006</p>
                        <p className='text-white'><b>Updated Location</b></p>
                    </div>
                </div>
            </div>
            <div className="searchbar w-[54%] order-1 sm:order-1 md:order-1 lg:order-none rounded-md border hover:border-yellow-400 mx-4 mt-3 max-h-[50px] bg-red flex flex-grow md:flex-grow sm:flex-grow my-2 md:my-2 sm:my-2 lg:my-5 justify-center">
                <div className="bg-gray-300 flex  px-1 pt-3 border rounded-sm">
                    <div className="text-[15px]">All</div>
                    <ArrowDropDownOutlinedIcon sx={{ fontSize: "28px" }} />
                </div>
                <input value={input} onChange={(e)=>console.log(e.target.value)} type="text" className='bg-white outline-none border-none p-2 w-[100%] text-xl' placeholder='Search Amazon.in' />
                <div className="bg-orange-300 flex py-2 px-2 border rounded-sm w-11">
                    <SearchOutlinedIcon sx={{ fontSize: "32px" }} />
                </div>
            </div>
            <div className="rightside flex items-center gap-3 mx-2 text-white ">
                <div className="hidden md:flex items-center px-1 cursor-pointer border border-transparent hover:border-white border-spacing-3">
                    <img src={flag} alt="" className='w-[30px] object-contain h-[40px]' />
                    <span className='text-white ml-1 text-[17px] '>EN</span>
                    <ArrowDropDownOutlinedIcon sx={{ fontSize: "24px" }} />
                </div>
                <Link to={'login'} className="flex flex-col px-1 border border-transparent cursor-pointer hover:border-white">
                    <div className="">Hello, sign in</div>
                    <div className="flex">
                        <div className="text-sm"><b>Account & Lists</b></div>
                        <ArrowDropDownOutlinedIcon />
                    </div>
                </Link>
                <div className="hidden sm:flex flex-col px-1 border border-transparent cursor-pointer hover:border-white">
                    <div className="">Returns</div>
                    <div className=""><b>& Orders</b></div>
                </div>
                <div className="flex flex-row px-1 border border-transparent cursor-pointer hover:border-white">

                    <Link to={'cart'} className='flex flex-col '>
                        <span className='text-orange-500 text-[15px]'>{cartItems.length}</span>
                        <ShoppingCartIcon />
                    </Link>
                    <span className='mt-6 text-[18px]'>cart</span>
                </div>
            </div>
        </div>
    )
}

export default Navbarbelt;