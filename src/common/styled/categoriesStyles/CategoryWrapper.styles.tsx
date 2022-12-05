import styled from 'styled-components';

interface CategoryProps {
  height?: string;
}

const CategoryWrapper = styled.div<CategoryProps>`
  margin-top: 2rem;
  min-height: ${({ height }) => height || '300px'};
  width: 100-2rem%;
  border-bottom: 2px solid #2d2d2d;
  font-family: Arial Helvetica, sans-serif;
  display: flex;
  align-items: center;
  color: #f082ac;

  @media screen and (max-width: 960px) {
    background-color: green;
  }
`;

export default CategoryWrapper;
