import { Link } from "react-router-dom"
import ProductsCard from "../components/product-card"
const Home= () => {

  const addToCartHandler=()=>{
  

  }
  return (
    <div className="home">

      <section></section>

      <h1>Latest Product

      <Link to="/search" className="findmore">More</Link>
      </h1>
      <main>
        <ProductsCard productId="adaaafca" name="Macbook" price={8373} 
        stock={883}
        handler={addToCartHandler}

        photo={"https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg"}/>
      </main>
      
    </div>
  )
}

export default Home
