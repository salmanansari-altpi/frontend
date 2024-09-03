import React, { useState, useEffect } from 'react';

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Rs 100 - Rs300", min: 100, max: 300 },
  { label: "Rs300 - Rs500", min: 300, max: 500 },
  { label: "Rs500 - Rs1000", min: 500, max: 1000 },
  { label: "Rs1000+ ", min: 1000, max: Infinity },
];

export default function PriceRangeSlider({ onPriceChange }) {
  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);

  useEffect(() => {
    // Notify parent component when the price range changes
    onPriceChange({ min: selectedRange.min, max: selectedRange.max });
  }, [selectedRange, onPriceChange]);

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Price Range</h3>
      <div className="space-y-2">
        {priceRanges.map((range, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`price-range-${index}`}
              name="price-range"
              value={range.label}
              checked={selectedRange.label === range.label}
              onChange={() => handleRangeChange(range)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor={`price-range-${index}`} className="ml-3 text-sm font-medium text-gray-600">
              {range.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
