import styled from 'styled-components'
import { DisplayProps, FlexboxProps, display, flexbox } from 'styled-system'

type Props = DisplayProps & FlexboxProps;

const CardHeader = styled.div<Props>`
    padding: 20px;
    background-color:  ${(props) => props.theme.colors.gray[850]};
    ${display}
    ${flexbox}
`

export default CardHeader
