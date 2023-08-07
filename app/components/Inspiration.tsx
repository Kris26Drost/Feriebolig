
const Inspiration = () => {
  return (
    <div className="text-sky-400 text-center p-5 pt-10 relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{
          background: `url('./images/Vector 11.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <h1 className="text-3xl z-10">
        Find <span className="font-bold">Inspiration</span>
      </h1>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-10 sm:p-20">
          <div className="rounded relative z-10">
            <img
              className="w-full h-full object-cover "
              alt="Fiskerihavn"
              src={"/images/Boennerup_Fiskerihavn.jpg"}
            />
          </div>

          <div className="col-span-2 row-span-2 sm:col-span-0 sm:row-span-0 rounded relative z-10">
            <img
              className="w-full h-full object-cover"
              alt="Oplevleseplads Boennerup"
              src={"/images/Oplevelseplads_Boennerup.jpg"}
            />
          </div>

          <div className="rounded relative z-10">
            <img
              className="w-full h-full object-cover"
              alt="fuglsocentret"
              src={"/images/fuglsocentret.jpg"}
            />
          </div>

          <div className="rounded relative z-10">
            <img
              className="w-full h-full object-cover "
              alt="strand"
              src={"/images/strand.jpg"}
            />
          </div>

          <div className="rounded relative z-10">
            <img
              className="w-full h-full object-cover "
              alt="hotel fuglsocentret"
              src={"/images/hotel-fuglsocentret.jpg"}
            />
          </div>

          <div className="rounded relative z-10">
            <img
              className="w-full h-full object-cover"
              alt="Boennerup Strand"
              src={"/images/Boennerup_Strand.jpg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
