import styled from 'styled-components';

const Category = styled.div`
  min-width: 10rem;
  border-radius: 1.2rem;
  font-size: clamp(1.2rem, 1.5vw, 1.4rem);
  min-height: 3rem;
  background-color: #2d2d2d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 1rem;
  margin-bottom: 0.3rem;
  p {
    text-align: center;
    margin: 0.4rem;
  }
`;
export default Category;
