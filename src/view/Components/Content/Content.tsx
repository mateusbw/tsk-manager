import styled from "styled-components";
import theme from "../../theme";
import Text from "../Text/Text";

const BaseContent = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 68px 16px 0px 16px;
  max-width: 1185px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  flex: 1;
`

const Footer = styled.div`
  width: 100%;
  text-align: center;
  border-top: 1px solid ${({theme}) => theme.colors.gray[750]};
  padding: 20px;
`;

type Props = {
  children: React.ReactNode
};
const Content = ({ children }:Props) => {
  return (
    <BaseContent>
      <Page>
        { children }
      </Page>
      <Footer>
        <Text as="p" variant="small" fontWeight={theme.fontWeights.thin}>Developed by Outboxup</Text>
      </Footer>
    </BaseContent>)
}

export default Content