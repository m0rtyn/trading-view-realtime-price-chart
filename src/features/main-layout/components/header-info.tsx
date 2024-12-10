import React, { useEffect, useState } from 'react'
import { Text } from '@radix-ui/themes'
import classnames from 'classnames'
import { useLocation } from 'react-router-dom'
import { PAGE_TITLE_BY_ROUTE_MAP } from 'shared/constants'
import { useLoadAssets } from '../hooks/use-load-assets'
import styles from '../header.module.scss'

// eslint-disable-next-line max-statements
export const HeaderInfo: React.FC = () => {
  const [pageTitle, setPageTitle] = useState<null | string>(null)

  // const { globalBetsStatistics } = useGlobalBetsStatistics()
  // const { countDailyClosedGames } = globalBetsStatistics || {}
  useLoadAssets()

  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname

    const title = PAGE_TITLE_BY_ROUTE_MAP[pathname] || 'Not found'

    setPageTitle(title)
  }, [location])

  if (!pageTitle) return null

  // if (pageTitle === 'Home') {
  //   return <HeaderInfoDailyBets totalBets={countDailyClosedGames || 0} />
  // }

  return (
    <Text
      className={classnames(styles.headerInfo, 'color-white')}
      size={'4'}
      weight={'medium'}
    >
      {pageTitle}
    </Text>
  )
}
