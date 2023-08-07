"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { differenceInDays } from "date-fns";

import useSearchModal from "@/app/hooks/useSearchModal";
import useLocation from "@/app/hooks/useLocation";

import { BiSearch, BiFilterAlt } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FiMapPin, FiCalendar } from "react-icons/fi";

const Booking = () => {
  const searchModal = useSearchModal();

  const params = useSearchParams();
  const { getByValue } = useLocation();

  const locationValue = params?.get("location");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.navn;
    }

    return "Indsæt sted";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      let diff = differenceInDays(start, end);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Tjek Ind - Tjek Ud";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Gæster";
  }, [guestCount]);

  return (
    <div className="bg-sky-400 text-gray-600 w-full md:w-auto py-5 sm:pt-5 pt-0 shadow-md relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none"
        style={{
          background: `url('./images/Vector 7.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="flex items-center sm:px-2 lg:px-4 pt-5 text-lg divide-x divide-gray-400 relative z-10 mx-3 sm:mx-0"
        onClick={searchModal.onOpen}
      >
        <div className="flex items-center justify-center flex-grow transition-all h-16 rounded-r-lg rounded-full bg-gray-100 px-5 hover:bg-white hover:text-sky-400 shadow-sm hover:shadow-md cursor-pointer">
          <FiMapPin />
          <div className="text-base font-semibold ml-2">
            {locationLabel}
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow h-16 bg-gray-100 hover:bg-white hover:text-sky-400 px-3 shadow-sm hover:shadow-md cursor-pointer">
          <FiCalendar />
          <div className="hidden sm:block text-base font-semibold ml-2 pl-2">
            {durationLabel}
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow transition-all h-16 rounded-l-lg rounded-full bg-gray-100 hover:bg-white hover:text-sky-400 px-3 shadow-sm hover:shadow-md cursor-pointer">
          <BsPeople />
          <div className="hidden sm:block text-base font-semibold ml-2">
            {guestLabel}
          </div>
          <button className="flex justify-center items-center bg-orange-300 text-white hover:bg-orange-400 rounded-full p-3 sm:hidden ml-auto">
          <BiSearch size={24} />
        </button>
        </div>

        <button className="hidden justify-center items-center bg-orange-300 text-white hover:bg-orange-400 rounded-full p-3 m-3 sm:flex">
          <BiSearch size={24} />
        </button>
      </div>

      <div className="flex flex-row mx-4 mt-4">
        <div className="flex justify-evenly items-center bg-orange-300 text-white hover:bg-orange-400 rounded-full mr-4 px-1 sm:px-3 py-1 sm:py-2 cursor-pointer relative z-10">
          <BiFilterAlt />
          <div className="hidden sm:block ml-2">Filtre</div>
        </div>

        <div className="bg-orange-300 text-white hover:bg-orange-400 rounded-full mr-4 px-1 sm:px-3 py-1 sm:py-2 cursor-pointer relative z-10">
          Populære
        </div>

        <div className="bg-orange-300 text-white hover:bg-orange-400 rounded-full mr-4 px-1 sm:px-3 py-1 sm:py-2 cursor-pointer relative z-10">
          Lejepris
        </div>

        <div className="bg-orange-300 text-white hover:bg-orange-400 rounded-full mr-4 px-1 sm:px-3 py-1 sm:py-2 cursor-pointer relative z-10">
          Værelser og rum
        </div>
      </div>
    </div>
  );
};

export default Booking;
