import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  height: 3vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.timelineBackground};
  padding-left: 1rem;
`;

const Timeline = () => (
  <Footer>
    Stuff here
  </Footer>
);

export default Timeline;
