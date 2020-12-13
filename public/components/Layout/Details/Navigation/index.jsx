import React from "react";
import { useRouter } from "next/router";

import ArrowLeft_icon from "../../../../img/icon/arrow_left_icon";

import Heart_active_Icon from "../../../../img/icon/heart_icon_active";

const NavigationDetail = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between p-5 items-center  w-full ">
      <button
        type="button"
        className="w-10 h-10 p-1 "
        onClick={() => router.back()}
      >
        <ArrowLeft_icon />
      </button>
      <h2 className="capitalize font-bold text-xl">quickview</h2>
      <button
        type="button"
        className="w-10  p-2  bg-pink_light rounded-full  shadow-bnt_shadow"
      >
        <Heart_active_Icon />
      </button>
    </div>
  );
};

export default NavigationDetail;
