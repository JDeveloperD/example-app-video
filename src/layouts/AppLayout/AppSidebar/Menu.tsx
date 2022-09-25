import { Badge, List, Typography } from '@components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

type MenuProps = {
  items: any[],
  title?: string
}

const Menu: FC<MenuProps> = ({ items, title }) => {
  const { asPath } = useRouter()

  return (
    <>
      {title && (
        <Typography
          variant="small"
          fontWeight={600}
          className="mb-4"
        >{title.toUpperCase()}</Typography>
      )}
      <List.List>
        {items.map(item => (
          <List.Item key={item.id}>
            <Link href={item.path} passHref>
              <List.Button active={item.path === asPath}>
                <List.Icon>
                  {item.icon}
                </List.Icon>
                <Typography variant='small'>
                  {item.name}
                </Typography>
                {item.badge && (
                  <Badge variant='dot' color={item.badge} />
                )}
              </List.Button>
            </Link>
          </List.Item>
        ))}
      </List.List>
    </>
  )
}

export default Menu
