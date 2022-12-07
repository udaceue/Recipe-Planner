import styled from 'styled-components';

interface CategoryProps {
  height?: string;
}

const Wrapper = styled.div<CategoryProps>`
  margin-top: 2rem;
  min-height: ${({ height }) => height || '220px'};
  min-width: 100-2rem%;
  border-bottom: 2px solid #2d2d2d;
  font-family: Arial Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #f082ac;

  @media screen and (max-width: 960px) {
  }
`;

export default Wrapper;
