import React from 'react';


const Categories = () => {
  return (
    <div className=" relative">
      <div className="container mx-auto py-6">
        <div className="flex flex-wrap -m-5">
          <div className="w-full sm:w-1/2 p-5">
            <div className="relative card-scale shadow-none border-none text-white hover:bg-light text-center overflow-hidden group">
              <img className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110" src="https://demo.bootstrapious.com/varkala/2-1/img/product/category-women.jpg" alt="Women Category" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-full py-3">
                  <h2 className="text-5xl font-bold mb-0">Women</h2>
                  <a className="absolute inset-0" href="https://demo.bootstrapious.com/varkala/2-1/category-full.html" aria-label="See Women Category"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-5">
            <div className="relative card-scale shadow-none border-none text-white hover:bg-light text-center overflow-hidden group">
              <img className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110" src="https://demo.bootstrapious.com/varkala/2-1/img/product/category-men.jpg" alt="Men Category" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-full py-3">
                  <h2 className="text-5xl font-bold mb-0">Men</h2>
                  <a className="absolute inset-0" href="https://demo.bootstrapious.com/varkala/2-1/category-full.html" aria-label="See Men Category"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );





}

export default Categories;
