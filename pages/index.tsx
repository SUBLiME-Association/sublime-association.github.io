import Link from 'next/link'
import Layout from '../components/App'
import { Button, Container } from '@mantine/core'
const IndexPage = () => (
  <Layout title="Home | Accueil">
    <Container style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button component={Link} href="/about" style={{}}>About</Button>
    </Container>
  </Layout>
)

export default IndexPage
