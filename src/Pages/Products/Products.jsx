import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import "./Products.scss";

const Products = () => {

  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type={"checkbox"} id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type={"checkbox"} id="2" value={2} />
            <label htmlFor="2">T-Shirts</label>
          </div>
          <div className="inputItem">
            <input type={"checkbox"} id="3" value={3} />
            <label htmlFor="3">Jackets</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type={"range"} min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type={"radio"} id="asc" value={"asc"} name={"price"} onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price - LOWEST</label>
          </div>
          <div className="inputItem">
            <input type={"radio"} id="desc" value={"desc"} name={"price"} onChange={e=>setSort("desc")} />
            <label htmlFor="desc">Price - Highest</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImage" src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
        alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
