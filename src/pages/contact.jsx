import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const MainContainer = styled.div`
  margin: 0 0 2rem 0;
  width: 90%;
  margin: auto;
  background-color: ${(props) => props.theme.colors.bodyBackground};
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 65%;
  }
`;

const Main = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  /* border: 2px solid ${(props) => props.theme.colors.bodyBorder}; */
  width: 90%;
  background-color: ${(props) => props.theme.colors.bodyBackground};
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 50%;
  }
`;

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Contact</title>
        <meta name="description" content="Contact Evan Jones" />
      </Helmet>
      <MainContainer>
        <Main>
          <ContactForm />
        </Main>
      </MainContainer>
    </Layout>
  );
}
