import styled from "styled-components"
import { flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from "styled-system";

type Props = FlexboxProps & SpaceProps & LayoutProps;

const Flex = styled.div<Props>`
    display: flex;

    ${flexbox}
    ${layout}
    ${space}
`;

export default Flex
