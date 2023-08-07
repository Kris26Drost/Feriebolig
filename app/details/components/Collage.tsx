import { getData } from "../data";
import { useSearchParams } from "next/navigation";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collage = async () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const data = await getData(id);


  // Configure the settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative flex justify-center">
      {data && (
        <div className="w-1/2 h-1/2">
          <Slider {...sliderSettings}>
            {data.photos.map((photo: any) => (
              <div key={photo.id}>
                <img
                  src={photo.photoUrl}
                  alt=""
                  className="w-full h-1/2 object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Collage;