import LayoutIndex from "../index";

import HomeTop from "./HomeTop/index";
import HomeMenu from "./Menu/index";

import NewFashion from "../../../shared/NewFashion/index";
import HotSales from "../../../shared/HotSales/index";

const listMenu = [
  {
    id: 1,
    title: "watches",
    icon: "./img/icon_menu/watches_icon.svg",
  },
  {
    id: 2,
    title: "t-shirts",
    icon: "./img/icon_menu/t_shirts_icon.svg",
  },
  {
    id: 3,
    title: "shoes",
    icon: "./img/icon_menu/shoes_icon.svg",
  },
  {
    id: 4,
    title: "shorts",
    icon: "./img/icon_menu/shorts_icon.svg",
  },
  {
    id: 5,
    title: "dresses",
    icon: "./img/icon_menu/dresses_icon.svg",
  },
  {
    id: 6,
    title: "jeans",
    icon: "./img/icon_menu/jeans_icon.svg",
  },
];

const data_newFashion = [
  {
    id: 1,
    title: "women bag",
    price: "47",
    review: 4,
    img: "../../img/bag/women_bag.png",
  },
  {
    id: 1,
    title: "pink bag",
    price: "13",
    review: 3,
    img: "../../img/bag/pink_bag.png",
  },
];
const data_hotSales = [
  {
    id: 1,
    title: "dog park trips",
    price: "38",
    review: 4,
    img: "../../img/bag/women_bag.png",
  },
  {
    id: 1,
    title: "pink bag",
    price: "13",
    review: 3,
    img: "../../img/bag/pink_bag.png",
  },
];

export default function LayoutHome() {
  return (
    <LayoutIndex>
      <HomeTop />
      <div className="py-5 h-auto w-full">
        <HomeMenu data={listMenu} />
      </div>
      <div className="py-4 ">
        <NewFashion data={data_newFashion} />
      </div>
      <div className="py-5">
        <HotSales data={data_hotSales} />
      </div>
    </LayoutIndex>
  );
}
