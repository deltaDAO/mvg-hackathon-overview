import React, { ReactElement } from 'react'
import Logo from './Logo'
import * as styles from './Header.module.css'
import Container from './Container'
import { graphql, useStaticQuery } from 'gatsby'

const contentQuery = graphql`
  query HeaderQuery {
    content: file(relativePath: { eq: "header.json" }) {
      childContentJson {
        hackathon
        date
      }
    }
  }
`

export default function Header(): ReactElement {
  const data = useStaticQuery(contentQuery)
  const { hackathon, date } = data.content.childContentJson

  return (
    <Container>
      <header className={styles.header}>
        <Logo />
        <div className={styles.hackathon}>
          <h1>Gaia-X Hackathon {hackathon}</h1>
          <span>{date}</span>
        </div>
      </header>
    </Container>
  )
}
