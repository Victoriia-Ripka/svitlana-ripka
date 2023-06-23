import styled from 'styled-components';
import { device } from '../../styles/device';

export const ValuesContainer = styled.div`
  margin: 0 auto;

  @media ${device.mobileTablet} {
    width: 436px;
  }

  @media ${device.tablet} {
    width: 685px;
  }
  @media ${device.laptop} {
    width: 1070px;
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;

  @media ${device.tablet} {
    margin-bottom: 15px;
  }

  @media ${device.laptop} {
    margin-bottom: 60px;
  }
`;

export const TextContainer = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileTablet} {
    margin-left: 10px;
  }

  @media ${device.tablet} {
    margin-left: 20px;
  }
  @media ${device.laptop} {
    margin-left: 70px;
  }
`;

export const ImageBackground = styled.div`
  width: 147px;
  height: 173px;
  background: rgba(187, 170, 204, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileTablet} {
    width: 208px;
    height: 260px;
  }

  @media ${device.tablet} {
    width: 328.8px;
    height: 400px;
  }

  @media ${device.laptop} {
    width: 500px;
    height: 619px;
  }
`;

export const Image = styled.img`
  width: 117px;
  height: 145px;

  @media ${device.mobileTablet} {
    width: 168px;
    height: 208px;
  }

  @media ${device.tablet} {
    width: 280px;
    height: 354.79px;
  }

  @media ${device.laptop} {
    width: 400px;
    height: 495px;
  }
`;

export const FirstTextMobile = styled.p`
  width: 100%;
  font-family: 'Lora';
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;

  @media ${device.mobileTablet} {
    display: none;
  }
`;

export const FirstText = styled.p`
  display: none;

  @media ${device.mobileTablet} {
    display: block;
    font-family: 'Lora';
    font-size: 11px;
    line-height: 1.3;
    text-align: center;
    text-align: left;
    margin-bottom: 10px;

    color: #000000;
    width: 218px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    width: 328px;
    margin-bottom: 15px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    width: 450px;
    margin-bottom: 30px;
  }
`;

export const TextItems = styled.p`
  font-family: 'Lora';
  font-size: 10px;
  line-height: 1.3;
  width: 152px;

  color: #000000;
  @media ${device.mobileTablet} {
    font-size: 11px;
    width: 218px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    width: 328px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    width: 450px;
  }
`;

export const LastText = styled.p`
  font-family: 'Lora';
  font-size: 11px;
  line-height: 1.3;
  text-align: center;
  margin: 0 auto;

  color: #000000;
  @media ${device.mobileTablet} {
    width: 354px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    width: 550px;
  }

  @media ${device.laptop} {
    font-size: 24px;
    width: 700px;
  }
`;
