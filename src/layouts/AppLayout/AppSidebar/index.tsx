import { Divider, Switch, Typography } from '@components'
import { SidebarWrapper, SidebarMenu } from './styled'
import Menu from './Menu'
import { menuItems, categoryItems } from './itemsOfSideBar'

const AppSidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu>
        <Menu title="menú" items={menuItems} />
        <Divider className="my-4" />
        <Menu title="categorías" items={categoryItems} />
        <Divider className="my-4" />
        <div className='d-flex align-items-center gap-4'>
          <Switch defaultChecked={true} />
          <Typography variant='small' color='gray'>Dark mode</Typography>
        </div>
      </SidebarMenu>
    </SidebarWrapper>
  )
}

export default AppSidebar
