import React, { ReactElement } from 'react'
import Dotdotdot from 'react-dotdotdot'
import * as styles from './ResourceTeaser.module.css'
import LinkOpener from './LinkOpener'
import { Resource } from '../../@types/Resource'

export function ResourceTeaser(props: Resource): ReactElement {
  const { title, desc, url } = props

  return (
    <article className={styles.teaser}>
      <LinkOpener uri={url} className={styles.link} openNewTab>
        <header>
          <Dotdotdot clamp={3}>
            <h1 className={styles.title}>{title}</h1>
          </Dotdotdot>
        </header>
        <div className={styles.content}>
          <Dotdotdot tagName="p" clamp={3}>
            {desc}
          </Dotdotdot>
        </div>
        <footer className={styles.foot}>
          <Dotdotdot tagName="p" clamp={1}>
            {url}
          </Dotdotdot>
        </footer>
      </LinkOpener>
    </article>
  )
}
