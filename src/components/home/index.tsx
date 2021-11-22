import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactElement } from 'react'
import { ResourceCategory } from '../../@types/Resource'
import * as styles from './index.module.css'
import { ResourceTeaser } from './ResourceTeaser'
import Tabs from './Tabs'

const contentQuery = graphql`
  query ResourceQuery {
    content: file(relativePath: { eq: "resources.json" }) {
      childContentJson {
        categories {
          title
          resources {
            title
            desc
            url
          }
        }
      }
    }
  }
`

export default function PageHome(): ReactElement {
  const data = useStaticQuery(contentQuery)
  const { categories }: { categories: ResourceCategory[] } =
    data.content.childContentJson

  const defaultTabIndex = categories.findIndex((c) =>
    c.title.toLowerCase().includes('compute-to-data')
  )

  const tabs = categories.map((category: ResourceCategory) => ({
    title: category.title,
    content: (
      <div className={styles.resourceList}>
        {category.resources.map((resource) => (
          <ResourceTeaser key={resource.url} {...resource} />
        ))}
      </div>
    )
  }))

  return (
    <div className={styles.tabs}>
      <Tabs
        items={tabs}
        className={styles.tabs}
        defaultIndex={defaultTabIndex}
      />
    </div>
  )
}
