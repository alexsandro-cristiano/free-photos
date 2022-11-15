import { Card } from '../../components/Card'
import { GalleryContainer } from './styles'

export function Gallery() {
  return (
    <GalleryContainer>
      <ul>
        <Card
          urlImage={
            'https://images.unsplash.com/photo-1664825450999-24942723a7aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
          }
        />

        <Card
          urlImage={
            'https://images.unsplash.com/photo-1667584413030-d4362e0f9481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          }
        />
        <Card
          urlImage={
            'https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'
          }
        />
        <Card
          urlImage={
            'https://images.unsplash.com/photo-1664825450999-24942723a7aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
          }
        />
        <Card
          urlImage={
            'https://images.unsplash.com/photo-1667471728601-cc76d2a160e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
          }
        />
        <Card
          urlImage={
            'blob:https://web.whatsapp.com/95a5065a-93f7-461a-83eb-ae7e1295d7c2'
          }
        />
        <Card
          urlImage={
            'https://images.unsplash.com/photo-1667133041438-92d54d7c5bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'
          }
        />

        <Card
          urlImage={
            'https://images.unsplash.com/photo-1667420420282-ad2653e2b20b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80'
          }
          title={'lua'}
        />
        <Card
          urlImage={
            'https://images.unsplash.com/photo-1664795522436-a114faf594fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
          }
        />
      </ul>
    </GalleryContainer>
  )
}
