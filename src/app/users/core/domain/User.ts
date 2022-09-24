export type UserId = string

export type Country = {
  id: string
  name: string
}

export type City = {
  id: string
  name: string
  country: Country
}

export interface User {
  id?: UserId
  email: string
  firstName: string
  lastName?: string
  age?: number
  city: City,
  postalCode?: string
  aboutMe: Array<string> | string
  avatar: string
  nickname: string
}
