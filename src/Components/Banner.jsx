import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import book1 from "../assets/book1.jpeg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div
        className="w-full h-full my-5 shadow-[0_25px_20px_-10px_rgba(0,0,0,0.25),0_-25px_40px_-10px_rgba(0,0,0,0.25)]
]
"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className=" overflow-hidden shadow-lg "
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <img
              src={book1}
              alt="Banner 1"
              className="w-full h-150 object-cover"
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <img
              src={book2}
              alt="Banner 2"
              className="w-full h-150 object-cover"
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <img
              src={book3}
              alt="Banner 3"
              className="w-full h-150 object-cover"
            />
          </SwiperSlide>
          <div className="absolute inset-0 flex justify-center items-center gap-4 z-10">
            <Link
              to="/all-books"
              className="px-9 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition"
            >
              All Books
            </Link>
            <Link
              to="/add-book"
              className="px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200 transition"
            >
              Create Book
            </Link>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
