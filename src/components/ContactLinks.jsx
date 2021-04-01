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
  color: var(--contactLink);
  margin: 0 0 0 1rem;
  &:hover {
    color: var(--contactLinkHover);
  }
`;

const ContactLabel = styled.span`
  font-size: 2rem;
  color: var(--contactLabel);
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
