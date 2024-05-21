import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi"

import { useNavigate} from "react-router-dom";

const Shipping = () => {

    const navigate =useNavigate;

    const[ShippingInfo,setShippingInfo]=useState({
          address:" ",
          city:"",
          state:""
          ,country:"",
          pincode:" "
    })

    const changehandler=(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>
    )=>{
        setShippingInfo((prev)=>({...prev,[e.target.name
        ]:e.target.value})); 
    }
  return (
    <div className="Shipping">
        <button className="back-btn" onClick={()=>navigate("/cart")}>
            <BiArrowBack/>
        </button>

        <form >
            <h1>Shipping Address</h1>
            <input 
            required
            type="text" placeholder="Address"  name="Address"
            value={ShippingInfo.address}
            onChange={changehandler}
            />
                 <input 
            required
            type="text" placeholder="city"  name="city"
            value={ShippingInfo.city}
            onChange={changehandler}
            />
                 <input 
            required
            type="text" placeholder="State"  name="State"
            value={ShippingInfo.state}
            onChange={changehandler}
            />

            <select name="Country" required value={ShippingInfo.country} id="">
            <option value="">Choose Country</option>

                <option value="">India</option>
                <option value="">USA</option>
                <option value="">Germany</option>
            </select>

            <input 
            required
            type="number" placeholder="State"  name="State"
            value={ShippingInfo.pincode}
            onChange={changehandler}
            />

            <button type="submit"></button>
        </form>

      
    </div>
  )
}

export default Shipping
