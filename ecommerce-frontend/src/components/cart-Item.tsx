
import { FaTrash } from "react-icons/fa";
import {Link} from"react-router-dom"
type cartItemProps={cartItem:any};




const CartItem = ({cartItem}:cartItemProps) => {

    // productid:"ojajhajhjahj"
    // ,photo:"https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg",
    // name:"mac book",
    // price:"3000",
    // quantity:"4",
    // stock:"10"

    const {photo,productid,name,price,quantity}=cartItem;
  return (
    <div className="cart-Item">
        <img src={photo} alt={name} />
        <article>
            <Link to={`/product/${productid}`}>{name}</Link>
             <span>{price}</span>
        </article>

        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>

        <button><FaTrash/></button>
      
    </div>
  )
}

export default CartItem
