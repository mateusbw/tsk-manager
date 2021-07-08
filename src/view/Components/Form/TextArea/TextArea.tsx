import styled from "styled-components"
import { BaseInput } from "../Input/Input"
import { SpaceProps } from 'styled-system';

type TextAreaProps = {
    register: Function,
    name: string,
    rows?: string,
    placeholder?: string,
    errors?: any,
} & SpaceProps

const BaseTextArea = styled.textarea`
    resize: vertical;
    ${BaseInput}
`

const TextArea = ({ register, name, placeholder = "", rows, errors, ...space }: TextAreaProps) => {
    return (
        <BaseTextArea placeholder={placeholder} rows={rows}  {...register(name, {required: true})} hasError={errors[name]} {...space}></BaseTextArea>
    )
}

export default TextArea