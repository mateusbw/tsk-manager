import styled, { css, keyframes } from "styled-components";
import Button from "../Button/Button";

const animation = keyframes`
    0%{opacity: 1; transform: scale(.5); background-color: transparent}
    100%{opacity: 0; transform: scale(1.8); background-color: white}
`;
type BaseCloseTaskButtonProps = {
  isClosed: boolean;
};
const BaseCloseTaskButton = styled(Button)<BaseCloseTaskButtonProps>`
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
  ${(props) =>
    props.isClosed &&
    css`
      background-color: ${props.theme.colors.purple};
      &::after {
        animation: ${animation} 0.5s ease-in-out;
      }
    `}
`;
type Props = {
  isClosed: boolean;
  onCloseCallback: () => void;
  onTodoCallback: () => void;
};

const CloseTaskButton = ({
  isClosed,
  onCloseCallback,
  onTodoCallback,
}: Props) => {
  const handleClick = () => {
    return isClosed ? onTodoCallback() : onCloseCallback();
  };

  return <BaseCloseTaskButton callBack={handleClick} isClosed={isClosed} />;
};

export default CloseTaskButton;
