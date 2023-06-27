import React from 'react';
import boyAvatar from '../../images/png/boy-avatar-80.png';
import girlAvatar from '../../images/png/girl-avatar-80.png';
import { Navigation, Pagination, Virtual } from 'swiper';
import {
  Info,
  Slide,
  AvatarDiv,
  UserInfo,
  Name,
  Country,
  Text,
  Review,
  StyledSwiper,
} from './Reviews.styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

const Slider = ({ slides, open, setOpen, setIndex }) => {
  const handleClick = index => {
    setOpen(!open);
    setIndex(index);
  };

  const cutText = text => {
    const newText = text.slice(0, 400) + '...';
    return newText;
  };

  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Virtual]}
      slidesPerView={1}
      virtual
      navigation
      pagination={{ clickable: true }}
      speed={500}
    >
      {slides.map((item, index) => {
        return (
          <Slide
            key={index}
            onClick={() => handleClick(index)}
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
          </Slide>
        );
      })}
    </StyledSwiper>
  );
};

export default Slider;
