import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  height: 4vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.timelineBackground};
  border-top: 5px solid greenyellow;
  padding-left: 1rem;
`;

const Timeline = () => (
  <Footer>
    Stuff here
  </Footer>
);

export default Timeline;
