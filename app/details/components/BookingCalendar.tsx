import { useState} from 'react'

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


const BookingCalendar = () => {
    const [dateRange, setDateRange] = useState<Range>({
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        });
      
        const handleDateChange = (value: RangeKeyDict) => {
          setDateRange(value.selection);
        };
      
        const disabledDates = [new Date(2023, 6, 21), new Date(2023, 6, 30)];

  return (
    <div className='mx-5 mt-5'>
        <div className="flex">
          <div className="flex flex-col p-2 m-3">
            <h2 className="font-medium text-xl">
              x nætter i Fjellerup Strand
            </h2>
            <h4 className="font-medium text-base">
              x måned 2023 - x måned 2023
            </h4>
          </div>

          <div className="relative z-10 bg-white w-1/3 shadow-lg rounded-lg ml-auto items-center justify-evenly flex p-2 m-3">
            <div className="ghidden sm:block ml-2 text-sm">
              Der er kun xx time tilbage til at booke. Ferieboligen holder snart
              op med at acceptere bookinger af dine datoer.
            </div>
          </div>
        </div>
        <div>
          <DateRange
            className="bg-orange-50 my-10 shadow-lg rounded-lg"
            rangeColors={["#10b9f1"]}
            ranges={[dateRange]}
            onChange={handleDateChange}
            direction="vertical"
            showDateDisplay={false}
            minDate={new Date()}
            disabledDates={disabledDates}
          />
        </div>

        <hr className="py-5" />
      </div>
  )
}

export default BookingCalendar