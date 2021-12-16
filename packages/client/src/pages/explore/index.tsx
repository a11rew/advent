import { NextPage } from "next";
import ListingCard from "./ListingCard";

const Explore: NextPage = () => {
  return (
    <div className="">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(8)].map((idx) => (
          <div key={idx} className="col-span-1">
            <ListingCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
