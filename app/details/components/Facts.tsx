import { useSearchParams } from "next/navigation";
import { AiOutlineWifi } from "react-icons/ai";
import { BsHouse, BsArrowRight } from "react-icons/bs";
import { FaToilet } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { TbBed, TbBeach } from "react-icons/tb";
import { getData } from "../data";
import Link from "next/link";

const Facts = async () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const data = await getData(id);

  return (
    <div className="mx-5">
      <h2 className="text-xl">Faktar om bolig</h2>
      <div className="flex items-center">
        {data && (
          <>
            <div className="m-5 flex flex-col items-center">
              <BsHouse size={24} className="text-sky-400" />
              <p className="text-sm">
                {data.attributes[22]?.value} {data.attributes[22]?.unit}
              </p>
            </div>

            <div className="m-5 flex flex-col items-center">
              <TbBed size={24} className="text-sky-400" />
              <p className="text-sm">{data.attributes[23]?.value} senge</p>
            </div>

            <div className="m-5 flex flex-col items-center">
              <FaToilet size={24} className="text-sky-400" />
              <p className="text-sm">{data.attributes[24]?.value} badværelser</p>
            </div>

            <div className="m-5 flex flex-col items-center">
              <IoCubeOutline size={24} className="text-sky-400" />
              <p className="text-sm">{data.attributes[26]?.value} værelser</p>
            </div>

            <div className="m-5 flex flex-col items-center">
              <AiOutlineWifi size={24} className="text-sky-400" />
              <p className="text-sm">intet internet</p>
            </div>

            <div className="m-5 flex flex-col items-center">
              <TbBeach size={24} className="text-sky-400" />
              <p className="text-sm">1km</p>
            </div>
          </>
        )}
      </div>
      <Link href="#" className="underline flex items-center">
        Vis alle inkludere faciliteter
        <BsArrowRight className="ml-1" />
      </Link>
      <hr className="w-1/2 my-5" />
    </div>
  );
};

export default Facts;
