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
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkeptbangsaray%2Fposts%2F4405681079489442&width=750&show_text=true&appId=197485464188864&height=1159"
          width="750"
          height="1159"
          style={{ border: 'none', overflow: 'scroll' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstayclassyhuahin%2Fposts%2F881279539470779&width=750&show_text=true&appId=197485464188864&height=932"
          width="750"
          height="932"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDevillgroup%2Fposts%2F2128142910685420&width=750&show_text=true&appId=197485464188864&height=960"
          width="750"
          height="960"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <br />
        <h3>Pool Villa:</h3>
        <p>
          More Source:{' '}
          <a href="https://www.facebook.com/Devillgroup/">Discover</a>{' '}
        </p>

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
        <h1>HuaHin: </h1>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLazydayhuahin%2Fposts%2F2888596294694477&width=750&show_text=true&appId=197485464188864&height=982"
          width="750"
          height="982"
          style={{ border: 'none', overflow: 'scroll' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <br />

        <h1>Cha-Am: </h1>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1607971709396833%26id%3D238237953036889&width=750&show_text=true&appId=197485464188864&height=932"
          width="750"
          height="932"
          style={{ border: 'none', overflow: 'scroll' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <br />

        <h1>Pranburi: </h1>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faleentahuahin%2Fposts%2F10157781346466507&width=750&show_text=true&appId=197485464188864&height=1107"
          width="750"
          height="1107"
          style={{ border: 'none', overflow: 'scroll' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <p>
          More Source:{' '}
          <a href="https://reservations.travelclick.com/70899#/guestsandrooms">
            Reservation
          </a>{' '}
        </p>
      </Container>
    </LayoutTemplate>
  )
}

export default Accommodation
