import React from 'react';
import styled from '@emotion/styled';

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
  color: #a15517;
  margin: 0 0 0 1rem;
  &:hover {
    color: #c5a167;
  }
`;

const ContactLabel = styled.span`
  font-size: 2rem;
`;

const ContactLinks = () => (
  <Container>
    <ContactLabel>Links:</ContactLabel>
    <Link href="https://github.com/EvanJJones">Github</Link>
    <Link href="https://www.linkedin.com/in/evanjjones/">LinkedIn</Link>
    <Link href="/contact">Contact</Link>
  </Container>
);

export default ContactLinks;
