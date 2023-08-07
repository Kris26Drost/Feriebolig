"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { differenceInDays } from "date-fns";

import useSearchModal from "@/app/hooks/useSearchModal";
import useLocation from "@/app/hooks/useLocation";

import { BiSearch } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FiMapPin, FiCalendar } from "react-icons/fi";


const Search = () => {
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

    return 'Indsæt by';
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

    return "Tjek Ind - Tjek Ud"
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {  
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Gæster";
  }, [guestCount]);

  return (
<div className="w-auto mx-auto">
  <div onClick={searchModal.onOpen} 
  className="bg-white border-[1px] top-1 w-full md:w-auto py-4 rounded-full shadow-md">
    <div 
    className="flex items-center justify-evenly px-4 sm:px-4 text-lg divide-x divide-gray-400">
      <div 
      className="flex items-center flex-grow transition-all h-24 rounded-r-lg rounded-full bg-gray-200 px-5 hover:bg-gray-100 hover:text-sky-400 shadow-sm hover:shadow-md cursor-pointer">
        <FiMapPin />
        <div className="text-base font-semibold ml-2"> 
        {locationLabel}
        </div>
      </div>

      <div 
      className="flex items-center flex-grow h-24 bg-gray-200 hover:bg-gray-100 hover:text-sky-400 px-3 shadow-sm hover:shadow-md cursor-pointer">
        <FiCalendar />
        <div className="hidden sm:block text-base font-semibold ml-2 pl-2">
          {durationLabel}
        </div>
      </div>

      <div 
      className="flex items-center flex-grow transition-all h-24 bg-gray-200 hover:bg-gray-100 hover:text-sky-400 px-3 shadow-sm hover:shadow-md cursor-pointer">
        <BsPeople />
        <div className="hidden sm:block text-base font-semibold ml-2">
          {guestLabel}
        </div>
      </div>

      <div 
      className="flex items-center flex-grow transition-all hover:bg-orange-300 hover:text-white bg-sky-400 text-white h-24 rounded-l-lg rounded-full cursor-pointer">
        <div className="hidden sm:block text-base font-semibold ml-2 px-3">
          Søg
        </div>
        <BiSearch className="mr-5"/>
      </div>
    </div>
  </div>
</div>
  );
};

export default Search;
