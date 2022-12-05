import styled from 'styled-components';

const Container = styled.div`
  width: 100%-2vw;
  max-width: 1400px;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export default Container;
