import React from 'react';
import Header from '../styled/Header.Styled';
import Wrapper from '../styled/Wrapper.Styled';
import Heading1 from '../styled/Headings-Styled';
import CustomDiv from '../styled/CustomDiv.styled';

const customDivStyles = { ml: '2rem', mt: '5rem', display: 'flex', flexDirection: 'column' };

function CustomHeader() {
  return (
    <Header height="220px">
      <Wrapper>
        <CustomDiv {...customDivStyles}>
          <Heading1>Hello Matheu</Heading1>
          <Heading1>Hello Matheu</Heading1>
        </CustomDiv>
      </Wrapper>
    </Header>
  );
}

export default CustomHeader;
