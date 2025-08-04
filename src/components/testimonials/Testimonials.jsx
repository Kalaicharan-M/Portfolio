import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const certifications = [
    {
      id: 1,
      name: 'AWS Cloud Computing – Specialization Certificate',
      org: 'AWS Academy / Coursera',
      year: '2025'
    },
    {
      id: 2,
      name: 'PCAP – Programming Essentials in Python',
      org: 'Cisco Networking Academy',
      year: '2025'
    },
    {
      id: 3,
      name: 'Cisco Certified – CCNA Series',
      org: 'Cisco',
      year: '2024'
    },
    {
      id: 4,
      name: 'Cybersecurity Fundamentals',
      org: 'Cisco Networking Academy',
      year: '2024'
    }
  ];

  return (
    <section id="testmonials">
      <h5>My Achievements</h5>
      <h2>Certifications</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {certifications.map((cert) => (
          <SwiperSlide className="testimonial" key={cert.id}>
            <div className="client__avatar">
              <FaCertificate />
            </div>
            <h5 className='client__name'>{cert.name}</h5>
            <small className="client__review">{cert.org} — {cert.year}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
