import styled from "styled-components";
import { SpaceProps, space } from "styled-system";

const BaseCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  ${space}
`;

type Props = {
  children: React.ReactNode;
} & SpaceProps;

const Card = ({ children, ...style }: Props) => {
  return <BaseCard {...style}>{children}</BaseCard>;
};

export default Card;
