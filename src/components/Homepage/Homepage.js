import React from 'react';
import { Link } from 'react-router-dom';
import underline from '../../assets/underline.png';
import {
  HomeWrapper,
  ContentWrapper,
  BigText,
  SmallText,
  Underline,
  ButtonWrapper,
} from './style';

const Homepage = () => {
  return (
    <HomeWrapper
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <ContentWrapper>
        <BigText>Welcome to Book Planet</BigText>
        <SmallText>
          Book Planet is an online bookstore with a mission to deliver books to
          readers. We believe in the power of knowledge and imagination. So our
          goal is to help those who supply it and share it with those who crave
          it. Which is why every action we take, and every book purchase you
          make helps fund it.
        </SmallText>
        <Underline src={underline} />
        <Link to="/shopping-cart/shop">
          <ButtonWrapper>
            <p></p>
          </ButtonWrapper>
        </Link>
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Homepage;
