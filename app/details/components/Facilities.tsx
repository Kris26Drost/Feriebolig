import { useState } from "react";

import { AiOutlineWifi } from "react-icons/ai";
import { BiWater, BiRadio, BiBowlHot } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaDesktop, FaSatelliteDish, FaSwimmingPool, FaHotTub } from "react-icons/fa";
import { GiBunkBeds, GiWashingMachine, GiCooler } from "react-icons/gi";
import { IoCubeOutline } from "react-icons/io5";
import { MdOutlineDryCleaning } from "react-icons/md";
import { TbFridge } from "react-icons/tb";
import { WiDaySunny } from "react-icons/wi";


const Offers = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="m-5">
      <h2 className="text-xl">Udvalgte faciliteter for denne bolig</h2>
      <div className="flex flex-wrap">

        <div className="flex flex-row items-center">
          <div className="m-5 flex flex-col items-center">
            <FaDesktop size={24} className="text-sky-400" />
            <p className="text-sm">TV</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <GiBunkBeds size={24} className="text-sky-400" />
            <p className="text-sm">Kids bed</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <IoCubeOutline size={24} className="text-sky-400" />
            <p className="text-sm">Sauna</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <FaSatelliteDish size={24} className="text-sky-400" />
            <p className="text-sm">Satellite</p>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="m-5 flex flex-col items-center">
            <FaSwimmingPool size={24} className="text-sky-400" />
            <p className="text-sm">Pool</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <TbFridge size={24} className="text-sky-400" />
            <p className="text-sm">Freezer</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <GiWashingMachine size={24} className="text-sky-400" />
            <p className="text-sm">Washing Machine</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <GiCooler size={24} className="text-sky-400" />
            <p className="text-sm">Cooler</p>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="m-5 flex flex-col items-center">
            <BiWater size={24} className="text-sky-400" />
            <p className="text-sm">Ocean View</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <BiRadio size={24} className="text-sky-400" />
            <p className="text-sm">Radio</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <WiDaySunny size={24} className="text-sky-400" />
            <p className="text-sm">Solarium</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <BsTelephone size={24} className="text-sky-400" />
            <p className="text-sm">Phone</p>
          </div>
        </div>

        <div className="flex flex-row items-center">
        {expanded && (
            <>
          <div className="m-5 flex flex-col items-center">
            <FaHotTub size={24} className="text-sky-400" />
            <p className="text-sm">Spa</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <MdOutlineDryCleaning size={24} className="text-sky-400" />
            <p className="text-sm">Dryer</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <BiBowlHot size={24} className="text-sky-400" />
            <p className="text-sm">Dishwasher</p>
          </div>
          <div className="m-5 flex flex-col items-center">
            <AiOutlineWifi size={24} className="text-sky-400" />
            <p className="text-sm">Internet</p>
          </div>
          </>
          )}
        </div>

      </div>

      <button className="bg-sky-400 rounded-lg text-white shadow-lg px-5 py-2 m-4" onClick={toggleAccordion}>
      {expanded ? "Skjul" : "Vis alle"}
      </button>

      <hr className="my-10 w-1/2" />
    </div>
  );
};

export default Offers;