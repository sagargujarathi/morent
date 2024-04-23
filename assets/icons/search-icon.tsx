import Image from "next/image";
import icon from "../../public/assets/search-icon.svg";

const SearchIcon = () => {
  return <Image src={icon} alt="Search" />;
};

export default SearchIcon;
