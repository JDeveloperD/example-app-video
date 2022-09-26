import { UserId } from '@app/users'
import { GroupChatId } from './GroupChat'

export type MessageChatId = string

export type MessageMeta = {
  sentBy: UserId
  sentAt: Date
  messageText: string
}

export interface MessageChat {
  id: MessageChatId
  groupId: GroupChatId
  messages: MessageMeta[]
}
