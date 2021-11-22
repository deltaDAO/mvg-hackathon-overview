import React, { ReactElement } from 'react'
import Styles from './components/@shared/Styles'
import * as styles from './App.module.css'
import Footer from './components/@shared/Footer'

export default function App({
  children
}: {
  children: ReactElement
}): ReactElement {
  return (
    <Styles>
      <div>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </Styles>
  )
}
