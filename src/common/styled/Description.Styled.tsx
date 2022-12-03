import styled from 'styled-components';

interface DescriptionProps {
  size: string;
}

const Description = styled.p`
  color: #706666;
  font-weight: 400;
  margin-top: 2rem;
  font-size: ${({ size }: DescriptionProps) => size};
`;

export default Description;
