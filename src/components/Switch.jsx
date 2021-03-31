import React from 'react';
import styled from '@emotion/styled';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

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
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: var(--switchToggle);
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  ${SwitchInput}:checked + ${Slider}:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
  ${SwitchInput}:checked + ${Slider} {
    background-color: var(--switchBackgroundChecked);
  }
`;

const Switch = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => {
      if (theme == null) {
        return null;
      }
      return (
        <div>
          Dark Mode
          <SwitchLabel>
            <SwitchInput
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <Slider checked={theme === 'dark'} />
          </SwitchLabel>
        </div>
      );
    }}
  </ThemeToggler>
);
export default Switch;
