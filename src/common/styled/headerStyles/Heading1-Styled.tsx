import styled from 'styled-components';

export interface HeadingProps {
  inverse?: boolean;
}

const Heading1 = styled.h1<HeadingProps>`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  font-weight: bold;
  color: ${({ inverse }) => (inverse ? '#3ad' : '#fff')};
  letter-spacing: 4px;
  text-align: center;
  width: 100%;
`;

export default Heading1;
