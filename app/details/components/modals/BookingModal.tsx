
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { differenceInDays } from "date-fns";

const BookingModal = () => {
  const params = useSearchParams();

  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

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

    return "Indtjekning - Udtjekning";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Gæster";
  }, [guestCount]);

  return (
    <div
      className="flex absolute top-[19%] right-[1%] z-10"
    >
      <div className="bg-white rounded-lg shadow-lg ml-auto p-3">
        <div className="flex flex-col">
          <p>Billigste periode: 6 nov. 2021 - 13.nov 2021</p>
          <p>Plads til 1 til 6 personer</p>
          <p>fra 12.771 DKK / 7 nætter</p>
          <div className="flex flex-col rounded-lg shadow-lg m-3 items-center p-3">
            <div className="flex flex-row bg-white hover:bg-gray-100 border border-gray-400 p-2 rounded my-3 justify-center w-full cursor-pointer ">
              {durationLabel}
            </div>

            <div className="flex flex-row bg-white hover:bg-gray-100 border border-gray-400 p-2 rounded my-3 justify-center w-full cursor-pointer">
              {guestLabel}
            </div>
          </div>
          <button className="bg-sky-400 rounded-lg text-white py-4 m-3 hover:bg-sky-500">
            Reserver
          </button>
          <h5 className="text-orange-500 cursor-pointer">Brug for hjælp?</h5>
          <p>
            Skriv til
            <span className="text-orange-400"> info@hestehavencamping.dk </span>
            eller ring til
            <span className="text-orange-400"> (+45) 86 31 71 91</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
