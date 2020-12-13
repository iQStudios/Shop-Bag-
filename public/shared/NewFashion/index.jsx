import React from "react";
import Heart_icon from "../../img/icon/heart_icon";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

const NewFashion = (props) => {
  const data = props.data;

  return (
    <React.Fragment>
      <div className="flex justify-between items-center px-4 mb-5">
        <h2 className=" font-bold text-3xl leading-4 capitalize">
          new fashion
        </h2>
        <span className="text-text_orange_500 capitalize">view all</span>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="py-5 px-2 cursor-pointer">
            <Link href="/detail" passHref>
              <div className="grid gap-5 p-5 shadow-lg rounded-xl">
                <button
                  type="button"
                  className="w-10 h-10 bg-pink_500 rounded-xl p-2 absolute top-7 right-5"
                >
                  <Heart_icon />
                </button>
                <img src={item.img} className="h-60 w-80" />
                <div className="text-center my-2 space-y-3">
                  <h2 className="text-xl capitalize">{item.title}</h2>
                  <ul className="flex space-x-2 justify-center items-center">
                    {[...Array(5)].map((start) => (
                      <li>
                        <img src="../../img/icon/star_complet.svg" />
                      </li>
                    ))}
                  </ul>
                  <p className="text-2xl font-semibold">$ {item.price}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default NewFashion;
