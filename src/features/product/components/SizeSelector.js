import React, { useState, useEffect } from 'react';

const sizeOptions = [
  { label: "All", value: "" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
];

export default function SizeSelector({onSizeChange }) {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

  useEffect(() => {
    // Notify parent component when the size selection changes
onSizeChange(selectedSize.value);
  }, [selectedSize,onSizeChange]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Size</h3>
      <div className="space-y-2">
        {sizeOptions.map((size, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`size-option-${index}`}
              name="size-option"
              value={size.value}
              checked={selectedSize.value === size.value}
              onChange={() => handleSizeChange(size)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor={`size-option-${index}`} className="ml-3 text-sm font-medium text-gray-600">
              {size.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
