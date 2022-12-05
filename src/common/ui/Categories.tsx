import React from 'react';
import CategoryWrapper from '../styled/categoriesStyles/CategoryWrapper.styles';
import Category from '../styled/categoriesStyles/Category.styled';
import OverflowX from '../styled/OverflowX.Styled';

function Categories() {
  return (
    <CategoryWrapper>
      <Category>
        <p>Main Dishes</p>
        <p>X</p>
      </Category>
      <Category>
        <p>Lunch</p>
        <p>X</p>
      </Category>

      <Category>
        <p>Breakfast</p>
        <p>X</p>
      </Category>

      <Category>
        <p>drinks</p>
        <p>X</p>
      </Category>
      <OverflowX />
    </CategoryWrapper>
  );
}
export default Categories;
