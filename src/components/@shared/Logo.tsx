import React, { ReactElement } from 'react'
import { ReactComponent as LogoAsset } from '../../images/gaia-x-logo.svg'
import { ReactComponent as LogoAssetOcean } from '@oceanprotocol/art/logo/logo.svg'
import * as styles from './Logo.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Logo({ ocean }: { ocean?: boolean }): ReactElement {
  const styleClasses = cx({
    logo: true,
    branding: !ocean
  })

  return ocean ? (
    <LogoAssetOcean className={styleClasses} />
  ) : (
    <LogoAsset className={styleClasses} />
  )
}
