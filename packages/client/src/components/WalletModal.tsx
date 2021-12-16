import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Image from "next/image";
import MetaMaskLogo from "../assets/metamask.png";
import WalletConnectLogo from "../assets/WalletConnect.png";

const WalletModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal}>
        <MdOutlineAccountBalanceWallet />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-25"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Connect Wallet
                </Dialog.Title>
                <div className="mt-2 flex flex-col">
                  <div className="flex flex-col items-center py-2 rounded-lg transition-colors ease-in-out duration-200 hover:bg-[#f7f7f7]">
                    <div className="w-20">
                      <Image src={MetaMaskLogo} alt="Metamask logo" />
                    </div>
                    <p className="font-semibold">MetaMask</p>
                    <p className="opacity-30">
                      Connect to your MetaMask wallet
                    </p>
                  </div>
                  <hr className="my-2" />
                  <div className="flex flex-col items-center py-2 rounded-lg transition-colors ease-in-out duration-200 hover:bg-[#f7f7f7]">
                    <div className="w-20">
                      <Image src={WalletConnectLogo} alt="WalletConnectLogo" />
                    </div>
                    <p className="font-semibold">WalletConnect</p>
                    <p className="opacity-30">
                      Scan with WalletConnect to connect
                    </p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default WalletModal;
