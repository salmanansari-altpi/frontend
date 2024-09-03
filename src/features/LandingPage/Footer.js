import React, { useState } from 'react';

const Footer = () => {
  const [isMenu0Open, setIsMenu0Open] = useState(false);
  const [isMenu1Open, setIsMenu1Open] = useState(false);
  const [isMenu2Open, setIsMenu2Open] = useState(false);

  return (
    <div className="py-6 text-gray-500">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 lg:pr-5 lg:mb-0 mb-5">
            <h6 className="text-dark text-lg tracking-wide mb-4">Be in touch</h6>
            <p className="text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
            <form action="#" id="newsletter-form">
              <div className="flex mb-3 border-b border-gray-300">
                <input className="form-control border-none w-full py-2 px-3 bg-transparent focus:outline-none" type="email" placeholder="Your Email Address" aria-label="Your Email Address" />
                <button className="btn py-0 text-gray-700" type="button">
                  <svg className="w-8 h-8">
                    <use xlinkHref="#envelope-1"></use>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 mb-4 lg:mb-0">
                <a className="block lg:hidden my-3 cursor-pointer" onClick={() => setIsMenu0Open(!isMenu0Open)}>
                  Shop <span className="block-toggler-icon"></span>
                </a>
                <div className={`lg:block ${isMenu0Open ? 'block' : 'hidden'}`}>
                  <h6 className="text-dark text-lg tracking-wide mb-4 hidden lg:block">Shop</h6>
                  <ul className="list-none text-sm pt-2 lg:pt-0">
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">For Women</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">For Men</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Stores</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Our Blog</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Shop</a></li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-4/12 mb-4 lg:mb-0">
                <a className="block lg:hidden my-3 cursor-pointer" onClick={() => setIsMenu1Open(!isMenu1Open)}>
                  Company <span className="block-toggler-icon"></span>
                </a>
                <div className={`lg:block ${isMenu1Open ? 'block' : 'hidden'}`}>
                  <h6 className="text-dark text-lg tracking-wide mb-4 hidden lg:block">Company</h6>
                  <ul className="list-none text-sm pt-2 lg:pt-0">
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Login</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Register</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Wishlist</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Our Products</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Checkouts</a></li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-4/12 mb-4 lg:mb-0">
                <a className="block lg:hidden my-3 cursor-pointer" onClick={() => setIsMenu2Open(!isMenu2Open)}>
                  Your account <span className="block-toggler-icon"></span>
                </a>
                <div className={`lg:block ${isMenu2Open ? 'block' : 'hidden'}`}>
                  <h6 className="text-dark text-lg tracking-wide mb-4 hidden lg:block">Your account</h6>
                  <ul className="list-none text-sm pt-2 lg:pt-0">
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Login</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Register</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Wishlist</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Our Products</a></li>
                    <li className="mb-2"><a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Checkouts</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 font-light text-gray-500">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center text-sm text-gray-500">
          <div className="w-full lg:w-1/3 text-center lg:text-left mb-2 lg:mb-0">
            <p className="mb-0">&copy; 2022, Your company. All rights reserved.</p>
          </div>
          <div className="w-full lg:w-2/3">
            <ul className="list-none mb-0 mt-2 md:mt-0 text-center lg:text-right">
              <li className="inline-block mx-2">
                <a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Terms &amp; Conditions</a>
              </li>
              <li className="inline-block mx-2">
                <a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Privacy &amp; cookies</a>
              </li>
              <li className="inline-block mx-2">
                <a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Accessibility</a>
              </li>
              <li className="inline-block mx-2">
                <a className="text-gray-500 hover:text-black transition-colors duration-200" href="#">Customer Data Promise</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
