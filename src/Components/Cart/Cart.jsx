import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      img2: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      title: "Set Of Solid Color T-Shirts",
      desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      isNew: true,
      oldPrice: 3200,
      price: 2200,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
      img2: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Off-White Premium Shawl",
      desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      isNew: true,
      oldPrice: 1200,
      price: 800,
    },
  ];
  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 40)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>₹ 1200</span>
      </div>
      <button>Proceed To Checkout</button>
      <span className="reset">Reset</span>
    </div>
  );
};

export default Cart;
