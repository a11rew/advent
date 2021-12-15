import useOnClickOutside from "@/hooks/useOnClickOutside";
import { Fragment, useRef, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Transition } from "@headlessui/react";

const SlideOver: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const elRef = useRef(null);

  const closeSlideOver = () => {
    setShow(false);
  };

  useOnClickOutside(elRef, closeSlideOver);

  return (
    <div>
      <button onClick={() => setShow((e) => !e)}>
        <GoThreeBars />
      </button>
      <div ref={elRef}>
        <Transition
          as={Fragment}
          show={show}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 w-[80%] max-w-full flex">
            {/* <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      --> */}
            <div className="relative w-screen max-w-md">
              {/* <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
              <div className="absolute top-5 right-5 pt-4 pr-2 flex">
                <button
                  type="button"
                  onClick={closeSlideOver}
                  className="rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="h-full flex flex-col py-16 bg-white shadow-xl overflow-y-scroll">
                <div className="px-4 sm:px-6"></div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div
                      className="h-full flex flex-col place-items-end gap-5 text-xl"
                      aria-hidden="true"
                    >
                      <a>Explore</a>
                      <a>Advertise</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default SlideOver;
