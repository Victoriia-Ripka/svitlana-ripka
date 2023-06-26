import React, { useState, useRef } from 'react';
import { Container } from '../styles.styled';
import {
  ReviewsContainer,
  Title,
  ArrowBack,
  ArrowNext,
  Info,
  Slides,
  Slide,
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
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

const Reviews = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [open, setOpen] = useState(null);
  let activeIndex = 0;

  const cutText = text => {
    const newText = text.slice(0, 420) + '...';
    return newText;
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <ReviewsContainer>
        <Title>Відгуки моїх клієнтів</Title>
        <Slides>
          <ArrowBack
            ref={navigationPrevRef}
            onClick={() => console.log(navigationNextRef)}
          />
          <Swiper
            modules={[Navigation, Pagination, Virtual]}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            virtual
            pagination={{ clickable: true }}
          >
            {ReviewsArray.map((item, index) => {
              return (
                <Slide key={index} onClick={handleClick} virtualIndex={index}>
                  <Info>
                    <AvatarDiv>
                      <img
                        src={item.sex ? boyAvatar : girlAvatar}
                        alt="avatar"
                      />
                    </AvatarDiv>
                    <UserInfo>
                      <Name>{item.name}</Name>
                      <Country>{item.country} </Country>
                    </UserInfo>
                  </Info>
                  <Text>{item.type}</Text>
                  <Review>{cutText(item.review)}</Review>
                </Slide>
              );
            })}
          </Swiper>

          <ArrowNext ref={navigationNextRef} />
        </Slides>
      </ReviewsContainer>
      <Modal index={activeIndex} open={open} setOpenModal={setOpen} />
    </Container>
  );
};

export default Reviews;
