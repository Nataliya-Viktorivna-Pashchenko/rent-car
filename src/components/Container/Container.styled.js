import { styled } from 'styled-components';
import { device } from 'constants/device';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 375px;

  @media ${device.tablet} {
    padding: 0 32px;
    width: 768px;
  }

  @media ${device.desktop} {
    padding: 0 100px;
    width: 1440px;
  }
`;
