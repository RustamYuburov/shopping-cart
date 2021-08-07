import React from 'react';
import { FooterWrapper, GithubLink } from './style.js';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright © 2021 Rustam Yuburov</p>
      <GithubLink href="https://github.com/RustamYuburov" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  );
};

export default Footer;
