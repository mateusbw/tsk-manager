import styled, { css } from "styled-components"
import { darken, lighten } from "polished"
import { SpaceProps, space } from 'styled-system';

type Props = {
    children: React.ReactNode,
    variant?: "primary" | "secondary" | "inverted" | "icon";
    callBack?: Function
} & SpaceProps

const BaseButton = styled.button<Props>`
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSizes.sm};
    min-width: 150px;
    height: 48px;
    border-radius: 20px;
    border: none;
    color: ${(props) => props.theme.colors.white};
    transition: background-color .2s ease-in-out;
    &:hover{
        cursor: pointer;
    }
    ${(props) =>props.variant === 'primary' && css`
        background-color: ${props.theme.colors.purple};
        &:hover{
            background-color: ${darken(0.1, props.theme.colors.purple)};
        }
    `}

    ${(props) =>props.variant === 'secondary' && css`
        background-color: ${props.theme.colors.gray[750]};
        &:hover{
            background-color: ${darken(0.1, props.theme.colors.gray[750])};
        }
    `}

    ${(props) =>props.variant === 'inverted' && css`
        background-color: ${props.theme.colors.gray[950]};
        border: 1px solid ${props.theme.colors.gray[750]};
        &:hover{
            background-color: ${lighten(0.1, props.theme.colors.gray[950])};
        }
    `}

    ${(props) =>props.variant === 'icon' && css`
        background-color: transparent;
        min-width: 0px;
        padding: 5px;
        height: auto;
        border-radius: 0;
        border: 1px solid transparent;
        transition: border-color .25s ease-in-out;
        &:hover{
            border-color:  ${props.theme.colors.purple};
        }
    `}

    ${space}
`

const Button = ({ children, callBack, variant = "primary", ...space}: Props) => {
    return (
        <BaseButton 
            onClick={(e) => callBack && callBack(e)}
            variant={variant}
            {...space}
        >
            {children}
        </BaseButton>
    )
}

export default Button
