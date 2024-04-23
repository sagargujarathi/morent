import Image from "next/image";
import icon from "../../public/assets/heart.svg";

const HeartIcon = () => {
  return <Image src={icon} alt="Heart" />;
};

export default HeartIcon;
