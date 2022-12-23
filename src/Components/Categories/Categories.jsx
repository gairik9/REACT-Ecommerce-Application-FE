import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <button>
            <Link to={"/products/1"} className="link">Sale</Link>
          </button>
        </div>
        <div className="row">
        <img
            src="https://images.unsplash.com/photo-1606480195899-f1c11b60b887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
          <button>
            <Link to={"/products/1"} className="link">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
            <img
            src="https://images.unsplash.com/photo-1624972699570-81ce254b3141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <button>
            <Link to={"/products/1"} className="link">Men</Link>
          </button></div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img
            src="https://images.unsplash.com/photo-1602532350069-f1e51a6420ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <button>
            <Link to={"/products/1"} className="link">Accessories</Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
            <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <button>
            <Link to={"/products/1"} className="link">Shoes</Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
        <img
            src="https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <button>
            <Link to={"/products/1"} className="link">New Season</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
