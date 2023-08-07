import { BsArrowRight } from "react-icons/bs";
import { FaBabyCarriage, FaChild } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdSmokeFree, MdPets } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

const Policies = () => {
  return (
    <div className="m-5">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h2 className="text-xl">Værd at vide</h2>

          <div className="m-5 flex flex-row ">
            <TbCalendarTime size={24} />
            <p>Ankomst efter 15:00</p>
          </div>

          <div className="m-5 flex flex-row ">
            <TbCalendarTime size={24} />
            <p>Afrejse inden 10:00</p>
          </div>

          <div className="m-5 flex flex-row ">
            <FaBabyCarriage size={24} />
            <p>Babyer er velkomne (under 3 år)</p>
          </div>
          <div className="m-5 flex flex-row ">
            <FaChild size={24} />
            <p>Børn er velkomne (3 -12 år)</p>
          </div>
          <div className="m-5 flex flex-row ">
            <GiPartyPopper size={24} />
            <p>Fester er IKKE tilladt</p>
          </div>
          <div className="m-5 flex flex-row ">
            <MdSmokeFree size={24} />
            <p>Rygning er IKKE tilladt</p>
          </div>
          <div className="m-5 flex flex-row ">
            <MdPets size={24} />
            <p>Kæledyr er IKKE tilladt</p>
          </div>
        </div>

        <div className="flex flex-col ml-20">
          <h2 className="text-xl">Afbestillingspolitik</h2>
          <p className="w-full my-2">
            Få fuld refundering, hvis du afbestiller indtil 14 dage før
            ankomstdag.
          </p>

          <a href="#" className="underline flex items-center">
            Læs alle vilkår
            <BsArrowRight className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Policies;
