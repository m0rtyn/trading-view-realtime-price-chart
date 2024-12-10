import { FC } from 'react'
import { Flex, Link } from '@radix-ui/themes'
import { Link as RouterLink } from 'react-router-dom'
import { RadixText } from 'shared/ui'
import styles from '../main-layout.module.scss'

interface FooterLinksSectionProps {
  section: {
    title: string
    links: {
      name: string
      path: string
    }[]
  }
}
export const FooterLinksSection: FC<FooterLinksSectionProps> = ({
  section
}) => {
  return (
    <Flex
      direction={'column'}
      gap={'4'}
    >
      <RadixText weight={'bold'}>{section.title}</RadixText>
      <Flex
        gap={'3'}
        direction={'column'}
      >
        {section.links.map(link => {
          return (
            <FooterLink
              key={link.name}
              link={link}
            />
          )
        })}

        {/* TODO: Add modal opening logic for the "report a bug" and "contact us" links*/}
      </Flex>
    </Flex>
  )
}

interface FooterLinkProps {
  link: {
    name: string
    path: string
  }
}
const FooterLink: FC<FooterLinkProps> = ({ link }) => (
  <Link
    className={styles.footerLink}
    weight={'medium'}
    asChild
  >
    <RouterLink to={link.path}>{link.name}</RouterLink>
  </Link>
)
