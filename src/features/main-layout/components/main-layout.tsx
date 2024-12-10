import { useRef, useState } from 'react'
import { useReactiveVar } from '@apollo/client'
import { Flex, ScrollArea } from '@radix-ui/themes'
import cn from 'classnames'
import { Outlet, useLocation } from 'react-router-dom'
import { MAIN_LAYOUT_SCROLL_VIEW_ID, RouterPathes } from 'shared/constants'
import { useScrollTop } from 'shared/hooks/use-scroll-top'
import { isChatOpenedVar } from 'shared/store/chat-state-store'
import { Footer } from './footer'
import { Header } from './header'
import styles from '../main-layout.module.scss'

// eslint-disable-next-line max-statements
export const MainLayout: React.FC = () => {
  const [isChatVisible, setIsChatVisible] = useState(true)
  const scrollAreaRef = useRef<HTMLDivElement | null>(null)
  useScrollTop(scrollAreaRef)

  const location = useLocation()
  const isEmptyPage = location.pathname === RouterPathes.passwordRecovery

  const isChatOpened = useReactiveVar(isChatOpenedVar)

  return (
    <div
      className={cn(styles.mainLayoutWrapper, {
        [styles.mainLayoutWrapperWithoutChat]: isEmptyPage || !isChatVisible
      })}
    >
      <main className={styles.content}>
        <Flex
          className={cn(styles.contentWrapper, {
            [styles.contentWrapperWithoutChat]: !isChatOpened
          })}
          pr={{ initial: '0', md: '4' }}
          pt={{ initial: '0', md: '2' }}
          direction={'column'}
          gap='4'
        >
          <Outlet />
        </Flex>
      </main>
    </div>
  )
}
