import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  font-family: 'Poppins', sans-serif;
  align-items: center;

  min-height: 7vh;
  letter-spacing: 1px;
  background-color: rgb(0, 0, 0);
  color: white;
  color: rgb(138, 82, 82);
  font-size: 20px;
  box-shadow: rgba(30, 12, 41, 0.4) 0px 5px, rgba(18, 6, 26, 0.3) 0px 10px,
    rgba(35, 13, 48, 0.2) 0px 15px;

  & ul {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }

  & a {
    color: #eaeaea;
    text-decoration: none;
    cursor: 'pointer',
    letter-spacing: 0.1em;
    line-height: 0.4em;
    display: inline-block;
    padding: 10px 15px;
    position: relative;

    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: '';
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #eaeaea;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }

  & img {
    margin-top: 10px;
    width: 30px;
  }

  & span {
    font-size: 0.9rem;
    font-weight: 1000;
    margin: 10px 0 0 30px;
    padding: 2px 8px;
    border: none;
    border-radius: 50%;
    width: 5px;
    color: black;
    background-color: white;

    animation: fadeIn ease 1s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
