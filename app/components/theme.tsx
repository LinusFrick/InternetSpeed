'use client';

import styled from "@emotion/styled";
import { useState, useEffect } from "react";

type IconProps = {
    activeTheme: string;
    theme: string;
  };
  
  const Icon = styled.span<IconProps>`
    font-size: 1.25rem;
  `;  

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
`;

type ToggleThumbProps = {
    activeTheme: string;
  };

  const ToggleThumb = styled.span<ToggleThumbProps>`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(props) =>
    props.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);
      
  return (
    <ToggleButton type="button" onClick={() => setActiveTheme(inactiveTheme)}>
        <ToggleThumb activeTheme={activeTheme} />
        <Icon activeTheme={activeTheme} theme="dark">🌙</Icon>
        <Icon activeTheme={activeTheme} theme="light">☀️</Icon>
    </ToggleButton>
  );
};

export default ThemeToggle;