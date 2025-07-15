import React, { useEffect, useState } from 'react'
import imgs from '../../../assets/product1-3.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { removeFromCart } from '../../Redux/Actions/actions';


const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);
    let a = 0;
    let totalprice = cartItems.map((item) => { return a = a + item.price })
    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems])

    const handleRemoveCart = (id) => {
        toast.error("Remove from cart", {
            position: "bottom-right"
        })
        dispatch(removeFromCart(id))
    }

    return (
        <div className='flex flex-wrap lg:flex-nowrap p-2  bg-green-200'>
            <div className="w-full px-2">
                <div className="font-extralight text-[21px] md:text-[32px]">Shopping Cart</div>
                <div className="font-bold text-blue-400 text-[17px]">Detailed All Items</div>
                <div className="font-extralight text-end text-[21px] md:text-[26px]">Price</div>
                <div className="w-full bg-white">
                    {
                        cartItems.map((item, ind) => {
                            return (
                                <div className="w-full flex justify-between flex-wrap my-3 border p-3" >
                                    <div className='w-[250px] h-[250px] bg-white'>
                                        <img src={item.imageUrl} className='object-contain w-full h-full' alt="product" />
                                    </div>
                                    <div className="flex flex-wrap lg:flex-nowrap justify-between w-full sm:max-w-[80%] bg-white">
                                        <div className="bg-white w-full px-6">
                                            <div className='text-[18px] sm:text-[20px] font-semibold mt-4'>
                                                {item.name}
                                            </div>
                                            <div className="py-3 text-[18px] text-green-500 font-medium">In Stock</div>
                                            <div className="text-[18px]">Eligible for Free Shopping</div>
                                            <div className="border rounded-lg bg-yellow-400 w-full max-w-[210px] outline-none flex justify-center font-bold text-[16px] sm:text-[18px] px-1 py-2 cursor-pointer mt-3" onClick={() => { handleRemoveCart(item.id)}}>Remove from Basket</div>
                                        </div>

                                        <div className="w-full max-w-[15%] text-center lg:pl-0 pl-6 mt-3 font-semibold text-[20px] whitespace-nowrap">Rs {item.price}</div>

                                    </div>

                                </div>
                            )
                        })
                    }


                </div>
            </div>
            <div className="w-full lg:max-w-[20vw] bg-white border flex flex-col justify-start items-start px-2 gap-2 py-4">
                <div className="font-light flex-wrap text-[20px]">Subtotal ({cartItems.length} items) : <span className='font-bold text-[18px]'>Rs {a}</span></div>
                <div className='flex flex-wrap gap-3 text-[18px]'> <input type="checkbox" className='h-[32px]' /> This order contain a gift</div>
                <div className="border rounded-lg bg-yellow-400 w-full max-w-[320px] flex justify-center font-semibold text-[18px] mx-1  py-2 cursor-pointer">Proceed To Buy</div>
            </div>
            <ToastContainer/>
        </div>

    )
}
export default Cart;