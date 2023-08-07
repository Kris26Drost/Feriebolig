"use client";

import { getAllData } from "../getAllData";
import Link from "next/link";

export default async function ListeCard() {
  const data = await getAllData();

  return (
    <div className="flex flex-col sm:flex-row justify-center">
      {data &&
        data.slice(0, 4).map((item: any, index: number) => (
          
          <div
            className="bg-white w-full md:w-1/2 lg:w-1/4 rounded overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer my-10 mx-0 sm:mx-5"
            key={index}
          >
            <Link href={{pathname: '/details', query:{id:item.id}}}>
              
            <div className="max-h-36 h-full overflow-hidden">
            <img
              className="object-cover w-full"
              src={item.photos[0].photoUrl}
              alt=""
            />
            </div>
           
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">
                  {item.name}
                </div>
                <p className="text-gray-700 text-base">
                  {item.texts[0]?.text.split(".")[0]}
                </p>
              </div>

              <button className="bg-orange-500 rounded-full text-white justify-center items-center px-3 py-2 m-4 mt-2 hover:bg-orange-300 hover:shadow-lg">
                Læs mere
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
}
