/* eslint-disable @next/next/no-img-element */
import { SiEthereum } from "react-icons/si";
import Link from "next/link";

const ListingCard = (): JSX.Element => {
  return (
    <Link passHref href={"/listing/2"}>
      <div className="border rounded-xl hover:shadow-md hover:scale-[1.01] transition-all ease-in-out duration-200">
        <div>
          <img
            className="rounded-t-xl"
            src={
              "https://lh3.googleusercontent.com/8s7ZsdSNTN2-3kwR-jJsAjltBA8zI7BMeyUTfgaXYfw55f-KpkWvM8iC7dY1HDfby3NIiHISTW8eauhsR4GfywvgRXfsY1h485_p6h8=w546"
            }
            alt="Plot image"
          />
        </div>
        <div className="flex justify-between p-3 text-xs md:text-sm ">
          <div>
            <p className="">Matrix Land (51, 59)</p>
            <p>Tenure: 3 months</p>
          </div>

          <div>
            <p className="">Price</p>
            <div className="flex items-baseline">
              <SiEthereum className="" />
              <span>0.3</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
