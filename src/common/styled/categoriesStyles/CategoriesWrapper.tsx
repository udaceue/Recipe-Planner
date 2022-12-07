import styled from 'styled-components';

const CategoriesWrapper = styled.div`
  display: flex;
  min-height: 3.5rem;
  margin-bottom: 3.5rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  max-width: 100%;
  overflow-x: scroll;
  display: flex;
  position: relative;
  &::-webkit-scrollbar {
    min-width: 1.2rem;
    top: -10rem
    background-color: #f5f5f5;
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    border-radius: 2rem;
    background-color: #2d2d2d;
  }

  ::-webkit-scrollbar-thumb {
    background: #555;
    background-clip: content-box;
    border: 0.2rem solid transparent;
    border-radius: 2rem;
  }
`;

export default CategoriesWrapper;
