import React from 'react';
import styled from 'styled-components';

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
width: 100%;
margin: 10px 15px;
text-align: center;

button {
  outline: none;
  letter-spacing: 0.5px;
  width: 200px;
  height: 40px;
  padding: 25px;
  border: 2px solid #000;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
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
    background: white;
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
