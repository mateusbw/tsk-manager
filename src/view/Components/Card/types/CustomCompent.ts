import { SpaceProps } from "styled-system";

export type CustomComponent = {
  children?: React.ReactNode;
  id?: string;
  "data-testid"?: string;
} & SpaceProps;
