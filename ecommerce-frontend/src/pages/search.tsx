
import { useState } from "react";
import ProductCard from "../components/product-card";

function Search() {
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");
  const [maxPrice, setmaxprice] = useState(100000);
  const [category, setcategory] = useState("");
  const [page, setpage] = useState(1);



  const addToCartHandler=()=>{

  };

  const isPrevPage=page>1;
  const isNextPage=page<4;

  return (
    <div className="pro-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select
            value={sort}
            onChange={(e) => setsort(e.target.value)}>
              <option value="">None</option>
              <option value="asc">(Low To High)</option>
              <option value="dsc">(High To Low)</option>

            </select>
        </div>

        <div>
          <h4>Max Price :{maxPrice || ""}</h4>

          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setmaxprice(Number(e.target.value))}
            />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setcategory(e.target.value)}>
              <option value="">All</option>
              <option value="">sample1</option>
              <option value="">sample2</option>

            </select>
        </div>
      </aside>
      <main>

        <h1>Products</h1>
        <input type="text" placeholder="Search By name..." 
        value={search} onChange={e=>setsearch(e.target.value)}/>


        <div className="search_product_list">
          <ProductCard
           productId="adaaafca" 
           name="Macbook"
            price={8373} 
           stock={883}
           handler={addToCartHandler}
   
           photo={"https://m.media-amazon.com/images/I/71an9eiBxpL._SX466_.jpg"}/>
        </div>


        <article>
          <button disabled={!isPrevPage} onClick={()=>setpage((prev)=>prev-1)}>Prev</button>
          <span>{page} of{4}</span>
          <button disabled={!isNextPage} onClick={()=>setpage((prev)=>prev+1)}>Next</button>
        </article>
      </main>
    </div>
  );
}

export default Search;
