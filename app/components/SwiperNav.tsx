import React from "react";

const SwiperNav = () => {
  return (
    <>
      <div className="swiper-button-prev NstNv_prv">
        <svg className="vj_icn vj_arrow-up NstNv_btn-svg">
          <use xlinkHref="#vj_arrow-up" />
        </svg>
      </div>
      <div className="swiper-button-next NstNv_nxt">
        <svg className="vj_icn vj_arrow-down NstNv_btn-svg">
          <use xlinkHref="#vj_arrow-down" />
        </svg>
      </div>
    </>
  );
};

export default SwiperNav;
