import styled, { css } from "styled-components";
import { SpaceProps, space } from "styled-system";

export const BaseInput = css<{ hasError: boolean }>`
  ${space}
  border-radius: 20px;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding: 20px 24px;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid;
  background-color: ${(props) => props.theme.colors.gray[850]};
  border-color: ${(props) => props.theme.colors.gray[850]};
  transition: border-color 0.25s ease-in-out;
  width: 100%;
  &::placeholder {
    color: #777777;
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.purple};
  }
  ${(props) =>
    props.hasError &&
    css`
      border-color: ${props.theme.colors.red};
    `};
`;

const Component = styled.input`
  ${BaseInput}
`;

type InputProps = {
  register: (name: string, options: any) => void;
  name: string;
  placeholder?: string;
  errors?: any;
} & SpaceProps;

const Input = ({
  register,
  name,
  placeholder,
  errors,
  ...style
}: InputProps) => {
  return (
    <Component
      placeholder={placeholder}
      hasError={errors[name]}
      {...register(name, { required: true })}
      {...style}
    />
  );
};

Input.defaultProps = {
  placeholder: "",
  errors: {},
};

export default Input;
