import React from 'react';
// import { ButtonsWrapper } from '../../components/Shop/style';
import styled from 'styled-components';
// import styles from './Button.module.css'

const Button = ({ text }) => {
  return (
    <ButtonWrapper>
      <button>
        <span>{text}</span>
      </button>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  width: 90%;
  margin: 40px auto;
  text-align: center;

  button {
    margin: 20px;
    outline: none;

    width: 130px;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #000;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;

    background: #000;
    color: #fff;
    line-height: 42px;
    padding: 0;
    border: none;

    &:hover {
      background: transparent;
      color: #000;
      box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 2px;
      width: 0;
      background: #000;
      transition: 400ms ease all;
    }

    &:after {
      right: inherit;
      top: inherit;
      left: 0;
      bottom: 0;
    }

    &:hover:before,
    &:hover:after {
      width: 100%;
      transition: 800ms ease all;
    }
  }
`;
