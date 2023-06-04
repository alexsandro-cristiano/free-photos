import { UploadForm } from "../../components/UploadForm";
import { useFirestore } from "../../hooks/useFirestore";
import { Container, Content, Grid, Main, SubTitle, Title } from "./styles";

export function Gallery() {
  const { docs } = useFirestore("images");
  return (
    <Main>
      <Container>
        <Content>
          <Title>Make Free</Title>
          <SubTitle>add a picture and make available to the wold</SubTitle>
          <UploadForm />
        </Content>
        <Grid>
          {docs &&
            docs.map((doc) => (
              <div>
                <img src={doc.url} alt="" />
              </div>
            ))}
        </Grid>
      </Container>
    </Main>
  );
}
