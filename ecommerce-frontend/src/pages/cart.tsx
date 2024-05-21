import { useEffect, useState } from "react";

import {Link } from "react-router-dom"

import {VscError} from "react-icons/vsc"
import CartItem from "../components/cart-Item";

const cartItem=[
  {
    productid:"ojajhajhjahj"
    ,photo:"https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg",
    name:"mac book",
    price:"3000",
    quantity:"4",
    stock:"10"
  }
];
const subtotal=4000;
const tax=Math.round(subtotal *0.18);
const shippingCharges= 200;
const discount=400;
const total=subtotal +tax+ shippingCharges;

function Cart() {
  const [couponCode,setCouponCode]=useState<string>(" ");
    const [isValidCouponCode,setIsValidCouponCode]=useState<boolean>(false);


    useEffect(()=>{

      const Timeoutid=setTimeout(()=>{
        if(Math.random()>0.5){
          setIsValidCouponCode(true)
          
        }
        else{
          setIsValidCouponCode(false);
        }

      }
    )

      return ()=>{
        clearTimeout(Timeoutid)
        setIsValidCouponCode(false)

      }

    },[couponCode])

  return (
    <div className="cart">
      <main>

      {cartItem.length>0?  
      cartItem.map((i,index)=>(<CartItem  key={index} 
        cartItem={i}/>)): <h1>No Items added</h1>
 }
      
      
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges :₹{subtotal}</p>
        <p>Tax:₹{tax}</p>
        <p>
          Discount: -<em className="red">  ₹{discount} </em>

        </p> 
        <p>
          <b>Total:{total}</b>
        </p>

        <input type="text" placeholder={couponCode}value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>

        {
          couponCode && (
            isValidCouponCode? (
            <span className="green">₹{discount} off using the <code>{couponCode}</code></span>):
          ( <span className="red">Invalid Coupon <VscError/></span>)
          )
          
        }

        {
          cartItem.length>0 && <Link to="/shipping">checkout</Link>
        }
      </aside>
    </div>
  )
};

export default Cart
