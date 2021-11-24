import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactElement } from 'react'
import { Resource, ResourceCategory } from '../../@types/Resource'
import * as styles from './index.module.css'
import { ResourceTeaser } from './ResourceTeaser'
import Tabs from './Tabs'

const contentQuery = graphql`
  query ResourceQuery {
    content: file(relativePath: { eq: "resources.json" }) {
      childContentJson {
        resources {
          title
          desc
          url
        }
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

interface ResourceData {
  resources: Resource[]
  categories: ResourceCategory[]
}

export default function PageHome(): ReactElement {
  const data = useStaticQuery(contentQuery)
  const { resources, categories }: ResourceData = data.content.childContentJson

  const defaultTabIndex = categories.findIndex((c) =>
    c.title.toLowerCase().includes('compute-to-data')
  )

  const getResourceList = (
    resources: Resource[],
    trackEventGoal?: string
  ): ReactElement => {
    return (
      <div className={styles.resourceList}>
        {resources.map((resource) => (
          <ResourceTeaser
            key={resource.url}
            {...resource}
            trackEventGoal={trackEventGoal}
          />
        ))}
      </div>
    )
  }

  const tabs = categories.map((category: ResourceCategory) => {
    const track = category.title.toLowerCase().includes('compute-to-data')
      ? 'CtDResource'
      : undefined
    return {
      title: category.title,
      content: getResourceList(category.resources, track)
    }
  })

  return (
    <>
      <div className={styles.header}>{getResourceList(resources)}</div>
      <div className={styles.tabs}>
        <Tabs
          items={tabs}
          className={styles.tabs}
          defaultIndex={defaultTabIndex}
        />
      </div>
    </>
  )
}
