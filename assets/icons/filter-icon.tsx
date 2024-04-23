import Image from "next/image";
import icon from "../../public/assets/filter-icon.svg";

const FilterIcon = () => {
  return <Image src={icon} alt="Filter" />;
};

export default FilterIcon;
