import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const ContentWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  // color: white;
  font-weight: 800;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
    & a {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
`;

export const ShopWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  padding: 20px 40px;
  margin: 20px 40px;
  // background-image: linear-gradient(to bottom right, #f5f7fa, #c3cfe2);
  // border: solid black;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
`;

export const SmallText = styled.p`
  // margin: 30px 0;
  // font-family: 'IBM Plex Mono', monospace;
  // font-size: 1.5rem;
  // text-shadow: 3px 3px 4px rgba(138, 82, 82);
  color: #000;
  font-size: 1.8rem;
  letter-spacing: 0.5px;
  font-weight: 900;
  font-family: 'Julius Sans One', serif;
  line-height: 45px;
  text-align: center;
  text-shadow: 0 1px 1px #fff;
  padding: 20px;
`;

export const BookCard = styled.div`
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  margin: 10px 10px 20px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    height: 55vh;
  }
  // .card-image {
  //   height: 60vh;
  //   width: 280px;
  //   background-color: #333;
  //   background-position: center;
  //   background-size: cover;
  // }
  h1,
  p {
    font-size: 19px;
    font-family: 'Julius Sans One', sans-serif, monospace;
    font-weight: bold;
    margin-top: 8px;
  }
  span {
    font-size: 15px;
    font-family: 'Julius Sans One', sans-serif, monospace;
    letter-spacing: 1px;
    // background-color: #e3e3e3;
    border-radius: 2px;
    padding: 2px 4px;
    margin-top: 8px;
  }
  @media (max-width: 950px) {
    img {
      height: 40vh;
    }
  }
  @media (max-width: 750px) {
    img {
      height: 35vh;
    }
  }
`;

export const ImgCover = styled.img`
  height: 35px;
`;

export const BookWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 2.5rem;
  gap: 2rem
  --delay: 0;
	--duration: 1.3s;
	--iterations: 1;

  img {
    height: 70vh;
    margin: 30px;
  }

  @media (max-width: 950px) {
    img {
      height: 55vh;
    }
  }
  @media (max-width: 750px) {
    img {
      height: 45vh;
    }
  }

  h1 {
    margin: 10px;
  }

  span {
    font-family: 'Julius Sans One', sans-serif, monospace;
  }

  p,
  &:after {
    animation-delay: var(--animation-delay, 2s);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 1.2s);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
  }

  p {
    --animation-delay: var(--delay, 0);
    --animation-duration: var(--duration, 1.5s);
    --animation-iterations: var(--iterations, 1);
    position: relative;
    font-family:  'Poppins', sans-serif, monospace;
    font-size: 1rem;
    font-weight: 500;
    animation-name: clip-text;
    color: #000;
    text-align: left;
    cursor: default;
    
    &::after {
      content: "";
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000;
      transform: scaleX(0);
      transform-origin: 0 50%;
      pointer-events: none;
      animation-name: text-revealer;
    }
    
  }
  
  
  @keyframes clip-text {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
  
  
  @keyframes text-revealer {
    
    0%, 50% {
      transform-origin: 0 50%;
    }
    
    60%, 100% {
      transform-origin: 100% 50%;		
    }
  
    
    60% {
      transform: scaleX(1);
    }
    
    100% {
      transform: scaleX(0);
    }
  }
`;

export const BookInfo = styled.div`
  margin: 40px;
  font-size: 15px;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  // border: solid;
  margin: -25px auto 100px auto;
  padding: 10px;
  @media (max-width: 950px) {
    flex-direction: column;
  }8
  }
`;

// export const Button = styled.div`
//   width: 100%;
//   margin: 10px 15px;
//   text-align: center;

//   button {
//     outline: none;
//     letter-spacing: 0.5px;
//     width: 200px;
//     height: 40px;
//     padding: 25px;
//     border: 2px solid #000;
//     font-size: 1rem;
//     font-family: 'Poppins', sans-serif;
//     font-weight: 600;
//     background: transparent;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     position: relative;
//     display: inline-block;

//     background: #000;
//     color: #fff;
//     line-height: 42px;
//     padding: 0;
//     border: none;

//     &:hover {
//       background: white;
//       color: #000;
//       box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
//         7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
//     }
//     &:before,
//     &:after {
//       content: '';
//       position: absolute;
//       top: 0;
//       right: 0;
//       height: 2px;
//       width: 0;
//       background: #000;
//       transition: 400ms ease all;
//     }

//     &:after {
//       right: inherit;
//       top: inherit;
//       left: 0;
//       bottom: 0;
//     }

//     &:hover:before,
//     &:hover:after {
//       width: 100%;
//       transition: 800ms ease all;
//     }
//   }
// `;
