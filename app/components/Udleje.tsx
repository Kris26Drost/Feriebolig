import Image from "next/image";

const Udleje = () => {
  return (
    <div className="bg-sky-400 relative p-5">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{
          background: `url('./images/Vector 4.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <h2 className="text-white text-2xl">
        Overvejer du at leje dit sommerhus ud?
      </h2>
      <p className="text-white">
        Når du udlejer din sommerhus eller ferielejlighed ud gennem Feriebolig.dk, bliver du en del af et større netværk.
      </p>

      <div className="bg-white text-sky-400 p-5 hidden lg:block absolute top-[20%] left-[30%] text-center">
        <h4 className="text-xl">Bliv udlejer på feriebolig.dk</h4>
        <p>
          Udlej dit feriehus hos Feriebolig.dk, og tjen op til 42.700,- skattefrit.
        </p>
      </div>

      <div className="hidden sm:flex">
        <div className="w-full">
          <Image
            className="p-5 max-w-full h-auto"
            height="480"
            width="780"
            alt="Boennerup"
            src={"/images/bønnerup.jpg"}
          />
        </div>

        <div className="w-full">
        <Image
          className="p-5 max-w-full h-auto"
          height="480"
          width="780"
          alt="Boennerup"
          src={"/images/Sommerhus Djursland.jpg"}
        />
        </div>

        <div className="bg-white text-sky-400 p-5 absolute top-[60%] left-[50%]">
          <h4 className="text-xl">Sammen hjælper vi hinanden</h4>
          <p>
            Udlej dit feriehus hos Feriebolig.dk, og tjen op til 42.700,- skattefrit.
          </p>
        </div>
      </div>

      <div className="sm:hidden">
        <Image
          className="p-5 max-w-full h-auto"
          height="480"
          width="780"
          alt="Boennerup"
          src={"/images/bønnerup.jpg"}
        />

        <div className="bg-white text-sky-400 p-5 text-center">
          <h4 className="text-xl">Sammen hjælper vi hinanden</h4>
          <p>
            Udlej dit feriehus hos Feriebolig.dk, og tjen op til 42.700,- skattefrit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Udleje;