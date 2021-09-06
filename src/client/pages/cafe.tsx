import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { LayoutTemplate, Container } from '../components/layout'

export default function Cafe() {
  return (
    <LayoutTemplate title="Café">
      <main className={styles.main}>
        <h1 className={styles.title}>Café</h1>
      </main>
      <Container>
        <h1>Pattaya: </h1>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSeabearMeetalay%2Fposts%2F891775961545377&width=750&show_text=true&appId=197485464188864&height=1026"
          width="750"
          height="1026"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSeabearMeetalay%2Fposts%2F888425288547111&width=750&show_text=true&appId=197485464188864&height=976"
          width="750"
          height="976"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSeabearMeetalay%2Fposts%2F882222039167436&width=750&show_text=true&appId=197485464188864&height=982"
          width="750"
          height="982"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </LayoutTemplate>
  )
}
