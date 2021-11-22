import React, { ReactElement } from 'react'
import Page from '../components/@shared/Page'
import { Link, PageProps } from 'gatsby'

export default function PageGatsbyNotFound(props: PageProps): ReactElement {
  return (
    <Page
      title="404 - Oops, that did not work"
      description="You just hit a route that doesn&#39;t exist... the sadness."
      uri={props.uri}
      headerCenter
    >
      <Link to="/">Back to the overview</Link>
    </Page>
  )
}
