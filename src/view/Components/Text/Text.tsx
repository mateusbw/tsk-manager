import styled, { css } from "styled-components";
import {
  SpaceProps,
  space,
  fontWeight,
  FontWeightProps,
  ColorProps,
  color,
} from "styled-system";

type Variant = "large" | "medium" | "small";
type Props = {
  variant?: Variant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children?: React.ReactNode;
} & SpaceProps &
  FontWeightProps &
  ColorProps;

const TextSmall = css`
  font-size: ${(props): string => props.theme.fontSizes.sm};
  line-height: 26px;
`;

const TextMedium = css`
  font-size: ${(props): string => props.theme.fontSizes.md};
  line-height: 32px;
`;

const TextLarge = css`
  font-size: ${(props): string => props.theme.fontSizes.lg};
  line-height: 50px;
`;

const StyleText = css<Props>`
  ${(props) => props.variant === "small" && TextSmall}
  ${(props) => props.variant === "medium" && TextMedium}
        ${(props) => props.variant === "large" && TextLarge}
        ${space}
        ${fontWeight}
        ${color}
`;
const H1 = styled.h1<any>`
  ${StyleText}
`;
const H2 = styled.h2<any>`
  ${StyleText}
`;
const H3 = styled.h3<any>`
  ${StyleText}
`;
const H4 = styled.h4<any>`
  ${StyleText}
`;
const H5 = styled.h5<any>`
  ${StyleText}
`;
const H6 = styled.h6<any>`
  ${StyleText}
`;
const P = styled.p<any>`
  ${StyleText}
`;

const Text = ({ variant, as, children, ...styleProps }: Props) => {
  switch (as) {
    case "h1":
      return (
        <H1 variant={variant} {...styleProps}>
          {children}
        </H1>
      );
    case "h2":
      return (
        <H2 variant={variant} {...styleProps}>
          {children}
        </H2>
      );
    case "h3":
      return (
        <H3 variant={variant} {...styleProps}>
          {children}
        </H3>
      );
    case "h4":
      return (
        <H4 variant={variant} {...styleProps}>
          {children}
        </H4>
      );
    case "h5":
      return (
        <H5 variant={variant} {...styleProps}>
          {children}
        </H5>
      );
    case "h6":
      return (
        <H6 variant={variant} {...styleProps}>
          {children}
        </H6>
      );
    case "p":
      return (
        <P variant={variant} {...styleProps}>
          {children}
        </P>
      );
    default:
      return (
        <H1 variant={variant} {...styleProps}>
          {children}
        </H1>
      );
  }
};

Text.defaultProps = {
  variant: "large",
  as: "h1",
  children: "",
};
export default Text;
