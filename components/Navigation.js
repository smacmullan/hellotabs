import Link from "next/link";
import { useState } from "react";
import neighborhoods from "../lib/neighborhoods";

export default function Navigation() {
  let [showNeighborhoods, setShowNeighborhoods] = useState(false);

  return (
    <div>
      <div className='flex w-full justify-center'>
        <button
          className='m-1 w-3/4 bg-purple-500 text-white font-bold py-2 px-4 rounded dark:bg-purple-800'
          onClick={() => setShowNeighborhoods(!showNeighborhoods)}
        >
          {showNeighborhoods ? "Hide Neighborhoods" : "Find by Neighborhood"}
        </button>
      </div>
      <div
        className={
          showNeighborhoods
            ? "block flex w-full justify-center flex-wrap"
            : "hidden"
        }
      >
        <h3 className='m-3'>What neighborhood are you going to?</h3>
        {neighborhoods.sort().map((neighborhood) => (
          <Link href={`/neighborhood/${neighborhood}`} key={neighborhood}>
            <button className='m-1 bg-purple-500 text-white font-bold py-2 px-4 rounded dark:bg-purple-800'>
              {neighborhood}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
