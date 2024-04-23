import {
  Car1,
  Car2,
  Car3,
  Car4,
  Car5,
  Car6,
  Car7,
  Car8,
  Car9,
} from "../icons/mock";

const CAR_DATA = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    image: Car1,
    gas: 90,
    transmission: "manual",
    seating: 2,
    price: 99,
  },
  {
    id: 2,
    name: "Nissan GT - R",
    type: "Sport",
    image: Car2,
    gas: 80,
    transmission: "manual",
    seating: 2,
    price: 80,
  },
  {
    id: 3,
    name: "Rolls - Royce",
    type: "Sedan",
    image: Car3,
    gas: 70,
    transmission: "manual",
    seating: 4,
    price: 96,
  },
  {
    id: 4,
    name: "All New Rush",
    type: "SUV",
    image: Car4,
    gas: 70,
    transmission: "manual",
    seating: 6,
    price: 72,
  },
  {
    id: 5,
    name: "CR  - V",
    type: "SUV",
    image: Car5,
    gas: 80,
    transmission: "manual",
    seating: 6,
    price: 80,
  },
  {
    id: 6,
    name: "All New Terios",
    type: "SUV",
    image: Car6,
    gas: 90,
    transmission: "manual",
    seating: 2,
    price: 74,
  },
  {
    id: 7,
    name: "MG ZX Exclusice",
    type: "Hatchback",
    image: Car7,
    gas: 70,
    transmission: "manual",
    seating: 4,
    price: 76,
  },
  {
    id: 8,
    name: "New MG ZS",
    type: "SUV",
    image: Car8,
    gas: 80,
    transmission: "manual",
    seating: 6,
    price: 80,
  },
  {
    id: 9,
    name: "New MG ZS",
    type: "SUV",
    image: Car9,
    gas: 80,
    transmission: "manual",
    seating: 6,
    price: 80,
  },
];

export interface ICarType {
  id: number;
  name: string;
  type: string;
  image: (props: any) => JSX.Element;
  gas: number;
  transmission: string;
  seating: number;
  price: number;
}

export default CAR_DATA;
