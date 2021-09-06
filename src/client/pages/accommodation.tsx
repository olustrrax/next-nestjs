import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { NextPage } from 'next'
import { Container, LayoutTemplate } from '../components/layout'
const Accommodation: NextPage = () => {
  return (
    <LayoutTemplate title="Accommodations">
      <main className={styles.main}>
        <h1 className={styles.title}>Accommodations</h1>
      </main>
      <Container>
        <h1>Pattaya: </h1>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSandboxbeachfrontvilla%2Fposts%2F884603971875697&width=750&show_text=true&appId=197485464188864&height=1031"
          width="750"
          height="1031"
          style={{ border: 'none', overflow: 'scroll' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </LayoutTemplate>
  )
}

export default Accommodation
