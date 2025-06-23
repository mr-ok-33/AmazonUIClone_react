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
        <div className='flex flex-row w-full p-2'>
            <div className="white w-[80%] px-2">
                <div className="font-extralight text-[35px]">Shopping Cart</div>
                <div className="font-bold text-blue-400 text-[17px]">Detailed All Items</div>
                <div className="font-extralight text-end text-[22px]">Price</div>
                <div className="w-full bg-white">
                    {
                        cartItems.map((item, ind) => {
                            return (
                                <div className="w-full flex my-3  border p-3" >
                                    <div className='w-[250px] h-[250px] bg-white'>
                                        <img src={item.imageUrl} className='object-contain w-full h-full' alt="" />
                                    </div>
                                    <div className="flex justify-between w-[80%] bg-white px-2">
                                        <div className="bg-white w-[90%] px-6">
                                            <div className='text-[20px] font-semibold mt-4'>
                                                {item.name}
                                            </div>
                                            <div className="py-3 text-[18px] text-green-500 font-medium">In Stock</div>
                                            <div className="text-[18px]">Eligible for Free Shopping</div>
                                            <div className="border rounded-lg bg-yellow-400 w-[220px] flex justify-center font-bold text-[20px] px-1 py-2 cursor-pointer mt-3" onClick={() => { handleRemoveCart(item.id)}}>Remove from Basket</div>
                                        </div>

                                        <div className="w-[10%] text-end font-semibold text-[20px] mt-3">Rs {item.price}</div>

                                    </div>

                                </div>
                            )
                        })
                    }


                </div>
            </div>
            <div className="w-[20%] bg-white border flex flex-col justify-start items-start px-5 gap-2 pt-4">
                <div className="font-light text-[20px]">Subtotal ({cartItems.length} items) : <span className='font-bold text-[18px]'>Rs {a}</span></div>
                <div className='flex gap-3 text-[18px]'> <input type="checkbox" className='h-[32px]' /> This order contain a gift</div>
                <div className="border rounded-lg bg-yellow-400 w-[300px] flex justify-center font-semibold text-[18px] px-2 py-2 cursor-pointer">Proceed To Buy</div>
            </div>
            <ToastContainer/>
        </div>

    )
}
export default Cart;