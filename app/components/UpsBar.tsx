import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsShieldLock } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";

const UpsBar = () => {
  return (
    <div className="bg-sky-400 py-5">
      <h2 className="text-white text-center lg:text-xl sm:text-lg">
        Dette inkluderer feriebolig.dk tilbudet for dig
      </h2>
      <div className="flex flex-wrap justify-center item-center mt-3">
        <div className="w-full md:w-auto text-center md:text-left mb-2 mx-3 md:mb-0">
          <p className="text-white flex items-center">
            <IoPricetagOutline className="mx-1" size={20} />
            Prisgaranti
          </p>
        </div>
        <div className="w-full md:w-auto text-center md:text-left mb-2 mx-3 md:mb-0">
          <p className="text-white flex items-center">
            <BiSupport className="mx-1" size={20}/>
            Personlig service
          </p>
        </div>
        <div className="w-full md:w-auto text-center md:text-left mb-2 mx-3 md:mb-0">
          <p className="text-white flex items-center">
            <BsShieldLock className="mx-1" size={20}/>
            Tryghedspakke
          </p>
        </div>
        <div className="w-full md:w-auto text-center md:text-left mx-3">
          <p className="text-white flex items-center">
            <VscFeedback className="mx-1" size={20}/>
            Direkte aftale med husejer
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpsBar;
