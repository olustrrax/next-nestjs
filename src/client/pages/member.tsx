import styles from '../styles/Home.module.css'
import { LayoutTemplate, Container } from '../components/layout'
import { NextPage } from 'next'

const Member: NextPage = () => {
  return (
    <LayoutTemplate title="Member List">
      <main className={styles.main}>
        <h1 className={styles.title}>Member List (Round1)</h1>
      </main>
      <Container>
        <ul>
          <li>Petch</li>
          <li>Meow</li>
          <li>Pa</li>
          <li>Mookky</li>
          <li>Mean</li>
          <li>Chaii</li>
          <li>Now</li>
          <li>Taeto</li>
        </ul>
      </Container>
    </LayoutTemplate>
  )
}
export default Member
