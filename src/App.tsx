import React, { ReactElement } from 'react'
import Styles from './components/@shared/Styles'
import * as styles from './App.module.css'
import Footer from './components/@shared/Footer'
import Header from './components/@shared/Header'

export default function App({
  children
}: {
  children: ReactElement
}): ReactElement {
  return (
    <Styles>
      <div>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </Styles>
  )
}
