import React, { useState } from 'react';
import { Container } from '../styles.styled';
import {
  ServicesContainer,
  Title,
  NavigationDiv,
  InfoDiv,
  NavList,
  NavItem,
  NavText,
  TextDiv,
  Text,
  Image,
} from './Services.styled';

const Services = () => {
  const [activeType, setActiveType] = useState([
    {
      type: 'Індивідуально',
      text1:
        'Консультування з проблем особистих відносин, професійного зростання та індивідуального розвитку.',
      text2:
        'Психологічна корекція  психосоматичних, невротичних, поведінкових та межових розладів: депресії, панічні атаки, страхи та фобії, тривожність, сумніви, невпевненість, агресія, пасивність, залежність від думки батьків, психосоматичні хвороби тощо.',
      price: '50хв/1500 грн. 50хв/$40',
      open: true,
    },
    {
      type: 'Парам та сім’ям',
      text1:
        'парно-сімейне консультування: сімейні конфлікти, зрада, ревнощі, втрата почуттів, сексуальні проблеми, залежна поведінка, криза шлюбу, розлучення або розпад пари',
      text2:
        'сімейні консультації з питань дитячо-підліткових проблем: психосоматичні розлади у дитячому віці, дитячі страхи, соціофобії, конфлікти з однолітками, поведінкові розлади, шкільна дезадаптація та неуспішність, агресивна поведінка у підлітковому віці, негативний перебіг підліткового віку  ',
      price: '60хв/2300 грн. 60хв/$60',
      open: false,
    },
    {
      type: 'Груповий формат',
      text1: 'групи підтримки дорослих та підлітків ',
      text2:
        'Навчально-практична програма по вихованню дітей «Головний ресурс» 10 тижнів/10 тем/ груповий та індивідуальний формат/ 10000 грн.',
      price: '$120 хвилин/500/15',
      open: false,
    },
  ]);

  const toggleType = index => {
    setActiveType(
      activeType.map((item, ind) => {
        if (ind === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };

  return (
    <Container>
      <ServicesContainer>
        <Title>
          Допомагаю дорослим, підліткам, батькам з дітьми, сімейним парам,
          коханцям, партнерам:
        </Title>
        <NavigationDiv>
          <NavList>
            {activeType.map((item, index) => (
              <NavItem key={index}>
                <NavText isOpen={item.open} onClick={() => toggleType(index)}>
                  {item.type}
                </NavText>
              </NavItem>
            ))}
          </NavList>
        </NavigationDiv>
        <InfoDiv>
          {activeType.map((item) => {
            if (item.open) {
              return (
                <TextDiv>
                  <Text>
                   {item.text1}
                  </Text>
                  <Text>
                    {item.text2}
                  </Text>
                  <Text>{item.price}</Text>
                </TextDiv>
              );
            }
          })}

          <Image></Image>
        </InfoDiv>
      </ServicesContainer>
    </Container>
  );
};

export default Services;
