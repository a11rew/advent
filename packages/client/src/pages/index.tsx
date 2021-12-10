import type { NextPage } from "next";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { Storage__factory } from "@/typechain";
import { hasEthereum } from "@/utils";
import Head from "next/head";

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
      <div className="text-red-500">Yo yo</div>
    </div>
  );
};

export default Home;
