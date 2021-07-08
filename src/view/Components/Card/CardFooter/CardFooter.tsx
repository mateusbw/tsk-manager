import styled from "styled-components";
import { TextAlignProps, textAlign } from "styled-system";

const CardFooter = styled.div<TextAlignProps>`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray[850]};
  ${textAlign}
`;

export default CardFooter;
