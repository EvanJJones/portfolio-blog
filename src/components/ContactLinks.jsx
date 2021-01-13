import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const LinkBox = styled.div`
  border: 3px solid black;
  width: 25%;
`;

const ContactLinks = () => (
  <Container>
    <LinkBox>Github</LinkBox>
    <LinkBox>LinkedIn</LinkBox>
    <LinkBox>Email</LinkBox>
  </Container>
);

export default ContactLinks;
