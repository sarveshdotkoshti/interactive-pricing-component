import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Home = () => {
  const [billing, setBilling] = useState("month"); // 'monthly' or 'yearly'
  const [pageViews, setPageViews] = useState(500000);
  const [price, setPrice] = useState(24);
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState(50); // Default value: 50%

  // Ensure this component runs only on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBillingToggle = () => {
    setIsChecked(!isChecked);
    setBilling(billing === "month" ? "year" : "month");
    setPrice(billing === "month" ? price * 0.75 : price / 0.75); // Apply 25% discount
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const views = parseInt(e.target.value);
    setPageViews(views);
    const range = views/1000000 * 100;
    setValue(range);

    // Adjust pricing based on page views
    if (views === 10000) setPrice(8);
    else if (views === 50000) setPrice(12);
    else if (views === 100000) setPrice(16);
    else if (views === 500000) setPrice(24);
    else if (views === 1000000) setPrice(36);
  };

  // Prevent rendering until mounted to fix hydration mismatch
  if (!isMounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[hsl(230, 100%, 99%)] dark:bg-gray-900 dark:text-white">
      <DarkModeToggle/>
      <div className="sm:w-9/12 h-3/6 flex flex-col justify-center items-center sm:py-20 py-0 bg-[url('/bg-pattern.svg')] bg-contain  bg-no-repeat dark:bg-none
      border">
      <div className="bg-[url('/pattern-circles.svg')] bg-contain bg-center bg-no-repeat py-5 sm:py-10 mb-10">
      <h1 className="sm:text-3xl sm:font-bold text-xl font-light tracking-wider text-center mb-4 top-50 ">Simple, traffic-based pricing</h1>
        <p className="text-center text-gray-500 px-5">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
      <div className="sm:w-8/12 w-11/12 text-gray-500 max-w-xl bg-white py-10 rounded-lg shadow-lg dark:bg-gray-800">

        {/* Slider */}
        <div className="px-10 flex flex-col items-center">
          <div className="flex gap-20 items-center">
          <span className="uppercase tracking-widest text-xs font-semibold">{pageViews/1000}K Pageviews</span>
          <span className="max-sm:hidden"> <span className="text-black text-3xl font-black dark:text-gray-500">${price.toFixed(2)}</span> / {billing}</span>
          </div>
          
        <input
          type="range"
          min="10000"
          max="1000000"
          step="10000"
          value={pageViews}
          onChange={handleSliderChange}
          className="range-slider w-11/12 my-10 max-w-md h-2 rounded-lg"
          style={{
            background: `linear-gradient(to right, hsl(174, 86%, 45%) ${value}%, #e5e7eb ${value}%)`,
          }}
        />
        

        <span className="sm:hidden mb-10"> <span className="text-black text-3xl font-black dark:text-gray-500">${price.toFixed(2)}</span> / {billing}</span>     
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-end items-center gap-5 mb-10 px-10 max-sm:px-5">
          <span className="text-sm">Monthly Billing</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              peer-checked={isChecked}
              onClick={handleBillingToggle}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-600 peer-focus:ring-blue-00 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[hsl(174,77%,80%)]"></div>
          </label>
          <span className="text-sm">
            Yearly Billing <span className="text-[hsl(15,100%,70%)] text-xs bg-red-100 rounded-lg p-1">-25% </span>
          </span>
        </div>
        <hr/>
        <div className="sm:flex items-center justify-between p- px-10">
          {/* Features */}
        <ul className="sm:w-1/2 w-full mt-6 space-y-3 text-xs font-bold flex flex-col items-center sm:items-start pl-5">
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✔</span>
            <span>Unlimited websites</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✔</span>
            <span>100% data ownership</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✔</span>
            <span>Email reports</span>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="flex flex-col items-center">
          <button className="mt-6 text-xs font-bold bg-black text-[hsl(226, 100%, 87%)] p-3 px-7 rounded-full dark:bg-gray-200 ">
          Start my trial
        </button>
        </div>
        
        </div>     
      </div>
      </div>
      
    </div>
  );
};

export default Home;
