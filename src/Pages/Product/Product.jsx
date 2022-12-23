import { useState } from "react";
import "./Product.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80",
  ];

  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Full-Sleeve Jackets</h1>
          <span className="price">₹2000</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="add">
            <ShoppingCartOutlinedIcon /> Add To cart
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderOutlinedIcon /> Add To Wishlist
            </div>
            <div className="item">
              <BalanceIcon /> Add To Compare
            </div>
          </div>
          <div className="info">
            <span>Vendor : Polo</span>
            <span>Product Type : T-Shirt</span>
            <span>Tag : T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>Additional Information</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
