import React, { ReactElement } from 'react'
import Dotdotdot from 'react-dotdotdot'
import * as styles from './ResourceTeaser.module.css'
import LinkOpener from './LinkOpener'
import { Resource } from '../../@types/Resource'
import { usePlausible } from '../../hooks/usePlausible'

export interface ResourceTeaserProps extends Resource {
  trackEventGoal?: string
}

export function ResourceTeaser(props: ResourceTeaserProps): ReactElement {
  const { title, desc, url, trackEventGoal } = props
  const { trackGoal } = usePlausible()

  const trackResourceClick = () => {
    trackGoal(trackEventGoal)
  }

  return (
    <article className={styles.teaser}>
      <LinkOpener
        uri={url}
        className={styles.link}
        openNewTab
        onClick={trackEventGoal && trackResourceClick}
      >
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
