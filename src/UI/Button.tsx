import React from "react";
import styled from "styled-components";

const typeHandler = (props: string) => {
  switch (props) {
    case "primary":
      return `color: #fff; 
              background-color: #14b890; 
              &:hover {
                background-color: #14B890
              }`;
    case "secondary":
      return `color: #9A9C9C; 
              background-color: transparent; 
              border: 1px solid #D5D5D5; 
              &:hover {
                color: #14b890; 
                border-color: #14b890; 
              }`;
    default:
      break;
  }
};
interface IType {
  type: string;
}

const StyledButton = styled.button<IType>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 11px;
  padding-bottom: 11px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  ${({ type }) => typeHandler(type)}
`;

export const Button = ({ type, children }: any) => {
  return (
    <>
      <StyledButton type={type}>{children}</StyledButton>
    </>
  );
};
