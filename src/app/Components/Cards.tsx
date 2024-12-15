import Image from 'next/image';

const CardSection = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Cards Section */}
      <h2 className='text-4xl'>New Ceramics</h2>
      <div className="flex flex-wrap justify-center gap-[120px] mt-[80px]">
      
        <div className="w-[217px] p-4 rounded-lg">
          <Image src="/c1.png" alt="Product Image" width={305} height={375} />
          <h2 className="text-lg font-bold mt-4">This is the layout</h2>
          <p className="mt-2">The Dandy chair</p>
          <p className="font-bold mt-1">£250</p>
        </div>

        <div className="w-[217px] p-4 rounded-lg">
          <Image src="/c2.png" alt="Product Image" width={305} height={375} />
          <h2 className="text-lg font-bold mt-4">This is the layout</h2>
          <p className="mt-2">The Dandy chair</p>
          <p className="font-bold mt-1">£250</p>
        </div>

        <div className="w-[217px] p-4 rounded-lg">
          <Image src="/c3.png" alt="Product Image" width={305} height={375} />
          <h2 className="text-lg font-bold mt-4">This is the layout</h2>
          <p className="mt-2">The Dandy chair</p>
          <p className="font-bold mt-1">£250</p>
        </div>

        <div className="w-[217px] p-4 rounded-lg">
          <Image src="/c4.png" alt="Product Image" width={305} height={375} />
          <h2 className="text-lg font-bold mt-4">This is the layout</h2>
          <p className="mt-2">The Dandy chair</p>
          <p className="font-bold mt-1">£250</p>
        </div>
      </div>

      {/* Centered Button */}
      <button className="mt-[40px] w-[170px] h-[56px] bg-[#F9F9F9] text-center text-[16px] font-[400] leading-[24px] rounded flex items-center justify-center gap-[10px]">
      View collection
      </button>
    </div>
  );
};

export default CardSection;
