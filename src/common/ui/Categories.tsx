import React from 'react';
import Wrapper from '../styled/categoriesStyles/Wrapper';
import SingleCategory from '../styled/categoriesStyles/SingleCategory.styled';
import CategoriesWrapper from '../styled/categoriesStyles/CategoriesWrapper';
import Heading2 from '../styled/Heading2-Styled';

function Categories() {
  return (
    <Wrapper>
      <Heading2>New Dishes</Heading2>
      <CategoriesWrapper>
        <SingleCategory>
          <p>Main Dishes</p>
          <p>X</p>
        </SingleCategory>
        <SingleCategory>
          <p>Lunch</p>
          <p>X</p>
        </SingleCategory>

        <SingleCategory>
          <p>Breakfast</p>
          <p>X</p>
        </SingleCategory>

        <SingleCategory>
          <p>drinks</p>
          <p>X</p>
        </SingleCategory>
      </CategoriesWrapper>
    </Wrapper>
  );
}
export default Categories;
