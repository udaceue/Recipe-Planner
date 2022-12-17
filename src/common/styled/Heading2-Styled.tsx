import styled from 'styled-components';
import { HeadingProps } from './Heading1-Styled';

interface Heading2Props {
  letterSpacing: string;
}

const Heading2 = styled.h2<Heading2Props>`
  font-size: clamp(1.3rem, 12vw, 2.6rem);
  font-weight: bold;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
  color: ${({ inverse }) => (inverse ? '#3ad' : '#fff')};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '4px'}
  text-align: left;
  max-width: 20%;
`;

export default Heading2;
