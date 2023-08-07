"use client";

import { useContext, useState } from "react";
import { LanguageContext, Language } from "./language/LanguageContext";

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Link from "next/link";

import { SafeUser } from "@/app/types";
import { BsGlobe, BsHeart } from "react-icons/bs";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const NavBar: React.FC<NavbarProps> = ({ currentUser }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (selectedLanguage: string) => {
    setLanguage(selectedLanguage as Language);
    setShowDropdown(false);
  };

  return (
    <div className="fixed w-full bg-white z-20 shadow-md">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-1 md:gap-0">
            <Logo />
            <div className="flex items-center">
              <ul className="hidden space-x-6 md:flex items-center">
                <li>
                  <Link href="/listing"> Find feriebolig </Link>
                </li>
                <li>
                  <Link href="#"> Tilbud </Link>
                </li>
                <li>
                  <Link href="#"> Kundeservice </Link>
                </li>
              </ul>
              
              <div className="flex items-center lg:hidden ">
                <BsHeart className="mr-2 cursor-pointer text-sky-400" />
                <BsGlobe
                  className="ml-1 cursor-pointer text-sky-400"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <div className="absolute top-20 right-[20%] mt-2 bg-white rounded shadow-lg">
                    <button
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => changeLanguage("english")}
                    >
                      English
                    </button>

                    <button
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => changeLanguage("norwegian")}
                    >
                      Norwegian
                    </button>

                    <button
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => changeLanguage("german")}
                    >
                      German
                    </button>
                  </div>
                )}
              </div>

              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
