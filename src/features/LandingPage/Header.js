import logo from "./YUNICA_logo.png";
// Make sure you have heroicons installed
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline"; // Importing icons from Heroicons v2
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import { selectItems } from "../cart/cartSlice";
import { selectLoggedInUser } from "../auth/authSlice";

const userNavigation = [
  { name: "My Profile", link: "/profile" },
  { name: "My Orders", link: "/orders" },
  { name: "Sign out", link: "/logout" },
];

const Header = ({ sortProductName, filterBySize }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState();
  // Get the items in the cart from the Redux store
  const items = useSelector(selectItems);
  // Get the logged-in user details from the Redux store
  const user = useSelector(selectLoggedInUser);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow mx-4 items-center bg-gray-100 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search Product..."
            onChange={(e) => {
              sortProductName(e.target.value);
              setSearch(e.target.value);
            }}
            className="w-full px-4 py-2 border-none focus:outline-none bg-transparent"
          />
          <select className="bg-transparent px-2 py-2 focus:outline-none border-l border-gray-300">
            <option>All Categories</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-full ml-2">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <HeartIcon className="h-6 w-6 text-gray-700" />
            <span className="absolute top-0 right-0 inline-block w-5 h-5 text-xs text-center text-white rounded-full"></span>
          </div>
          <div className="relative">
            <button onClick={toggleCart}>
              <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 inline-block w-5 h-5 text-l text-center text-black rounded-full">
                  {items.length}
                </span>
              )}
            </button>
          </div>

          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                <span className="sr-only">Open user menu</span>
                <UserIcon className="h-6 w-6 text-gray-700" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        to={item.link}
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100" : ""
                        } text-gray-700`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-customblue-100">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="text-lg font-medium flex items-center">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              All Categories
            </button>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Homepage
            </Link>
            {userData && userData.role !== "user" ? (
              <>
                <Link to="/admin" className="text-gray-700 hover:text-gray-900">
                  Admin
                </Link>
                <Link to="/analysis" className="text-gray-700 hover:text-gray-900">
                  Analysis
                </Link>
              </>
            ) : null}
            <Link to="/shop" className="text-gray-700 hover:text-gray-900">
              Shop
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900">
                Pages
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link
                  to="/product-details"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Product Details
                </Link>
                <Link
                  to="/shop-cart"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Shop Cart
                </Link>
                <Link
                  to="/checkout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Checkout
                </Link>
                <Link
                  to="/blog-details"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Blog Details
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <Link
            to="/become-a-seller"
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Become a Seller
          </Link>
        </div>
      </div>
      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={toggleCart}
          ></div>
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
            <Cart toggleCart={toggleCart} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
