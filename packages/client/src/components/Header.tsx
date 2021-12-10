import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.jpg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="h-16 flex items-center justify-between text-lg px-4 sticky top-0 shadow-md">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <Image src={Logo} alt="Advent Logo" />
        </div>
        <p className="text-xl font-bold tracking-wider">Advent</p>
      </div>
      <nav className="flex items-center gap-4">
        <a>Explore</a>
        <a>Advertise</a>
        <a className="text-2xl">
          <CgProfile />
        </a>
        <a className="text-2xl">
          <MdOutlineAccountBalanceWallet />
        </a>
      </nav>
    </header>
  );
};

export default Header;
