import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-200 h-40 w-full p-10">
      <div className="flex justify-around text-center">
        <div className="max-w-xs">
          <h3 className="text-sm font-bold">Free shipping & return</h3>
          <p className="text-muted">Free Shipping over <span className="text-muted">$300</span></p>
        </div>
        <div className="max-w-xs">
          <h3 className="text-sm font-bold">Money back guarantee</h3>
          <p className="text-muted"><span className="text-muted">30</span> Days Money Back Guarantee</p>
        </div>
        <div className="max-w-xs">
          <h3 className="text-sm font-bold">Best prices</h3>
          <p className="text-muted">Always the best prices</p>
        </div>
        <div className="max-w-xs">
          <h3 className="text-sm font-bold"><span className="text-sm">020-800-456-747</span></h3>
          <p className="text-muted">24/7 Available Support</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
