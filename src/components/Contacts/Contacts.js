import React from 'react';
import {
  ContactsWrapper,
  ContentWrapper,
  SocialMedia,
  ContactInfo,
  SocialLink,
} from './style';
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contacts = () => {
  return (
    <ContactsWrapper>
      <ContentWrapper>
        <ContactInfo>
          <p>
            If you have any idea or a question
            <br /> please contact us via any links below
          </p>
        </ContactInfo>
        <SocialMedia>
          <SocialLink href="https://github.com/RustamYuburov" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/bookshop.org/"
            target="_blank"
          >
            <FaFacebookF />
          </SocialLink>
          <SocialLink href="https://twitter.com/bookshop_org" target="_blank">
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/bookshop_org/"
            target="_blank"
          >
            <FaInstagram />
          </SocialLink>
        </SocialMedia>
      </ContentWrapper>
    </ContactsWrapper>
  );
};

export default Contacts;
