import { Spinnaker } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Search from "./Search";
import UpsBar from "./UpsBar";
import Inspiration from "./Inspiration";
import Udleje from "./Udleje";
import ListeCard from "../listing/components/ListeCard";

const sliderTitle = Spinnaker({
  subsets: ["latin"],
  weight: "400",
});

const Forside = () => {
  return (
    <div className="bg-orange-50 relative">
      <div className="relative">
        <div className="h-[580px] w-full overflow-hidden ">
          <img
            src={"/images/Gammel Skagen 2020.jpg"}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute top-[30%] left-[7%] sm:left-[7%] transform -translate-x-1 -translate-y-1 text-center whitespace-nowrap">
          <div className={sliderTitle.className}>
            <h1 className="text-white text-xl sm:text-3xl">
              Sommerhuse i hele Danmark
            </h1>
            <h3 className="text-white text-1xl sm:text-xl">
              Find spændende overnatningsmuligheder
            </h3>
          </div>
        </div>
      </div>

      {/* Booking Bar */}
      {/* <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
      <Search />
      {/* </div> */}

      {/* Hvor går din ferie hen? */}
      <div className="m-5 p-5 mt-5 pt-10">
        <h1 className="text-sky-400 text-2xl sm:text-3xl font-semibold ml-4 mb-4">
          Hvor går din ferie hen?
        </h1>
        <div className="bg-sky-400 rounded-tl-lg w-full h-auto flex-cols flex relative">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 z-0"
            style={{
              background: `url('./images/Vector 3.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <p className="text-white p-5 pt-20 relative text-xl">
            Hos Feriebolig kan du leje sommerhuse i hele Danmark.
            <br /> <br />
            Vælg mellem mere end xxx sommerhuse og ferielejligheder til leje i
            Danmarks mest attraktive ferieområder.
          </p>
          <Image
            className="hidden max-w-full h-auto filter brightness-0 invert lg:block"
            height={370}
            width={510}
            alt="Map"
            src="/images/map.png"
          />
        </div>
      </div>

      {/* UPS BAR */}
      <UpsBar />

      {/* BOLIG */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center lg:px-20 px-10 py-2 pt-10">
          <h2 className="text-sky-400 lg:text-3xl text-xl font-semibold ">
            Mest populære feriehusophold
          </h2>
          <div className="m-5">
            <button className="bg-sky-400 hover:bg-orange-300 hover:text-white-400 text-white font-bold py-2 px-4 rounded cursor-pointer lg:block hidden">
              <Link href="/listing">Vis alle</Link>
            </button>
          </div>
        </div>

        <ListeCard />
        <div className="flex justify-center m-5">
          <button className="bg-sky-400 hover:bg-orange-300 hover:text-white-400 text-white font-bold py-2 px-4 rounded cursor-pointer sm:hidden">
            <Link href="/listing">Vis alle</Link>
          </button>
        </div>
      </div>

      {/* UDLEJE DIT SOMMERHUS */}
      <Udleje />

      {/* INSPIRATION */}
      <Inspiration />
    </div>
  );
};

export default Forside;
