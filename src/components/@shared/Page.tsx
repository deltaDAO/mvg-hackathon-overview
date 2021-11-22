import React, { ReactNode, ReactElement } from 'react'
import PageHeader from './PageHeader'
import Seo from './Seo'
import Container from './Container'

export interface PageProps {
  children: ReactNode
  title: string
  uri: string
  description?: string
  noPageHeader?: boolean
  headerCenter?: boolean
}

export default function Page({
  children,
  title,
  uri,
  description,
  noPageHeader,
  headerCenter
}: PageProps): ReactElement {
  const childElements = (
    <>
      {title && !noPageHeader && (
        <PageHeader
          title={title}
          description={description}
          center={headerCenter}
        />
      )}
      {children}
    </>
  )

  return (
    <>
      <Seo title={title} description={description} uri={uri} />
      <Container>{childElements}</Container>
    </>
  )
}
