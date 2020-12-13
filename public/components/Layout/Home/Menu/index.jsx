import { Swiper, SwiperSlide } from "swiper/react";

const HomeMenu = (props) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-pink_300 w-20 h-20 p-5 rounded-full flex justify-center items-center">
              <img src={item.icon} />
            </div>
            <h2 className="text-text_menu capitalize">{item.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeMenu;
