import React, { useState } from 'react';
import { Container } from '../styles.styled';
import {
  ReviewsContainer,
  Title,
  SlideContainer,
  Info,
  AvatarDiv,
  UserInfo,
  Name,
  Country,
  Text,
  Review,
} from './Reviews.styled';
import ReviewsArray from '../../data/reviews.json';
import { Modal } from './Modal';
import boyAvatar from '../../images/png/boy-avatar-80.png';
import girlAvatar from '../../images/png/girl-avatar-80.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

const Reviews = () => {
  // const reviewsCount = ReviewsArray.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(null);

  const cutText = text => {
    const newText = text.slice(0, 400) + '...';
    return newText;
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <ReviewsContainer>
        <Title>Відгуки моїх клієнтів</Title>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Virtual]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          virtual
          pagination={{ clickable: true }}
        >
          {ReviewsArray.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={handleClick}
                virtualIndex={index}
              >
                <Info>
                  <AvatarDiv>
                    <img src={item.sex ? boyAvatar : girlAvatar} alt="avatar" />
                  </AvatarDiv>
                  <UserInfo>
                    <Name>{item.name}</Name>
                    <Country>{item.country} </Country>
                  </UserInfo>
                </Info>
                <Text>{item.type}</Text>
                <Review>{cutText(item.review)}</Review>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ReviewsContainer>
      <Modal index={activeIndex} open={open} setOpenModal={setOpen} />
    </Container>
  );
};

export default Reviews;
