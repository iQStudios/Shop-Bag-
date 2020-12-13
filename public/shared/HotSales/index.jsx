import React from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import Heart_icon_active from "../../img/icon/heart_icon_active";

const HotSales = (props) => {
  const data = props.data;
  return (
    <React.Fragment>
      <div className="flex justify-between items-center mb-10 px-4">
        <h2 className=" font-bold text-3xl leading-4 capitalize ">hot sales</h2>
        <span className="text-text_orange_500 capitalize">view all</span>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="pb-10 px-2 cursor-pointer">
            <Link href="/detail" passHref>
              <div className="grid gap-5 p-5 shadow-lg rounded-xl ">
                <div className="flex justify-between relative ">
                  <img src={item.img} className="h-52 w-64" />
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-bg_heart p-2 absolute top-0 right-0 "
                  >
                    <Heart_icon_active />
                  </button>
                </div>
                <div className="flex items-center justify-between space-x-1">
                  <div className="">
                    <h2 className="text-xl capitalize font-semibold">
                      {item.title}
                    </h2>
                    <ul className="flex space-x-2 justify-center items-center">
                      {[...Array(5)].map((start) => (
                        <li key={start}>
                          <img src="../../img/icon/star_complet.svg" />
                        </li>
                      ))}
                    </ul>
                    <p className="capitalize text-xs">(1.568 ratings)</p>
                  </div>
                  <div className="">
                    <h2 className="text-xl capitalize font-semibold">
                      $ {item.price}
                    </h2>
                    <p>/trip</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default HotSales;
