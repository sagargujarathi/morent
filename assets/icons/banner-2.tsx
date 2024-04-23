import img from "../../public/assets/ad2.svg";
import Image from "next/image";

const Banner2 = () => (
  <Image
    src={img}
    alt="Banner Image"
    style={{ width: "100%", height: "100%" }}
    objectFit="cover"
  />
);

export default Banner2;
