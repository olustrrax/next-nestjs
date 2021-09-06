import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { LayoutTemplate, Container } from '../components/layout'
import { NextPage } from 'next'
import layoutStyle from '../styles/Layout.module.scss'

const Restaurant: NextPage = () => {
  return (
    <LayoutTemplate title="Restaurants">
      <main className={styles.main}>
        <h1 className={styles.title}>Restaurants</h1>
      </main>
      <Container>
        <h1>Pattaya: </h1>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcafestorythailand%2Fposts%2F1015873995854389&width=750&show_text=true&appId=197485464188864&height=998"
          width="750"
          height="998"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAfterYum%2Fposts%2F987196532013540&width=750&show_text=true&appId=197485464188864&height=926"
          width="750"
          height="926"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </LayoutTemplate>
  )
}
export default Restaurant
