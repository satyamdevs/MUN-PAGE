import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const eventDate = new Date("2025-03-15T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#F8F6F0] text-[#062045] py-10">
      
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-[#062045] tracking-wide">
        Conference Begins In
      </h2>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div
            key={index}
            className="border-4 border-[#9a7e2f] px-10 py-8 rounded-2xl text-center w-36 md:w-44 bg-white shadow-lg backdrop-blur-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            
            <p className="text-6xl md:text-7xl font-extrabold text-[#062045] tracking-wider drop-shadow-md">
              {value}
            </p>
            <span className="text-md md:text-xl uppercase text-[#9a7e2f] font-semibold">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
