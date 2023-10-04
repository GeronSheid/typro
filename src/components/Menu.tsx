import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Icon1 } from "../assets/dns.svg";
import { ReactComponent as Icon2 } from "../assets/check-box.svg";
import { ReactComponent as Icon3 } from "../assets/people-alt.svg";
import { ReactComponent as Icon4 } from "../assets/business-center.svg";
import { ReactComponent as Icon5 } from "../assets/donut-small.svg";
import { Button } from "../UI/Button";


const mockup = [
  { src: "/", text: "Проверки", Image: Icon1 },
  { src: "/templates", text: "Шаблоны задач", Image: Icon2 },
  { src: "/inspectors", text: "Проверяющие", Image: Icon3 },
  { src: "/employees", text: "Сотрудники", Image: Icon4 },
  { src: "/statistics", text: "Статистика", Image: Icon5 },
];


interface IMenuHeaderProps {
  gap?: string
}


const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 12px;
  border-radius: 8px;
  color: #9a9c9c;
  transition: color 0.2s ease-in, background-color 0.2s ease-in;
  & > svg {
    transition: fill 0.2s ease-in;
  }
  &.active {
    background-color: #e8e8e8;
    color: #2c3030;
    & > svg {
      fill: #14b890;
    }
  }
`;

const StyledMenu = styled.div`
  max-width: 206px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 16px;
  background-color: #F3F3F3;
`;

const MenuHeader = styled.div<IMenuHeaderProps>`
  display: flex;
  flex-direction: column;
  gap: ${({gap}) => gap}
`


export const Menu = () => {
  return (
    <StyledMenu>
      <MenuHeader gap="28px">
        <img src={logo} alt="logo" height="32" width="123" />
        <ul>
          {mockup.map(({ src, text, Image }) => (
            <Item key={src} to={src}>
              <Image fill="#9A9C9C" />
              {text}
            </Item>
          ))}
        </ul>
      </MenuHeader>
      <Button type='secondary'>🛈  Обратная связь</Button>
    </StyledMenu>
  );
};
