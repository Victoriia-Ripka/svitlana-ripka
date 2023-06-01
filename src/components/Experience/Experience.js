import { Container } from 'components/styles.styled';
import React from 'react';
import {
  ExtraContainer,
  Image,
  Title,
  TextContainer,
  Time,
  Job,
} from './Experience.styled';
import image from '../../images/images/IMG_4299.jpg';

const Experience = () => {
  return (
    <div style={{ background: 'rgba(217, 217, 217, 0.2)' }}>
      <Container>
        <ExtraContainer>
          <Image src={image} alt="psycholog" />

          <TextContainer>
            <Title>Загальний досвід роботи</Title>
            <Time>2000 — 2009 р.</Time>
            <Job>
              Кризовий психолог ДСНС України (консультування особового та
              керівного складу ДСНС з сімейних і службових проблем, психологічна
              допомога цивільним, що постраждали внаслідок НС).
            </Job>
            <Time>2009 р. — до тепер </Time>
            <Job>
              Приватна практика: кризовий та сімейний психолог, соціальний
              педагог, член Української спілки психотерапевтів (УСП), експерт
              журналу «Моя дитина», «Психологія та Я», тренер фонду ЮНІСЕФ,
              ведуча тренінгів для дорослих, підлітків, батьків, ведуча груп
              психологічної підтримки для підлітків та дорослих. Постійно
              підвищую свій професійний рівень через навчання, тренінги,
              конференції. Пройшла повний курс особистої терапії. Відвідую
              групові та індивідуальні супервізії.
            </Job>
          </TextContainer>
        </ExtraContainer>
      </Container>
    </div>
  );
};

export default Experience;
