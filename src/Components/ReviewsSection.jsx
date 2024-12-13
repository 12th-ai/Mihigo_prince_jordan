import React from 'react';
// Import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    image: require('../assets/fabrice.jpeg'),
    name: 'Fabrice Iradukunda',
    title: 'CEO, Frexi Ltd',
    rating: 5,
    review: 'Your expertise in developing our website of Frexi Ltd was outstanding. The result is sleek, efficient, and user-friendly. Thank you for your exceptional work',
  },
  {
    image: require('../assets/sadiki.jpg'),
    name: 'Sadiki Rukara',
    title: 'CEO, Abyride Ltd',
    rating: 5,
    review: 'your work on the AbyRide website, dispatch system, and mobile app has been exceptional. You have delivered a seamless and efficient solution that truly stands out. Thank you for your dedication and expertise!',
  },
  {
    image: require('../assets/nkaka.jpeg'),
    name: 'Nkaka Byishimo Jean damour',
    title: 'IT specialist and software developer, Abytech HUB',
    rating: 5,
    review: ' Mihigo jordan has consistently demonstrated exceptional skill, dedication, and a strong work ethic at AbyTech. His contributions to the team are invaluable, and he continually goes above and beyond in delivering high-quality work. We are lucky to have him as part of our team!',
  },
  {
    image: require('../assets/avarat.jpeg'),
    name: 'nelson guhirwa',
    title: 'software developer',
    rating: 5,
    review: 'Mihigo Prince played a key role in developing the Recipe mobile app. His expertise and dedication were evident throughout the project. It was a pleasure working with him, and I look forward to future collaborations',
  },
  {
    image: require('../assets/kajyemana.jpeg'),
    name: 'Gaston Kajyemana',
    title: 'Project Manager , UKIFAM Rwanda',
    rating: 5,
    review: 'Mihigo Prince has been an invaluable asset to our team at Ukifam. His technical expertise and dedication to delivering high-quality work have consistently exceeded expectations. It’s been a pleasure working with him, and I look forward to our continued collaboration.',
  },


  {
    image: require('../assets/ntiranta.jpeg'),
    name: 'NTIRANTA jEAN CLAUDE',
    title: 'IT Specialist and Software Developer, Data SYSTEM',
    rating: 5,
    review: 'Mihigo Jordan consistently demonstrates outstanding skill and work ethic, making him an invaluable part of our team at AbyTech.',
  },
  {
    image: require('../assets/hirwa.jpeg'),
    name: 'Honore hirwa',
    title: 'Software Developer',
    rating: 5,
    review: 'Mihigo Prince was instrumental in the success of the project, showing great expertise and commitment throughout.',
  },
];

function ReviewsSection() {
  return (
    <section className="bg-gray-100 py-16 px-4 pb-20 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 capitalize leading-10">
            What My Clients Say
          </h2>
        </div>

        {/* Swiper Integration */}
        <Swiper
          modules={[Navigation, Pagination, A11y,Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}  // Auto-scroll every 3 seconds
        

        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6 capitalize font-medium text-center">
                  {review.review}
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mt-8">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold ml-6">{review.name}</h3>
                    <p className="text-gray-600 ml-6 pb-4">{review.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ReviewsSection;
