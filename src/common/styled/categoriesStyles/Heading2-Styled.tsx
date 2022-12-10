import styled from 'styled-components';
import { HeadingProps } from '../headerStyles/Heading1-Styled';

const Heading2 = styled.h2<HeadingProps>`
  font-size: clamp(1.3rem, 12vw, 2.6rem);
  font-weight: bold;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
  color: ${({ inverse }) => (inverse ? '#3ad' : '#fff')};
  letter-spacing: 4px;
  text-align: left;
  max-width: 100%;
`;

export default Heading2;
