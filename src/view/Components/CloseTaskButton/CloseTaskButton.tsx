import Button from "../Button/Button"
import styled, { css, keyframes } from "styled-components"

const animation = keyframes`
    0%{opacity: 1; transform: scale(.5); background-color: transparent}
    100%{opacity: 0; transform: scale(1.8); background-color: white}
`



const BaseCloseTaskButton = styled(Button)<{isClosed:boolean}>`
    min-width: 0;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background-color: transparent;
    border: 3px solid ${(props) => props.theme.colors.purple};
    position: relative;
    margin-right: 20px;

    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: transparent;
    }
    ${(props) => props.isClosed && css`
        background-color: ${props.theme.colors.purple};
        &::after {
            animation: ${animation} .5s ease-in-out;
        }
    `}
`
type Props = {
    isClosed:boolean,
    onCloseCallback: Function,
    onTodoCallback: Function,
};

const CloseTaskButton = ({isClosed,onCloseCallback,onTodoCallback}:Props) => {
    const handleClick = () => {
        isClosed ? onTodoCallback() : onCloseCallback();
    };

    return (
        <BaseCloseTaskButton callBack={handleClick} isClosed={isClosed}>
            
        </BaseCloseTaskButton>
    )
}

export default CloseTaskButton
