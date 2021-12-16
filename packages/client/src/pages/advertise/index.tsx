import { NextPage } from "next";
import Head from "next/head";

const Advertise: NextPage = () => {
  return (
    <>
      <Head>
        <title>List your MatrixWorld plot</title>
      </Head>
      <div className="pt-28 mx-[7%]">
        <h1 className="font-semibold text-4xl">Post New Listing</h1>
        <form className="text-lg flex flex-col gap-4 mt-6">
          <label>
            Name
            <input
              required
              className="w-full border rounded px-2 py-3 mt-1"
              placeholder="Plot name"
            />
          </label>
          <label>
            Plot location
            <div className="flex gap-4 mt-2">
              <label>
                X
                <input
                  required
                  type={"number"}
                  className="w-full border rounded px-2 py-3 mt-1"
                  placeholder="X coordinate"
                />
              </label>
              <label>
                Y
                <input
                  required
                  type={"number"}
                  className="w-full border rounded px-2 py-3 mt-1"
                  placeholder="Y coordinate"
                />
              </label>
            </div>
          </label>
          <label>
            Description
            <textarea
              required
              className="w-full border rounded px-2 py-3 mt-1"
              placeholder="Describe your plot"
            />
          </label>
          <div>
            <button
              type="submit"
              className="px-8 py-2 bg-primaryGreen text-white rounded-md hover:bg-opacity-70 transition-all duration-200 ease-in-out"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Advertise;
