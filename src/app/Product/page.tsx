import Image from "next/image";
import CardSection from "../Components/Cards";
import Brandsec from "../Components/Brandsec";
import Signup from "../Components/Signup";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function ProductPage() {
  return ( <div> 
    <Header/>
    
    <div className="flex w-[1440px] md:mt-[50px] h-[759px] p-[0px_55px_0px_0px] gap-0 bg-white">
      {/* Left Image */}
      <div className="w-[721px] h-[759px]">
        <Image
          src="/p1.png"
          alt="Dandy Chair"
          width={721}
          height={759}
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-4 p-6">
        {/* Heading */}
        <h1 className="text-2xl font-bold w-[281px] h-[44px]">
          The Dandy Chair
        </h1>
        {/* Price */}
        <p className="text-xl text-gray-700 w-[59px] h-[32px]">£250</p>
        {/* Description Heading */}
        <h2 className="text-lg font-semibold w-[88px] h-[20px]">
          Description
        </h2>
        {/* Description */}
        <p className="text-gray-600 w-[498px] h-[66px]">
          A timeless design, with premium materials features as one of our most
          popular and iconic pieces. The dandy chair is perfect for any stylish
          living space with beech legs and lambskin leather upholstery.
        </p>
        {/* Features */}
        <ul className="list-disc ml-5 text-gray-600 w-[498px] h-[66px]">
          <li>Premium material</li>
          <li>Handmade upholstery</li>
          <li>Quality timeless classic</li>
        </ul>
        {/* Dimensions Heading */}
        <h2 className="text-lg font-semibold w-[89px] h-[20px]">
          Dimensions
        </h2>
        {/* Dimensions */}
        <div className="flex gap-[57px] w-auto h-auto">
          <div>
            <p className="text-gray-600">Height</p>
            <p className="font-bold">110cm</p>
          </div>
          <div>
            <p className="text-gray-600">Width</p>
            <p className="font-bold">75cm</p>
          </div>
          <div>
            <p className="text-gray-600">Depth</p>
            <p className="font-bold">50cm</p>
          </div>
        </div>
        {/* Amount Selector and Add to Cart */}
        <div className="flex justify-between items-center w-full mt-4">
          {/* Amount */}
          <div className="flex items-center gap-2">
            <label htmlFor="quantity" className="text-gray-600">
              Amount
            </label>
            <input
              id="quantity"
              type="number"
              defaultValue={1}
              className="w-16 border rounded-md text-center"
              min={1}
            />
          </div>
          {/* Add to Cart Button */}
          <button className="bg-[#2A254B] text-white px-8 py-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <CardSection/>
    <Brandsec/>
    <Signup/>
    <Footer/>
    </div>
  );
}
