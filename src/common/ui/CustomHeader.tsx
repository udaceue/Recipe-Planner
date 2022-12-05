import React from 'react';
import Header from '../styled/Header.Styled';
import Wrapper from '../styled/Wrapper.Styled';
import Heading1 from '../styled/Heading1-Styled';
import Description from '../styled/Description.Styled';
import CustomDiv from '../styled/CustomDiv.styled';
import Avatar from '../styled/Avatar.Styled';
import Hotpot from '../../assets/Hotpot.png';

function CustomHeader() {
  return (
    <Header height="220px">
      <Wrapper>
        <CustomDiv width="400px" display="flex" flexDirection="column">
          <Heading1>Hi Matheu</Heading1>
          <Description size="2rem">We hope you are in good mood for Cooking</Description>
        </CustomDiv>
        <CustomDiv width="120px" height="80px">
          <Avatar src={Hotpot} />
        </CustomDiv>
      </Wrapper>
    </Header>
  );
}
export default CustomHeader;
