import styled from 'styled-components';
import { motion } from 'framer-motion';
import Homebackground from '../../assets/homepage-background.jpg';

export const HomeWrapper = styled(motion.div)`
  font-family: 'Poppins', sans-serif;
  color: white;
  font-weight: 800;
  margin-top: 9px;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(30, 12, 41, 0.5),
      rgba(30, 12, 41, 0.5)
    ),
    url(${Homebackground});
`;

export const ContentWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

export const SmallText = styled.p`
  margin: 20px 0;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.5rem;
  text-shadow: 3px 3px 4px rgba(138, 82, 82);
`;

export const BigText = styled.p`
  margin: 20px 0;
  font-size: 3rem;
  font-family: 'Big Shoulders Stencil Display', monospace;
  font-size: 55px;
  letter-spacing: 7px;
  background-color: black;
  padding: 6px 15px;
  border: solid 1px white;
`;

export const ButtonWrapper = styled.span`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 20px 15px;
  perspective: 1000px;

  & p {
    font-size: 19px;
    font-weight: 900;
    letter-spacing: 1px;
    transform-style: preserve-3d;
    transform: translateZ(-25px);
    transition: transform 0.25s;
    font-family: 'Poppins', sans-serif;
  }
  & p:before,
  & p:after {
    position: absolute;
    content: 'Go to shop';
    height: 55px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid black;
    box-sizing: border-box;
    border-radius: 5px;
  }
  & p:before {
    color: #fff;
    background: #000;
    transform: rotateY(0deg) translateZ(25px);
  }
  & p:after {
    color: #000;
    background: #fff;
    border: solid 4px;
    transform: rotateX(90deg) translateZ(25px);
  }
  & p:hover {
    transform: translateZ(-25px) rotateX(-90deg);
  }
`;

export const Underline = styled.img`
  width: 400px;
  margin: 20px 0;
`;
