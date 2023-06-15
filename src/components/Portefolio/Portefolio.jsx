import React from 'react'
import "./Portefolio.css"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import foto1 from "../../img/biodiversity/anne-nygard-7f-YnPAml6o-unsplash.jpg"
import foto2 from "../../img/biodiversity/anne-nygard-BG-USvuCM3g-unsplash.jpg"
import foto3 from "../../img/biodiversity/anne-nygard-RKCbEZlRFjQ-unsplash.jpg"
import foto4 from "../../img/biodiversity/anne-nygard-hzSwvUDetY0-unsplash.jpg"
import foto5 from "../../img/biodiversity/cedric-vt-HK29-oEnN9I-unsplash.jpg"
import foto6 from "../../img/biodiversity/jean-louis-aubert-jJMrNPxx9xc-unsplash.jpg"
import foto7 from "../../img/biodiversity/patrick-perkins-doIS4HkxzDo-unsplash.jpg"
import foto8 from "../../img/biodiversity/patrick-perkins-m6RcUx_qaMk-unsplash.jpg"
import foto9 from "../../img/biodiversity/s-n-pattenden-YLLDkt3VHmc-unsplash.jpg"
import foto10 from "../../img/biodiversity/sigmund-Utk_Qt-f0hI-unsplash.jpg"
import foto11 from "../../img/biodiversity/tara-glaser-SGAACV7lkng-unsplash.jpg"

const Portefolio = () => {
  return (
    <div className='portefolio' id='Portefolio'>
        <span>Recent Images</span>
        
                <span style={{fontSize:"2rem"}}>biodiversity</span>
           

       <Swiper spaceBetween={70} slidesPerView={3} grabCursor={true} className='portefolio-slider'>
        <SwiperSlide className='swiper-slide'>
          <img src={foto1} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto2} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto3} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto4} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto5} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto6} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto7} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto8} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto9} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto10} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto11} alt="sidebar" />
        </SwiperSlide>
       </Swiper>
    </div>
  )
}

export default Portefolio