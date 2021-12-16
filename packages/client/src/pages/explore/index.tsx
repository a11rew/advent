import { NextPage } from "next";
import Head from "next/head";
import ListingCard from "./ListingCard";

const Explore: NextPage = () => {
  return (
    <>
      <Head>
        <title>Explore</title>
      </Head>
      <div className="pt-20">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[...Array(8)].map((idx) => (
            <div key={idx} className="col-span-1">
              <ListingCard />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
