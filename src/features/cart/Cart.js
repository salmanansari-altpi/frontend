import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  deleteItemFromCartAsync,
  selectItems,
  updateCartAsync,
} from "./cartSlice";
import { discountedPrice } from "../../app/constants";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Cart({ toggleCart }) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const totalAmount = items.reduce(
    (amount, item) => discountedPrice(item.product) * item.quantity + amount,
    0
  );

  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, item) => {
    const updatedItem = { ...item, quantity: +e.target.value };
    dispatch(updateCartAsync(updatedItem));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto transition-transform transform translate-x-0">
      {!items.length && <Navigate to="/" replace={true} />}
      <button
        className="absolute top-0 right-0 p-2 text-lg text-gray-600"
        onClick={toggleCart}
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">Cart</h1>
      <ul className="divide-y divide-gray-200 mb-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col md:flex-row items-center py-4"
          >
            <img
              src={item.product.thumbnail}
              alt={item.title}
              className="w-16 h-16 md:w-24 md:h-24 rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2 md:mr-4">
                  Quantity:
                </span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantity(e, item)}
                  className="w-16 md:w-24 py-1 px-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="text-sm text-gray-600 mt-2 md:mt-0">
                ${discountedPrice(item.product).toFixed(2)}
              </div>
            </div>
            <button
              onClick={(e) => handleRemove(e, item.id)}
              className=" text-black mt-2 md:mt-0 md:ml-auto"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h5 className="font-semibold">Subtotal: ${totalAmount.toFixed(2)}</h5>
        <span className="text-sm text-gray-600 mt-2 md:mt-0">
          Total Items: {totalItems}
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <Link
          to="/cart"
          className="px-4 py-2 mb-2 md:mb-0 border bg-black border-gray-300  text-white hover:bg-gray-100"
        >
          View Cart
        </Link>
        <Link
          to="/checkout"
          className="px-4 py-2 mb-2 md:mb-0 bg-black text-white  hover:bg-black-600"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
