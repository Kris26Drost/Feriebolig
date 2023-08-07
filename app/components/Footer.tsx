import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white relative">
      <Image
        className="hidden lg:block absolute top-0 right-0 bottom-0 z-0 pointer-events-none"
        width={1920}
        height={1080}
        src={"/images/Vector 1.png"}
        alt={""}
      />
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Kontakt Os */}
          <div>
            <h2 className="mb-6 text-lg font-semibold uppercase">KontakT Os</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">CVR-nr 40910476</li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  FerieBolig.dk
                </a>
              </li>
              <li>Havet 16, Bønnerup Strand,</li>
              <li className="mb-4">8585 Glesborg</li>
            </ul>
          </div>

          {/* Sommerhusophold */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase">
              Sommerhusophold
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tilbud
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Destinationer
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Inspiration
                </a>
              </li>
            </ul>
          </div>

          {/* Virksomhed */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase">
              Virksomhed
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Om Feriebolig
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Bliv udlejer
                </a>
              </li>
            </ul>
          </div>

          {/* Kunderservice */}
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase">
              Kunderservice
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Praktisk info
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Trughedspakke
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-5 bg-gray-100 md:flex md:items-center md:justify-between">
        <ul className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 text-sky-500 text-sm sm:text-center font-semibold py-5">
          <li>
            © 2021{" "}
            <a href="/" className="hover:underline">
              FerieBolig.dk™
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Persondatapoltik
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Lejebetingelser 2021
            </a>
          </li>
        </ul>

        <ul className="hidden sm:flex flex-row items-center space-x-2">
          <li>
            <img src={"/images/dk.png"} alt="DK-kord" className="w-8 h-6" />
          </li>
          <li>
            <img src={"/images/credit.png"} alt="VISA" className="w-8 h-6" />
          </li>
          <li>
            <img
              src={"/images/mastercard.png"}
              alt="MASTERCARD"
              className="w-8 h-6"
            />
          </li>
          <li>
            <img
              src={"/images/mobilepay.png"}
              alt="MOBILEPAY"
              className="w-6 h-6"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
