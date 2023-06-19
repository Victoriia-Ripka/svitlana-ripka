import styled from 'styled-components';
import { device } from 'styles/device';
import mobile_img from '../../images/images/mobile/program_add_info_x1.jpg';
import mobileTablet_img from '../../images/images/mobileTablet/program_add_info_x1.jpg';
import tablet_img from '../../images/images/tablet/program_add_info_x1.jpg';
import laptop_img from '../../images/images/laptop/program_add_info_x1.jpg';

export const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileTablet} {
    flex-direction: row-reverse;
    align-items: center;
    width: 440px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    flex-direction: row;
    width: 685px;
  }

  @media ${device.laptop} {
    width: 1070px;
  }
`;

export const Image = styled.div`
  width: 300px;
  height: 200.04px;
  margin: 0 auto;
  background-image: url(${mobile_img});

  @media ${device.mobileTablet} {
    background-image: url(${mobileTablet_img});
    width: 186px;
    height: 180px;
  }

  @media ${device.tablet} {
    background-image: url(${tablet_img});
    width: 328px;
    height: 220px;
  }

  @media ${device.laptop} {
    background-image: url(${laptop_img});
    width: 500px;
    height: 333.4px;
  }
`;

export const TextContainer = styled.div`
  margin: 20px auto 0;
  @media ${device.mobileTablet} {
    width: 250px;
  }

  @media ${device.tablet} {
    width: 341px;
    margin: 0 10px 0;
  }

  @media ${device.laptop} {
    width: 526px;
    margin: 0 20px 0;
  }
`;

export const MainText = styled.p`
  font-family: 'Lora';
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 5px;
  color: #000000;

  @media ${device.mobileTablet} {
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

export const Link = styled.a`
  font-family: 'Lora';
  font-size: 14px;
  line-height: 1.3;
  color: #594d46;
  margin-bottom: 10px;
  transition: 0.5s;
  text-decoration-line: underline;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media ${device.mobileTablet} {
    font-size: 13px;
  }

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const AddText = styled.p`
  font-family: 'Lora';
  font-size: 14px;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 3px;

  @media ${device.mobileTablet} {
    font-size: 11px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    margin-bottom: 5px;
  }

  @media ${device.laptop} {
    font-size: 20px;
    margin-bottom: 7px;
  }
`;
