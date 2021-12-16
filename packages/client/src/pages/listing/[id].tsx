/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";

const Listing = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="max-w-screen-xl m-auto h-screen flex items-center">
      <div className="w-1/2">
        <img
          className="rounded-lg"
          src="https://lh3.googleusercontent.com/8s7ZsdSNTN2-3kwR-jJsAjltBA8zI7BMeyUTfgaXYfw55f-KpkWvM8iC7dY1HDfby3NIiHISTW8eauhsR4GfywvgRXfsY1h485_p6h8=w546"
          alt="Image of listed plot"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-8">
        <div>
          <h2 className="text-xl">Matrix World</h2>
          <h1 className="text-3xl">Matrix Land (95, 05)</h1>
          <div className="flex text-lg">
            <p>Owned by 0923...4234x</p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg p-4 gap-4">
          <div className="flex items-center gap-1">
            <AiOutlineClockCircle />
            <p>Sale ends on Oct 25th 2022 at 5:11pm</p>
          </div>

          <div>
            <p className="text-lg pl-1 mb-1">Tenure</p>
            <div className="flex text-2xl pl-1">
              <p>2 months</p>
            </div>
          </div>

          <div>
            <p className="text-lg pl-1 mb-1">Price</p>
            <div className="flex text-4xl">
              <SiEthereum className="text-4xl" />
              <p>10</p>
            </div>
          </div>

          <div className="flex">
            <button className="px-8 py-2 bg-primaryGreen text-white rounded-md hover:bg-opacity-70 transition-all duration-200 ease-in-out">
              Purchase
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
