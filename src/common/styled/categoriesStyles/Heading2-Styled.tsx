import styled from 'styled-components';
import { HeadingProps } from '../headerStyles/Heading1-Styled';

const Heading1 = styled.h2<HeadingProps>`
  font-size: clamp(1.3rem, 12vw, 2.6rem);
  font-weight: bold;
  color: ${({ inverse }) => (inverse ? '#3ad' : '#fff')};
  letter-spacing: 4px;
  text-align: center;
  width: 100%;
`;

export default Heading1;
