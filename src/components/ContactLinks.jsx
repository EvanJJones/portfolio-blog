import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const LinkBox = styled.div`
  border: 2px solid black;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: 23%;
  text-align: center;
  padding: .2rem;
`;

const ContactLinks = () => (
  <Container>
    <LinkBox>Github</LinkBox>
    <LinkBox>LinkedIn</LinkBox>
    <LinkBox>Email</LinkBox>
  </Container>
);

export default ContactLinks;
