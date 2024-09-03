import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './nuis.css'; // Include your custom styles
import './style.css';

// Import necessary libraries
import noUiSlider from 'nouislider';

const PriceSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      // Initialize noUiSlider
      noUiSlider.create(sliderRef.current, {
        start: [40, 110],
        snap: false,
        connect: true,
        step: 1,
        range: {
          min: 0,
          max: 250,
        },
      });

      const snapValues = [
        document.getElementById('slider-snap-value-lower'),
        document.getElementById('slider-snap-value-upper'),
      ];
      const inputValues = [
        document.getElementById('slider-snap-input-lower'),
        document.getElementById('slider-snap-input-upper'),
      ];

      const slider = sliderRef.current.noUiSlider;

      slider.on('update', (values, handle) => {
        snapValues[handle].innerHTML = values[handle];
      });

      slider.on('change', (values, handle) => {
        inputValues[handle].value = values[handle];
      });

      // Cleanup function to destroy the slider
      return () => {
        if (slider) {
          slider.destroy();
        }
      };
    }
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar col-xl-3 col-lg-4 pe-xl-5 order-lg-1">
        {/* Sidebar Block */}
        <div className="sidebar-block px-3 px-lg-0">
          <a
            className="d-lg-none block-toggler"
            data-bs-toggle="collapse"
            href="#priceFilterMenu"
            aria-expanded="false"
            aria-controls="priceFilterMenu"
          >
            Filter by price
            <span className="block-toggler-icon"></span>
          </a>
          <div className="expand-lg collapse" id="priceFilterMenu">
            <h5 className="sidebar-heading d-none d-lg-block">Price</h5>
            <div className="mt-4 mt-lg-0" id="slider-snap" ref={sliderRef}></div>
            <div className="nouislider-values">
              <div className="min">
                From $<span id="slider-snap-value-lower"></span>
              </div>
              <div className="max">
                To $<span id="slider-snap-value-upper"></span>
              </div>
              <input
                className="slider-snap-input"
                type="hidden"
                name="pricefrom"
                id="slider-snap-input-lower"
                value="40"
              />
              <input
                className="slider-snap-input"
                type="hidden"
                name="priceto"
                id="slider-snap-input-upper"
                value="110"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Sidebar end */}
    </div>
  );
};

export default PriceSlider;
