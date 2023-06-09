import React from 'react';
import { Container, HidenTitle } from '../styles.styled';
import {
  GreetingContainer,
  TextContainer,
  ImgContainer,
  Text,
  Img,
} from './Greeting.styled';
import image_x1 from '../../images/images/greeting_x1.jpg';
import image_x2 from '../../images/images/greeting_x2.jpg';

const Greeting = () => {
  return (
    <div style={{ background: 'rgba(217, 217, 217, 0.2)' }}>
      <Container>
        <GreetingContainer>
          <HidenTitle>Привітання</HidenTitle>
          <ImgContainer>
            <Img
              srcset={`${image_x1} 1x, ${image_x2} 2x`}
              src={image_x1}
              alt="white flowers and notes"
              loading="lazy"
            />
          </ImgContainer>
          <TextContainer>
            <Text>
              Вітаю! Я - Світлана Ріпка, дипломована психологиня з додатковою
              психотерапевтичною та психоаналітичною освітою і досвідом роботи
              понад 20 років.
            </Text>
            <Text>
              Запити, з якими я працюю, торкаються складних періодів життя,
              наповнених конфліктами та кризами. На жаль, не існує життя без
              проблем, але на щастя більшість проблем та криз минають.{' '}
            </Text>
            <Text>
              Іноді саме кризи відкривають людині нові шляхи для розвитку та
              самовдосконалення. Але ці шляхи можуть залишитись й непомітними,
              якщо вся увага прикута до проблеми, а не до способів її вирішення.
              Щоб цьому запобігти звертаються до психолога.
            </Text>
          </TextContainer>
        </GreetingContainer>
      </Container>
    </div>
  );
};

export default Greeting;
