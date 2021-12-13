import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import WalletPopover from "./WalletPopover";

const Header: React.FC = (): JSX.Element => {
  const [animate, setAnimate] = useState(false);

  const onScroll = () => {
    var y = window.scrollY;
    console.log("scroll", y);
    console.log(animate);

    if (y > 50) {
      setAnimate(true);
    } else setAnimate(false);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", onScroll);
  }

  return (
    <header
      className={`h-16 z-50 w-full text-lg fixed top-0 transition-all duration-500 ease-in-out
      ${animate && "shadow-md bg-white"}
    `}
    >
      <div className="max-w-[1600px] m-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image src={Logo} alt="Advent Logo" />
          </div>
          <p className="text-xl font-bold tracking-wider">Advent</p>
        </div>
        <nav className="md:flex items-center gap-4 hidden">
          <a>Explore</a>
          <a>Advertise</a>
          <a className="text-2xl">
            <CgProfile />
          </a>
          <a className="text-2xl">
            <WalletPopover />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
