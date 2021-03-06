import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { space } from "styled-system";
import { CustomComponent } from "../Card/types/CustomCompent";

type Props = {
  variant?: "primary" | "secondary" | "inverted" | "icon";
  callBack?: () => void;
  block?: boolean;
} & CustomComponent;

const BaseButton = styled.button<Props>`
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.sm};
  min-width: 150px;
  height: 48px;
  border-radius: 20px;
  border: none;
  color: ${(props) => props.theme.colors.white};
  transition: background-color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${props.theme.colors.purple};
      &:hover {
        background-color: ${darken(0.1, props.theme.colors.purple)};
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: ${props.theme.colors.gray[750]};
      &:hover {
        background-color: ${darken(0.1, props.theme.colors.gray[750])};
      }
    `}

    ${(props) =>
    props.variant === "inverted" &&
    css`
      background-color: ${props.theme.colors.gray[950]};
      border: 1px solid ${props.theme.colors.gray[750]};
      &:hover {
        background-color: ${lighten(0.1, props.theme.colors.gray[950])};
      }
    `}

    ${(props) =>
    props.variant === "icon" &&
    css`
      background-color: transparent;
      min-width: 0px;
      padding: 5px;
      height: auto;
      border-radius: 0;
      border: 1px solid transparent;
      transition: border-color 0.25s ease-in-out;
      &:hover {
        border-color: ${props.theme.colors.purple};
      }
    `}
    ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}
    ${space}
`;

const Button = ({ children, callBack, variant, ...style }: Props) => {
  return (
    <BaseButton
      onClick={() => callBack && callBack()}
      variant={variant}
      {...style}
    >
      {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  variant: "",
  callBack: undefined,
  block: false,
};

export default Button;
