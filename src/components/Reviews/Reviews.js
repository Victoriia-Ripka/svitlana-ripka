import React, { useState } from 'react';
import { Container } from '../styles.styled';
import {
  ReviewsContainer,
  Title,
  SlideContainer,
  Slides,
  Slide,
  User,
  Info,
  AvatarDiv,
  UserInfo,
  Name,
  Country,
  Text,
  Review,
  NextButton,
  ArrowNext,
  ArrowBack,
} from './Reviews.styled';
import { RxAvatar } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import ReviewsArray from '../../data/reviews.json';
import { Modal } from './Modal';

const Reviews = () => {
  const reviewsCount = ReviewsArray.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(null);

  const getPrev = () => {
    const indexWillbe = (activeIndex - 1 + reviewsCount) % reviewsCount;
    setActiveIndex(indexWillbe);
  };

  const getNext = () => {
    const indexWillbe = (activeIndex + 1) % reviewsCount;
    setActiveIndex(indexWillbe);
  };

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
        <Slides>
          <ArrowBack id="prev" onClick={getPrev}></ArrowBack>
          {ReviewsArray.map((item, index) => {
            return (
              <SlideContainer
                key={index}
                active={activeIndex === index ? true : false}
              >
                <Slide onClick={handleClick}>
                  <User>
                    <Info>
                      <AvatarDiv>
                        <IconContext.Provider value={{ size: 'auto' }}>
                          <RxAvatar />
                        </IconContext.Provider>
                      </AvatarDiv>
                      <UserInfo>
                        <Name>{item.name}</Name>
                        <Country>{item.country} </Country>
                      </UserInfo>
                    </Info>
                    <Text>{item.type}</Text>
                    <Review>{cutText(item.review)}</Review>
                  </User>
                </Slide>
              </SlideContainer>
            );
          })}
          <ArrowNext id="next" onClick={getNext}></ArrowNext>
        </Slides>
      </ReviewsContainer>
      <Modal index={activeIndex} open={open} setOpenModal={setOpen} />
    </Container>
  );
};

export default Reviews;
