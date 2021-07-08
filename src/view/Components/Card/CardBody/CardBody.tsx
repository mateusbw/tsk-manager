import styled from "styled-components";
import { TextAlignProps, textAlign } from "styled-system";

const CardBody = styled.div<TextAlignProps>`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray[900]};
  ${textAlign}
`;

export default CardBody;
