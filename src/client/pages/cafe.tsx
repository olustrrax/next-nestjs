import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import { LayoutTemplate, Container } from '../components/layout';

export default function Cafe() {
  return (
    <LayoutTemplate title="Café">
      <main>
        <h1>
        Café
        </h1>
      </main>
        
      <Container>
        <h1>Pattaya: </h1>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkeptbangsaray%2Fposts%2F4405681079489442&width=750&show_text=true&appId=197485464188864&height=1159" width="750" height="1159" style={{ border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <h1>HuaHin: </h1>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLazydayhuahin%2Fposts%2F2888596294694477&width=750&show_text=true&appId=197485464188864&height=982" width="750" height="982" style={{ border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </Container>
    </LayoutTemplate>
  )
}