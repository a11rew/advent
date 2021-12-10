import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { Storage__factory } from "@/typechain";
import { hasEthereum } from "@/utils";
import Head from "next/head";
import WorldImage from "../assets/world.png";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Home: NextPage = () => {
  const [currentStore, setCurrentStore] = useState("");
  const [inputState, setInputState] = useState("");
  const [status, setStatus] = useState<"loading..." | "complete">("complete");
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const setStore = async () => {
    if (hasEthereum()) {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const storageContract = Storage__factory.connect(contractAddress, signer);
      const tx = await storageContract.set(inputState);
      setStatus("loading...");
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        setCurrentStore(inputState);
        setInputState("");
      }
      setStatus("complete");
    }
  };
  async function fetchStore() {
    if (hasEthereum()) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const storageContract = Storage__factory.connect(
        contractAddress,
        provider
      );
      try {
        const data = await storageContract.retrieve();
        setCurrentStore(data);
      } catch (err) {
        console.log("EfetchStorerror: ", err);
      }
    }
  }
  const memoizedFetchStore = useCallback(async () => {
    let response = await fetchStore();
  }, []);

  useEffect(() => {
    memoizedFetchStore();
  }, [memoizedFetchStore]);

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
        <div className="">
          <Image
            src={WorldImage}
            className="bg-white"
            alt="Matrix World Globe"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
