import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus illum deleniti natus sunt nostrum iste magni debitis adipisci obcaecati architecto ratione repellendus aliquam numquam temporibus, magnam nemo. Delectus repellat cumque dolor ut eaque beatae totam quae quidem quos esse?",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus illum deleniti natus sunt nostrum iste magni debitis adipisci obcaecati architecto ratione repellendus aliquam numquam temporibus, magnam nemo. Delectus repellat cumque dolor ut eaque beatae totam quae quidem quos esse?",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus illum deleniti natus sunt nostrum iste magni debitis adipisci obcaecati architecto ratione repellendus aliquam numquam temporibus, magnam nemo. Delectus repellat cumque dolor ut eaque beatae totam quae quidem quos esse?",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus illum deleniti natus sunt nostrum iste magni debitis adipisci obcaecati architecto ratione repellendus aliquam numquam temporibus, magnam nemo. Delectus repellat cumque dolor ut eaque beatae totam quae quidem quos esse?",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Professionals</span>
        
            <span style={{paddingLeft:"3rem",fontSize:"2rem"}}>Testimonials.</span>
        
        
        {/* <div
          className="blur"
          style={{
            background: "#3fe05a",
            zIndex: "-9",
            left: "50rem",
            top: "25rem",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#4c67b1",
            top: "15rem",
            left: "-15rem",
            width: "21rem",
            height: "11rem",
            zIndex: "-9",
          }}
        ></div> */}
      </div>
      {/* slider */}
      <Swiper modules={[Pagination]} grabCursor={true} spaceBetween={30} slidesPerView={2} pagination={{clickable: true}}>
        {clients.map((client, i)=>(

        <SwiperSlide key={i}>
            <div className="testimonial">
            <img src={client.img} alt="client" />
            <span>{client.review}</span>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
