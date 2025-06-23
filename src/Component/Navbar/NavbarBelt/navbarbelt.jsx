import logo from '../../../assets/amazonlogo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import flag from '../../../assets/indiaflag.png';
import { Form, Link } from 'react-router';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector, useDispatch} from 'react-redux';

const Navbarbelt = () => {
    const cartItems = useSelector((state)=> state.cart.items);
    return (
        <div className='flex bg-black w-full min-h-[75px]'>
            <div className="leftside pt-3 pb-1 min-h-[70px] pl-2 flex">
                <Link to="/" className='border border-transparent hover:border-white border-spacing-0 pt-2 px-2 flex w-[130px]'>
                    <img className='h-[45px] w-[100px] object-contain' src={logo} alt="logo" />
                    <span className='text-white'>.in</span>
                </Link>
                <div className="border border-transparent hover:border-white border-spacing-0 flex ml-2 align-center items-center">
                    <LocationOnOutlinedIcon className='text-white' />
                    <div className='flex justify-center flex-col px-1'>
                        <p className='text-white text-sm'>Delievering to pune 411006</p>
                        <p className='text-white'><b>Updated Location</b></p>
                    </div>
                </div>
            </div>
            <div className="searchbar min-w-[100px] rounded-md border hover:border-yellow-400 mx-4 mt-3 max-h-[50px] bg-red flex justify-center ">
                <div className="bg-gray-300 flex px-1 pt-3 border rounded-sm">
                    <div className="text-[15px]">All</div>
                    <ArrowDropDownOutlinedIcon sx={{ fontSize: "28px" }} />
                </div>
                <input type="text" className='bg-white outline-none border-none p-2 w-[49vw] text-xl' placeholder='Search Amazon.in' />
                <div className="bg-orange-300 flex py-2 px-2 border rounded-sm w-11">
                    <SearchOutlinedIcon sx={{ fontSize: "32px" }} />
                </div>
            </div>
            <div className="rightside ml-2 flex items-center gap-[4px] text-white">
                <div className="flex items-center px-1 border border-transparent hover:border-white border-spacing-3">
                    <img src={flag} alt="" className='w-[30px] object-contain h-[40px]' />
                    <span className='text-white ml-1 text-[17px] '>EN</span>
                    <ArrowDropDownOutlinedIcon sx={{ fontSize: "24px" }} />
                </div>
                <div className="flex flex-col px-1 border border-transparent hover:border-white">
                    <div className="">Hello, sign in</div>
                    <div className="flex">
                        <div className="text-sm"><b>Account & Lists</b></div>
                        <ArrowDropDownOutlinedIcon />
                    </div>
                </div>
                <div className="flex flex-col px-1 border border-transparent hover:border-white">
                    <div className="">Returns</div>
                    <div className=""><b>& Orders</b></div>
                </div>
                <div className="flex flex-row px-1 border border-transparent hover:border-white">

                    <Link to={'cart'} className='flex flex-col'>
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