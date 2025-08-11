import './Reviews.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Reviews = () => {
  return (
    <section className='reviews' id='reviews'>
      <div className="review-up">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/1.jpg" alt="Customer" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ipsam temporibus debitis quaerat illum libero,
            nulla consectetur architecto repellat itaque deserunt reiciendis distinctio possimus beatae aliquam commodi aliquid? Quae, inventore.</p>
            <h2>Siamb Dave - Web Designer </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/2 (1).jpg" alt="Customer" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem est ullam officia impedit iusto!</p>
            <h2>Johnthan Doe - UX Designer </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/avatar-anisha.png" alt="Customer" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, aperiam. Sed, vel.</p>
            <h2>Maccy Doe - Front End</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;                                    