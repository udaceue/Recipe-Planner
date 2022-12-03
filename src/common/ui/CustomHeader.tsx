import React from 'react';
import Header from '../styled/Header.Styled';
import Wrapper from '../styled/Wrapper.Styled';
import Heading1 from '../styled/Headings-Styled';
import CustomDiv from '../styled/CustomDiv.styled';
import Description from '../styled/Description.Styled';

const customDivStyles = { ml: '2rem', mt: '5rem', display: 'flex', flexDirection: 'column', width: '220px' };

function CustomHeader() {
  return (
    <Header height="220px">
      <Wrapper>
        <CustomDiv {...customDivStyles}>
          <Heading1>Hi Matheu</Heading1>
          <Description size="2rem">We hope you are in good mood for Cooking</Description>
        </CustomDiv>
      </Wrapper>
    </Header>
  );
}
export default CustomHeader;
