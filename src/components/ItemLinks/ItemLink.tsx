import { ItemLink } from './styles'
import { motion } from 'framer-motion'

type LinkProps = {
  link: string
  title: string
}

export const LinkItem = ({ link, title }: LinkProps) => {
  return (
    <li>
      <ItemLink to={link}>
        {({ isActive, isPending, isTransitioning }) => (
          <>
            {title}
            {isActive ? (
              <motion.div layoutId="itemLink" className="select" />
            ) : null}
          </>
        )}
      </ItemLink>
    </li>
  )
}
