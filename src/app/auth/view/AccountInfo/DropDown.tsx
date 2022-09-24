import {
  Typography,
  Divider
} from '@components'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'
import { DropDownContainer, Option, Options } from './styled'

type DropDownProps = {
  name?: string | null
  isLight: boolean
  hidden?: boolean
}

const handleSignOut = () => {
  signOut()
}

const DropDown: FC<DropDownProps> = ({ name, isLight, hidden }) => {
  return (
    <DropDownContainer hidden={!hidden}>
      <Options>
        <div className="px-3 py-2">
          <Typography
            className='text-start'
            variant='small'
            color={isLight ? 'secondary' : 'light'}
            fontWeight={500}
          >👋&nbsp; Hey, {name}</Typography>
        </div>
      </Options>
      <Divider />
      <Options>
        <Link href='/login' passHref>
          <Option as='a'>Configurar Perfil</Option>
        </Link>

        <Option type='button' onClick={handleSignOut}>Log out</Option>
      </Options>
    </DropDownContainer>
  )
}

export default DropDown
