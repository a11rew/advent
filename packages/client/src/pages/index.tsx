import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import WorldImage from "../assets/world.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Advent</title>
      </Head>
      <div className="flex flex-col-reverse md:flex-row p-4 max-w-screen-2xl justify-between m-auto">
        <div className="md:w-1/2 flex flex-col justify-center gap-4 text-lg p-4">
          <div className="flex flex-col justify-center gap-4 text-lg p-4">
            <h1 className="text-2xl font-bold">
              Discover and sell advertising spaces on MatrixWorld
            </h1>
            <p>
              Advent is a marketplace for trading and listing ad spaces in
              MatrixWorld.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-2 bg-primaryGreen text-white rounded-md hover:bg-opacity-70 transition-all duration-200 ease-in-out">
                Explore
              </button>
              <button className="px-8 py-2 bg-white border border-primaryGreen rounded-md transition-all duration-200 ease-in-out hover:shadow-lg">
                Advertise
              </button>
            </div>
          </div>
        </div>
        <div className="p-5">
          <AnimatedGlobe
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 200,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const AnimatedGlobe = motion(
  React.forwardRef((props, ref) => (
    <div ref={ref as any} {...props}>
      <Image draggable="false" src={WorldImage} alt="Matrix World Globe" />
    </div>
  ))
);

export default Home;
