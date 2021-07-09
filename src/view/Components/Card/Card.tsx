import styled from "styled-components";
import { space } from "styled-system";
import { CustomComponent } from "./types/CustomCompent";

const BaseCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  ${space}
`;

const Card = ({ children, ...style }: CustomComponent) => {
  return <BaseCard {...style}>{children}</BaseCard>;
};

export default Card;
