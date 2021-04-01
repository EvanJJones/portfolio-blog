import React from 'react';
import styled from '@emotion/styled';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--switchBackgroundUnchecked);
  -webkit-transition: .4s;
  transition: .4s;
  &:before {
    border-radius: 34px;
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: 3px;
    bottom: 3px;
    background-color: var(--switchToggle);
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;
  ${SwitchInput}:checked + ${Slider}:before {
    -webkit-transform: translateX(19px);
    -ms-transform: translateX(19px);
    transform: translateX(19px);
  }
  ${SwitchInput}:checked + ${Slider} {
    background-color: var(--switchBackgroundChecked);
  }
`;

const SwitchText = styled.span`
  color: var(--switchLabel);
  margin-right: .5rem;
`;

const Switch = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => {
      if (theme == null) {
        return null;
      }
      return (
        <Container>
          <SwitchText>
            Dark?
          </SwitchText>
          <SwitchLabel>
            <SwitchInput
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <Slider checked={theme === 'dark'} />
          </SwitchLabel>
        </Container>
      );
    }}
  </ThemeToggler>
);
export default Switch;
