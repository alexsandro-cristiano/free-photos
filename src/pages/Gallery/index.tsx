import { UploadForm } from "../../components/UploadForm";
import { Container, Content, Main, SubTitle, Title } from "./styles";

export function Gallery() {
  return (
    <Main>
      <Container>
        <Content>
          <Title>Make Free</Title>
          <SubTitle>add a picture and make available to the wold</SubTitle>
          <UploadForm />
        </Content>
      </Container>
    </Main>
  );
}
