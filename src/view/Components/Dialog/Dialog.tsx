import styled, { css, keyframes } from "styled-components";
import { transparentize } from "polished";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { CustomComponent } from "../Card/types/CustomCompent";

const fadeIn = keyframes`
    0% { opacity: 0; visibility: hidden}
    100% { opacity: 1; visibility: visible}
`;

const fadeOut = keyframes`
    100% { opacity: 0; visibility: hidden}
`;
const slideIn = keyframes`
    0% { transform: translateY(200%); }
    100% { transform: translateY(0); }
`;
const slideOut = keyframes`
    0% { transform: translateY(100px); }
    100% { transform: translateY(200%); }
`;
type BackgroundProps = { isOpened: boolean; firstCalled: boolean };
const Background = styled.div<BackgroundProps>`
  position: absolute;

  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) =>
    transparentize(0.1, props.theme.colors.gray[950])};

  ${(props) => {
    if (props.firstCalled) {
      return props.isOpened && props.firstCalled
        ? css`
            animation: ${fadeIn} 0.5s forwards;
          `
        : css`
            animation: ${fadeOut} 0.5s forwards;
          `;
    }
    return css`
      display: none;
    `;
  }}
`;

type BaseDialogProps = { isOpened: boolean; firstCalled: boolean };
const BaseDialog = styled.div<BaseDialogProps>`
  position: relative;
  padding: 60px 48px;
  max-width: 576px;
  background-color: ${(props) => props.theme.colors.gray[900]};
  border-radius: 20px;
  ${(props) => {
    if (props.firstCalled) {
      return props.isOpened
        ? css`
            animation: ${slideIn} 0.5s forwards;
          `
        : css`
            animation: ${slideOut} 0.5s forwards;
          `;
    }
    return "";
  }}
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

type DialogProps = {
  isOpened: boolean;
  onClose: () => void;
} & CustomComponent;

const Dialog = ({
  children,
  isOpened,
  onClose,
  ...customProps
}: DialogProps) => {
  const [firstCalled, setfirstCalled] = useState(false);

  useEffect(() => {
    if (isOpened && !firstCalled) setfirstCalled(true);
  }, [isOpened]);

  return (
    <Background isOpened={isOpened} firstCalled={firstCalled} {...customProps}>
      <BaseDialog isOpened={isOpened} firstCalled={firstCalled}>
        <CloseButton callBack={() => onClose()} variant="icon">
          <CloseIcon />
        </CloseButton>
        {children}
      </BaseDialog>
    </Background>
  );
};

export default Dialog;
