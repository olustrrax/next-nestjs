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
          Meow (Food Planner) <br />
          Pa (Treasurer) <br />
          Mookky (Accommodation Contact) <br />
          Mean (Entertainer) <br />
          Kie (Chief) <br />
          Chaii (Planner) <br />
          Now (Entertainer) <br />
          Taeto (Entertainer) <br />
          Boom ( \w Online Meeting) <br />
          Ice ( \w Online Meeting)
        </p>
      </Container>
    </LayoutTemplate>
  )
}
export default Member
