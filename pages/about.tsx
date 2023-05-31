import Link from 'next/link'
import Layout from '../components/App'
import { Button, Container } from '@mantine/core'

const AboutPage = () => (
  <Layout title="About | A propos">
    <Container style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button component={Link} href="/" style={{}}>Home</Button>
    </Container>
  </Layout>
)

export default AboutPage
