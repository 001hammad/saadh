import Image from 'next/image';

const Card2sec = () => {
  return (
    <section className="py-8">
      {/* Heading */}
      <h2 className="text-3xl font-semibold md:ml-[120px] text-[#2A254B] mb-8">Our Popular Products</h2>

      {/* Card Images and Text */}
      <div className="flex justify-start space-x-8 md:ml-[120px]">
        {/* First Image */}
        <div className="w-[600px]">
          <Image src="/c5.png" alt="Image 1" width={600} height={375} />
          <div className="ml-4">
            <p className="font-semibold text-[20px] leading-[28px] text-[#2A254B] mt-4">
              The Popular Suede Sofa
            </p>
            <p className="font-normal text-[18px] leading-[27px] text-[#2A254B] mt-2">
              £980
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="w-[305px]">
          <Image src="/c1.png" alt="Image 2" width={305} height={375} />
          <div className="ml-4">
            <p className="font-semibold text-[20px] leading-[28px] text-[#2A254B] mt-4">
              The Popular Suede Sofa
            </p>
            <p className="font-normal text-[18px] leading-[27px] text-[#2A254B] mt-2">
              £980
            </p>
          </div>
        </div>

        {/* Third Image */}
        <div className="w-[305px]">
          <Image src="/c1.png" alt="Image 3" width={305} height={375} />
          <div className="ml-4">
            <p className="font-semibold text-[20px] leading-[28px] text-[#2A254B] mt-4">
              The Popular Suede Sofa
            </p>
            <p className="font-normal text-[18px] leading-[27px] text-[#2A254B] mt-2">
              £980
            </p>
          </div>
        </div>
      </div>
      {/* Centered Button */}
      <button className="mt-[40px] w-[170px]  h-[56px] bg-[#F9F9F9] md:ml-[660px] text-center text-[16px] font-[400] leading-[24px] rounded flex items-center justify-center gap-[10px]">
      View collection
      </button>
    </section>
  );
};

export default Card2sec;
