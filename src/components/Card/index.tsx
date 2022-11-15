import { Container } from './styles'

interface CardProps {
  urlImage: string
  title?: string
}

export function Card({ urlImage, title }: CardProps) {
  return (
    <Container>
      <figure>
        <img src={urlImage} title={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Container>
  )
}
