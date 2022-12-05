import React from 'react';
import Header from '../styled/headerStyles/Header.Styled';
import Wrapper from '../styled/headerStyles/Wrapper.Styled';
import Heading1 from '../styled/headerStyles/Heading1-Styled';
import Description from '../styled/headerStyles/Description.Styled';
import CustomDiv from '../styled/headerStyles/CustomDiv.styled';
import Avatar from '../styled/headerStyles/Avatar.Styled';
import Hotpot from '../../assets/Hotpot.png';

function CustomHeader() {
  return (
    <Header height="220px">
      <Wrapper>
        <CustomDiv width="400px" display="flex" flexDirection="column">
          <Heading1>Hi Matheu</Heading1>
          <Description size="2rem">We hope you are in good mood for Cooking</Description>
        </CustomDiv>
        <CustomDiv width="60px" height="80px" padding="2rem" mr="1rem" mt="-8rem">
          <Avatar src={Hotpot} />
        </CustomDiv>
      </Wrapper>
    </Header>
  );
}
export default CustomHeader;
