import styled from "styled-components";
import { SpaceProps } from "styled-system";
import { BaseInput } from "../Input/Input";

type TextAreaProps = {
  register: (name: string, options: any) => void;
  name: string;
  rows?: number;
  placeholder?: string;
  errors?: any;
} & SpaceProps;

const BaseTextArea = styled.textarea`
  resize: vertical;
  ${BaseInput}
`;

const TextArea = ({
  register,
  name,
  placeholder,
  rows,
  errors,
  ...space
}: TextAreaProps) => {
  return (
    <BaseTextArea
      placeholder={placeholder}
      rows={rows}
      {...register(name, { required: true })}
      hasError={errors[name]}
      {...space}
    />
  );
};

TextArea.defaultProps = {
  rows: 1,
  placeholder: "",
  errors: {},
};

export default TextArea;
