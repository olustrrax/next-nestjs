import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import layoutStyle from '../styles/Layout.module.css'
import Head from 'next/head'

export interface IDiv {
  display?: string | undefined
  width?: string | undefined
  margin?: string | undefined
  padding?: string | undefined
  justifyContent?: string | undefined
  alignItems?: string | undefined
  textAlign?: string | undefined
}
export const Div = styled.div`
  ${(props: IDiv) => {
    return {
      display: props.display || 'block',
      width: props.width,
      margin: props.margin,
      padding: props.padding,
      'justify-content': props.justifyContent,
      'align-items': props.alignItems,
      'text-align': props.textAlign,
    }
  }}
`
export const LayoutTemplate = (props: any) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Div padding="1em 0">{props.children}</Div>
    </div>
  )
}

export const Container = styled.div`
  margin: auto;
  display: block;
  width: 750px;
`
