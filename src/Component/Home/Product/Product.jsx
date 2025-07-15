import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import products from '../Product/productDetails.json';
import { addToCart } from '../../Redux/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";


function Product() {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSidebar] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const handleToCart = (item) => {
    dispatch(addToCart(item));
    toast.success('Added to Cart', {
      position: "bottom-right"
    });
  }
  const handleSideBar = () => {
    setOpenSidebar(!openSideBar);
  }

  const items = [
    { "name": "Electronics" },
    { "name": "Home & kitchen" },
    { "name": "Jewellery" },
    { "name": "Mobiles" },
    { "name": "Tv & Laptops" },
    { "name": "Luxury Beauty" },
    { "name": "Apps & Games" },
    { "name": "Books" },
    { "name": "Cameras" },
    { "name": "Musical Instruments" },
    { "name": "Office & stationary" },
    { "name": "Earpods" },
    { "name": "Furniture" },
  ]

  return (
    <div className='w-full px-12 lg:px-0'>
      <div className="w-full bg-white border h-[45px]  flex whitespace-nowrap justify-between items-center px-3 gap-3 overflow-x-auto scrollbar-hide">
        {
          items.map((item) => {
            return (
              <div className="text-black font-semibold">{item.name}</div>
            )
          })
        }

      </div>
      <div className="w-full flex flex-row px-1">

        <div className="w-auto lg:w-[15%] bg-white border h-full mt-4">
          <div className={`w-full flex-col justify-start items-start gap-1 pt-5 mt-3 px-2 hidden lg:block`}>
            <div className="flex flex-col">
              <div className="font-bold">Category</div>
              <div className="text-light">Computer & Accessories</div>
              <div className="font-bold">Macbooks</div>
              <div className="font-bold">Amazon prime</div>
              <div className="font-bold">Amazon Customer Review</div>
              <div className="flex flex-col gap-1.5 pl-0.5">
                <div className='flex  gap-1'>
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarOutlineIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <div className='text-[15px]'>& Up</div>
                </div>
                <div className='flex gap-1'>
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarOutlineIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <div className='text-[15px]'>& Up</div>
                </div>
                <div className='flex gap-1'>
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarOutlineIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <div className='text-[15px]'>& Up</div>
                </div>
                <div className='flex gap-1'>
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <StarOutlineIcon sx={{ fontSize: "22px", color: "yellow" }} />
                  <div className='text-[15px]'>& Up</div>
                </div>
              </div>

              <div className="font-bold">Amazon prime</div>
              <div className="font-bold">Amazon Customer Review</div>
              <div className="font-bold">Amazon prime</div>
              <div className="font-bold">Amazon Customer Review</div>
              <div className="font-bold">Amazon prime</div>
              <div className="font-bold">Amazon Customer Review</div>
              <div className="font-bold">Amazon prime</div>
              <div className="font-bold">Amazon Customer Review</div>
              <div className="font-bold">Amazon prime</div>
              <div className="font-bold">Amazon Customer Review</div>
              <div className="font-bold">Amazon prime</div>
              <div className="font-bold">Amazon Customer Review</div>
            </div>

          </div>
          <div className="fixed top-32 mt-16 sm:mt-5 sm:top-40 md:top-42  md:mt-6 bg-white left-0 z-40">
            <div onClick={handleSideBar} className="relative lg:hidden font-thin text-[32px] px-1 ">
              {openSideBar ? <FaTimes /> : <IoIosMenu />}
            </div>
            {
              openSideBar &&
              <div className={`w-[60%] h-[800px] md:h-screen fixed top-30 sm:top-30 md:top-44 left-0 bg-white flex-col justify-start transition-all duration-500 items-start gap-1 -mt-11 sm:-mt-9 md:-mt-0 px-2 block lg:hidden`}>
                <div onClick={handleSideBar} className="block lg:hidden font-thin text-[32px] px-1 py-4">
                  <FaTimes onClick={handleSideBar} />
                </div>
                <div className="flex flex-col h-[480px] md:h-screen overflow-y-auto scrollbar-hidden bg-white">
                  <div className="font-bold">Category</div>
                  <div className="text-light">Computer & Accessories</div>
                  <div className="font-bold">Macbooks</div>
                  <div className="font-bold">Amazon prime</div>
                  <div className="font-bold">Amazon Customer Review</div>
                  <div className="flex flex-col gap-1.5 pl-0.5">
                    <div className='flex  gap-1'>
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarOutlineIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <div className='text-[15px]'>& Up</div>
                    </div>
                    <div className='flex gap-1'>
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarOutlineIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <div className='text-[15px]'>& Up</div>
                    </div>
                    <div className='flex gap-1'>
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarOutlineIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <div className='text-[15px]'>& Up</div>
                    </div>
                    <div className='flex gap-1'>
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <StarOutlineIcon sx={{ fontSize: "22px", color: "yellow" }} />
                      <div className='text-[15px]'>& Up</div>
                    </div>
                  </div>

                  <div className="font-bold">Amazon prime</div>
                  <div className="font-bold">Amazon Customer Review</div>
                  <div className="font-bold">Amazon prime</div>
                  <div className="font-bold">Amazon Customer Review</div>
                  <div className="font-bold">Amazon prime</div>
                  <div className="font-bold">Amazon Customer Review</div>
                  <div className="font-bold">Amazon prime</div>
                  <div className="font-bold">Amazon Customer Review</div>
                  <div className="font-bold">Amazon prime</div>
                  <div className="font-bold">Amazon Customer Review</div>
                  <div className="font-bold">Amazon prime</div>
                  <div className="font-bold">Amazon Customer Review</div>
                </div>

              </div>

            }

          </div>



        </div>

        <div className="w-full lg:w-[90%] px-3  bg-white flex flex-col mx-auto">
          <div className="w-[full] px-3 h-[44px] bg-white border rounded-sm text-[18px] font-semibold pl-7 flex flex-wrap whitespace-nowrap items-center mt-4 ">1-5 of 5 results for
            <span className='font-bold text-orange-500 text-[19px] p-1.5'> Mackbooks</span>
          </div>
          <div className="w-full px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-3 mt-3 border rounded-sm">
            {
              products.product.map((item, index) => {
                return (
                  <div className="flex flex-col w-full max-w-sm bg-gray-50 border rounded-md">
                    <div className="w-full aspect-[1/1] bg-white border rounded-none">
                      <img src={item.imageUrl} className='object-contain w-full h-full' alt="" />
                    </div>

                    <div className="p-2 bg-white w-full flex flex-col justify-end">
                      <div className="text-[19px] font-semibold pt-2">
                        {item.name}
                      </div>
                      <div className="">
                        <div className='flex gap-1 pt-1'>
                          <StarIcon sx={{ fontSize: "26px", color: "yellow" }} />
                          <StarIcon sx={{ fontSize: "26px", color: "yellow" }} />
                          <StarIcon sx={{ fontSize: "26px", color: "yellow" }} />
                          <StarIcon sx={{ fontSize: "26px", color: "yellow" }} />
                          <StarOutlineIcon sx={{ fontSize: "26px", color: "yellow" }} />
                        </div>
                      </div>

                      <div className="flex justify-between py-3 px-1 items-center flex-wrap">
                        <div className='flex '>
                          <div className="">$</div>
                          <div className="text-[26px] font-semibold">{item.price}</div>
                        </div>
                        <div className="border rounded-lg bg-yellow-400 w-full sm:w-[150px] flex justify-center font-semibold text-[20px] px-2 py-2 cursor-pointer" onClick={() => { handleToCart(item) }}>Add to Cart</div>
                      </div>

                      <div className="text-sm m-1">Upto 10% off on select cards</div>

                      <div className="text-sm font-semibold m-1">Free Delievery By Amazon</div>

                    </div>

                  </div>

                )
              })
            }



          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Product

