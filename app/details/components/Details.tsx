"use client";

import { getData } from "../data";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { BsArrowLeftCircle } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { BiShare } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineWifi, AiFillHeart } from "react-icons/ai";

import BookingModal from "./modals/BookingModal";
import Offers from "./Facilities";
import Policies from "./Policies";
import BookingCalendar from "./BookingCalendar";
import Facts from "./Facts";
import Collage from "./Collage";

const Details = async () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const data = await getData(id);

  const latitude = data?.location?.latitude || 55.50518;
  const longitude = data?.location?.longitude || 10.12367;

  const customMarkerIcon = new Icon({
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    shadowAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  const renderMap = () => {
    if (typeof window !== "undefined") {
      return (
        <MapContainer
          center={[latitude, longitude]}
          zoom={6}
          style={{ height: "400px", width: "600px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
          />
          <Marker position={[latitude, longitude]} icon={customMarkerIcon} />
        </MapContainer>
      );
    }

    return null;
  };

  return (
    <div className="relative w-full bg-orange-50">
      {/* Baggrund billeder */}
      <div>
        <Image
          className="absolute -top-10 right-0 z-0 pointer-events-none"
          width={1920}
          height={1080}
          src={"/images/Vector 8.png"}
          alt={""}
        />

        <Image
          className="absolute top-0 right-0 bottom-0 z-0 pointer-events-none"
          width={680}
          height={635}
          src={"/images/Vector 9.png"}
          alt={""}
        />

        <Image
          className="absolute top-0 right-0 bottom-0 z-0 pointer-events-none"
          width={580}
          height={420}
          src={"/images/Vector 10.png"}
          alt={""}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-row relative mt-3">
        <Link href="/listing">
          <button className="bg-white shadow-lg rounded-full p-2 m-3 items-center justify-evenly flex">
            <BsArrowLeftCircle size={20} />
            <div className="hidden sm:block ml-2 text-sm">Gå tilbage</div>
          </button>
        </Link>

        <div className="flex justify-end flex-grow">
          <button className="bg-white shadow-lg rounded-full p-2 m-3 items-center justify-evenly flex">
            <HiOutlineHeart className="text-sky-400" size={20} />

            <div className="hidden sm:block ml-2 text-sm">Gem</div>
          </button>
        </div>
        <div className="flex justify-end ">
          <button className="bg-white shadow-lg rounded-full p-2 m-3 items-center justify-evenly flex">
            <BiShare className="text-sky-400" size={20} />
            <div className="hidden sm:block ml-2 text-sm">Del</div>
          </button>
        </div>
      </div>

      <div>
        <BookingModal />
      </div>

      {data && (
        <>
          {/* Collage */}
          <div className="mb-5">
            <Collage />
          </div>

          {/* TO DO SLOW STARTUP */}
          <div className="relative z-10 mx-5 mt-10 bg-white rounded-lg shadow-lg p-3 w-1/2">
            {/* DATA INFO */}
            <div className="relative mt-5 mx-5">
              <h1 className="text-xl font-semibold">{data.name}</h1>
              <div className="flex items-center">
                <IoLocationOutline />
                <p className="font-medium">
                  {data.address}, {data.city}, {data.zipCode}
                </p>
              </div>
              <p className="text-sm">{data.www}</p>
            </div>

            {/* Om Bolig */}
            <div className="relative mt-10 mx-5">
              <hr className="my-10 w-1/2" />
              <h2 className="text-xl">Om bolig</h2>
              <div className="flex">
                <p className="text-base whitespace-break-spaces">
                  {data.texts[0].text}
                </p>
              </div>
              <hr className="w-1/2 my-5" />
            </div>

            {/* Udvalgte faciliteter */}
            <div>
              <Facts />
            </div>

            {/* Offers */}
            <div>
              <Offers />
            </div>

            {/* Policies */}
            <div>
              <Policies />
            </div>
          </div>
        </>
      )}

      {/* Calendar */}
      <div className="z-10 relative mx-5">
        <BookingCalendar />
      </div>

      {/* Map */}
      <div className="flex justify-center relative z-10 pb-10">
        {renderMap()}
      </div>
    </div>
  );
};

export default Details;
