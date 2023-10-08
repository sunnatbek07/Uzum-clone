import { Carousel } from "@material-tailwind/react";
import Banner from "../../../assets/BannerImage.png";

const CarouselIntro = () => {
    return (
        <Carousel transition={{ duration: 0.5 }} loop={true} autoplay={true} className="rounded-xl">
            <img
                src={Banner}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={Banner}
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src={Banner}
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    )
}

export default CarouselIntro