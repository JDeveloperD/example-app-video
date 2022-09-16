import { Divider } from '@components'
import { SidebarWrapper, SidebarMenu } from './styled'
import Menu from './Menu'
import { menuItems, categoryItems } from './itemsOfSideBar'
import { SwitchTheme } from '@styles'

const AppSidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu>
        <Menu title="menú" items={menuItems} />
        <Divider className="my-4" />
        <Menu title="categorías" items={categoryItems} />
        <Divider className="my-4" />
        <SwitchTheme />
      </SidebarMenu>
    </SidebarWrapper>
  )
}

export default AppSidebar
