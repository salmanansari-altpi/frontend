import React, { useState, useEffect } from 'react';

const Deal = () => {
  // State variables to store the remaining time for the countdown
  const [countdown, setCountdown] = useState({
    days: 14,
    hours: 14,
    minutes: 52,
    seconds: 44
  });

  // Function to update the countdown timer
  const updateCountdown = () => {
    setCountdown(prevCountdown => {
      // Decrease seconds
      let updatedSeconds = prevCountdown.seconds - 1;
      let updatedMinutes = prevCountdown.minutes;
      let updatedHours = prevCountdown.hours;
      let updatedDays = prevCountdown.days;

      // Check if seconds reach 0 and update other units accordingly
      if (updatedSeconds < 0) {
        updatedSeconds = 59;
        updatedMinutes -= 1;
      }
      if (updatedMinutes < 0) {
        updatedMinutes = 59;
        updatedHours -= 1;
      }
      if (updatedHours < 0) {
        updatedHours = 23;
        updatedDays -= 1;
      }

      return {
        days: updatedDays,
        hours: updatedHours,
        minutes: updatedMinutes,
        seconds: updatedSeconds
      };
    });
  };

  useEffect(() => {
    // Update the countdown timer every second
    const timer = setInterval(() => {
      updateCountdown();
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-cover bg-center min-h-screen flex items-center" style={{ backgroundImage: "url('https://demo.bootstrapious.com/varkala/2-1/img/photo/deal-plain.jpg')" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 xl:w-1/3">
            <p className="text-red-600 text-sm font-bold mb-2">Deal of the week</p>
            <h3 className="text-3xl font-bold mb-2">Oversized denim jacket</h3>
            <p className="text-gray-500 text-lg mb-4">
              <del className="mr-3">$129.00</del><span>$79.00</span>
            </p>
            <p className="mb-4">
              <span className="bg-red-600 text-white py-2 px-4 rounded">$50 off</span>
            </p>
            <div className="bg-white p-5 shadow-lg mb-4">
              <div className="flex justify-between">
                <div className="text-center">
                  <h6 className="text-2xl font-bold">{countdown.days}</h6>
                  <span className="text-gray-500">days</span>
                </div>
                <div className="text-center">
                  <h6 className="text-2xl font-bold">{countdown.hours}</h6>
                  <span className="text-gray-500">hours</span>
                </div>
                <div className="text-center">
                  <h6 className="text-2xl font-bold">{countdown.minutes}</h6>
                  <span className="text-gray-500">minutes</span>
                </div>
                <div className="text-center">
                  <h6 className="text-2xl font-bold">{countdown.seconds}</h6>
                  <span className="text-gray-500">seconds</span>
                </div>
              </div>
            </div>
            <p>
              <a className="border border-gray-800 text-gray-800 hover:text-white hover:bg-black py-2 px-4 inline-block" href="#">Shop now</a>
            </p>
          </div>
          <div className="lg:w-1/2 xl:w-2/3 hidden lg:block">
            {/* Additional content can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
