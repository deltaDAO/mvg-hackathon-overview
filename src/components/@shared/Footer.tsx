import React, { ReactElement } from 'react'
import * as styles from './Footer.module.css'
import Markdown from './Markdown'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export default function Footer(): ReactElement {
  const { copyright } = useSiteMetadata()

  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          © {year} <Markdown text={copyright} />
        </div>
      </div>
    </footer>
  )
}
