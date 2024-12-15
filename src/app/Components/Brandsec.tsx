import React from 'react';

const Brandsec = () => {
  return (
    <div className="w-[1440px] h-[355px] flex flex-col items-center justify-center gap-8">
      {/* Main Heading */}
      <h2 className="w-[366px] h-[34px] text-center text-lg font-bold">
        What makes our brand different
      </h2>

      {/* Features Section */}
      <div className="flex justify-between w-full px-16">
        {/* Feature 1 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 18h17.25M3.375 18c-.622 0-1.125-.503-1.125-1.125M3.375 18l-1.5-6.75m19.875 6.75c.622 0 1.125-.503 1.125-1.125M21.75 18l1.5-6.75m0 0L18.75 5.25m-3-1.5H8.25m-3 1.5L1.875 10.5m16.875-5.25l3.375 9m-15-3.75h7.5m-6.75 6h6" />
            </svg>
          </div>
          <h3 className="w-[199px] h-[28px] text-center text-md font-semibold">
            Next day as standard
          </h3>
          <p className="w-[266px] h-[48px] text-center text-sm">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="w-[205px] h-[28px] text-center text-md font-semibold">
            Made by true artisans
          </h3>
          <p className="w-[266px] h-[48px] text-center text-sm">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 2.25l-9 9m0 0H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V13.5a2.25 2.25 0 00-2.25-2.25H13.5m-6-9h6" />
            </svg>
          </div>
          <h3 className="w-[196px] h-[28px] text-center text-md font-semibold">
            Unbeatable prices
          </h3>
          <p className="w-[235px] h-[48px] text-center text-sm">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 15.75a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0v-3a3 3 0 00-3-3H5.25a3 3 0 00-3 3v3m19.5 0H2.25" />
            </svg>
          </div>
          <h3 className="w-[196px] h-[28px] text-center text-md font-semibold">
            Recycled packaging
          </h3>
          <p className="w-[265px] h-[48px] text-center text-sm">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brandsec;
