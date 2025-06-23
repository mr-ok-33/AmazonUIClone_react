import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import products from '../Product/productDetails.json';
import { addToCart } from '../../Redux/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleToCart = (item) => {
    dispatch(addToCart(item));
    toast.success('Added to Cart',{
      position: "bottom-right"
  });
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
    <div className='bg-green-400 w-full'>
      <div className="bg-white border h-[45px] w-full flex justify-between items-center px-3 ">
        {
          items.map((item) => {
            return (
              <div className="text-black font-semibold">{item.name}</div>
            )
          })
        }

      </div>
      <div className="bg-white flex flex-row ">
        <div className="w-[16vw] border  flex flex-col justify-start items-start gap-1 pt-5 pb-4 px-4">
          <div className="font-bold">Category</div>
          <div className="text-light">Computer & Accessories</div>
          <div className="font-bold">Macbooks</div>
          <div className="font-bold">Amazon prime</div>
          <div className="font-bold">Amazon Customer Review</div>
          <div className="flex flex-col gap-1.5 pl-0.5">
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
        <div className="w-[84vw] bg-white flex flex-col mx-4">
          <div className="w-[84vw] h-[44px] bg-white border rounded-sm text-[18px] font-semibold pl-7 flex items-center mt-4 ">1-5 of 5 results for
            <span className='font-bold text-orange-500 text-[19px] p-1.5'> Mackbooks</span>
          </div>
          <div className="w-[84vw] grid grid-cols-4 gap-9 justify-items-center px-3 py-5 mt-3 border rounded-sm">
            {
              products.product.map((item, index) => {
                return (
                  <div className="flex flex-col w-[310px] bg-gray-50 border rounded-md">
                    <div className="w-[310px] h-[310px] bg-white border rounded-none">
                      <img src={item.imageUrl} className='object-contain w-full h-full' alt="" />
                    </div>

                    <div className="p-2 bg-white w-full h-[330px] flex flex-col justify-end">
                      <div className="text-[19px] font-semibold pt-2">
                        {item.name}
                      </div>
                      <div className="">
                        <div className='flex gap-1'>
                          <StarIcon sx={{ fontSize: "26px", color: "yellow" }} />
                          <StarIcon sx={{ fontSize: "26px", color: "yellow" }} />
                          <StarIcon sx={{ fontSize: "26px", color: "yellow" }} />
                          <StarIcon sx={{ fontSize: "26px", color: "yellow" }} />
                          <StarOutlineIcon sx={{ fontSize: "26px", color: "yellow" }} />
                        </div>
                      </div>

                      <div className="flex justify-between py-3 px-1 items-center">
                        <div className='flex '>
                          <div className="">$</div>
                          <div className="text-[26px] font-semibold">{item.price}</div>
                        </div>
                        <div className="border rounded-lg bg-yellow-400 w-[150px] flex justify-center font-semibold text-[20px] px-2 py-2 cursor-pointer" onClick={() => { handleToCart(item) }}>Add to Cart</div>
                      </div>

                      <div className="text-[17px] m-1">Upto 10% off on select cards</div>

                      <div className="text-[17px] font-semibold m-1">Free Delievery By Amazon</div>

                    </div>

                  </div>

                )
              })
            }



          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Product