import { User } from '@app/users'

export default interface Auth {
  user: Pick<User, 'nickname' | 'avatar' |'email'>
  accessToken: string
}
