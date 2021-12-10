import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="h-16 z-50 w-full text-lg sticky top-0 shadow-md">
      <div className="max-w-screen-2xl m-auto px-4 md:px-10 h-full flex items-center justify-between">
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
            <MdOutlineAccountBalanceWallet />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
