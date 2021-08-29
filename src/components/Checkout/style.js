import styled from 'styled-components';
import background from '../../assets/background.jpg';

// Global Component Style

export const ContentWrapper = styled.div`
  font-family: 'Julius Sans One', sans-serif;
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    color: white;
    margin: 5vh 0 0 0;
    font-size: 2.3rem;
    font-weight: 700;
    font-family: 'Big Shoulders Stencil Display', monospace;
    letter-spacing: 7px;
    background-color: black;
    padding: 10px 5vw;
    border: solid 1px white;
  }
  animation: fadeIn ease 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 480px) {
    margin-top: 5rem;
  }
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(30, 12, 41, 0.2),
      rgba(30, 12, 41, 0.2)
    ),
    url(${background});
`;

// Empty Cart Style

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  padding: 5vh 10vw;
`;

export const CartIcon = styled.img`
  margin: 20px 0;
  width: 150px;
  @keyframes emptyCart {
    0%,
    100% {
      transform: rotate(10deg);
      color: #fff;
    }
    50% {
      transform: rotate(-10deg);
      color: red;
    }
  }
  animation: emptyCart 3s ease-in-out;
  animation-iteration-count: infinite;
`;

// Filled Cart Style

export const CartItems = styled.div`
  height: 80%;
  width: 85%;
  display: flex;
`;

export const BooksOrder = styled.div`
  width: 65%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Book = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: solid black;
  font-family: 'Poppins', sans-serif;
  margin: 1rem;
  padding: 1rem;
  width: 75%;
  img {
    width: 160px;
  }
`;
export const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  button {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    cursor: pointer;
    background: transparent;
    border: none;
  }
  span {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 5px;
  }
  input {
    padding: 3px;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 1px 3px;
  margin: 5px;
  outline: none;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.5s;
  }
  &:active {
    transform: translateY(2px) translateX(2px);
    transition: 100ms ease-in;
  }
`;

// Payment Style

export const Payment = styled.div`
  width: 30%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  margin-top: 50px;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  h2 {
    font-weight: 700;
  }
  h3 {
    word-spacing: 4rem;
  }
`;
