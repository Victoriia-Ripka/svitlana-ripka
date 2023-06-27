import React, { useState } from 'react';
import { Container } from '../styles.styled';
import { ReviewsContainer, Title, Slides } from './Reviews.styled';
import ReviewsArray from '../../data/reviews.json';
import { Modal } from './Modal';
import Slider from './Slider';

const Reviews = () => {
  const [open, setOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <Container>
      <ReviewsContainer>
        <Title>Відгуки моїх клієнтів</Title>
        <Slides>
          <Slider
            slides={ReviewsArray}
            open={open}
            setOpen={setOpen}
            setIndex={setActiveIndex}
          />
        </Slides>
      </ReviewsContainer>
      <Modal index={activeIndex} open={open} setOpenModal={setOpen} />
    </Container>
  );
};

export default Reviews;
