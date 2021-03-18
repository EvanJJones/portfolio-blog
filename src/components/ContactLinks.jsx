import React from 'react';
import styled from '@emotion/styled';
import useDarkStore from '../state/useDarkStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* width: 100%; */
  margin: 0 0 0 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Vollkorn', 'Bitter', serif;
  color: ${(props) => (!props.dark ? props.theme.colors.contactLink : props.theme.altColors.contactLink)};
  margin: 0 0 0 1rem;
  &:hover {
    color: ${(props) => (!props.dark ? props.theme.colors.contactLinkHover : props.theme.altColors.contactLinkHover)};
  }
`;

const ContactLabel = styled.span`
  font-size: 2rem;
  color: ${(props) => (!props.dark ? props.theme.colors.contactLabel : props.theme.altColors.contactLabel)};
`;

const ContactLinks = () => {
  const dark = useDarkStore((state) => state.dark);
  return (
    <Container>
      <ContactLabel dark={dark}>Links:</ContactLabel>
      <Link dark={dark} href="https://github.com/EvanJJones">Github</Link>
      <Link dark={dark} href="https://www.linkedin.com/in/evanjjones/">LinkedIn</Link>
      <Link dark={dark} href="/contact">Contact</Link>
    </Container>
  );
};
export default ContactLinks;
