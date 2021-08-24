import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const ContactsWrapper = styled.div`
  font-family: 'Julius Sans One', sans-serif;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & p {
    color: #000;
    font-size: 2.7rem;
    line-height: 45px;
    text-align: center;
    text-shadow: 0 3px 5px #fff;
    padding: 20px;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 5rem;
  @media (max-width: 768px) {
    gap: 3rem;
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ContactInfo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  color: black;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;
