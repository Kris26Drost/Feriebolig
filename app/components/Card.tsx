const Card = () => {
  const images = [
    {
      image: "/images/Sommerhus-Kristoffervejen 1.jpg",
    },
    {
      image: "/images/Fælledvej 2.jpg",
    },
    {
      image: "/images/Møllebækvej-Fjellerup.jpg",
    },
    {
      image: "/images/Nordkystvejen-Skovgårde.jpg",
    },
  ];

  const slicedImages = images.slice(0, 4);

  return (
    <div className="flex flex-col sm:flex-row justify-center p-5 pb-10">
    {slicedImages.map((image, index) => (
      <div
        className="bg-white max-w-xs rounded overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer mx-4 mb-4 sm:mb-0"
        key={index}
      >
        <a href="/Detajlevisning">
          <img
            className="w-full"
            src={image.image}
            alt={`Image ${index + 1}`}
          />
          <div className="px-6 py-4 bg-white">
            <div className="font-bold text-xl mb-2">Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </a>
      </div>
    ))}
  </div>
  );
};

export default Card;
