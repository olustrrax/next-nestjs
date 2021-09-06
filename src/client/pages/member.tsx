import styles from '../styles/Home.module.css'
import { LayoutTemplate, Container } from '../components/layout'
import { NextPage } from 'next'

const Member: NextPage = () => {
  return (
    <LayoutTemplate title="Member List">
      <main className={styles.main}>
        <h1 className={styles.title}>Member List (Final!)</h1>
      </main>
      <Container>
        <p style={{ textAlign: 'center', fontSize: '2rem' }}>
          Petch (Leader) <br />
          Meow (อาหาร?) <br />
          Pa (เห) <br />
          Mookky (ที่พัก) <br />
          Mean (Entertainer) <br />
          Kie <br />
          Chaii <br />
          Now (Entertainer) <br />
          Taeto (Entertainer) <br />
          Boom <br />
          Ice ( \w Online Meeting)
        </p>
      </Container>
    </LayoutTemplate>
  )
}
export default Member
