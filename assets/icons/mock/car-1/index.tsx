import Image from "next/image";
import icon from "../../../../public/assets/mock/car1.svg";

const Car1 = (props: any) => <Image src={icon} alt="car1" {...props} />;

export default Car1;
