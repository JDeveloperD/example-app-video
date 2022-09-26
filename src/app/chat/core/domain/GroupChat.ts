import { User, UserId } from '@app/users'
import { MessageMeta } from './MessageChat'

export type RecentMessageType = MessageMeta & {
  readBy: [
    {
      userId: UserId,
      readThe: Date
    }
  ]
}

export type GroupChatId = string

export interface GroupChat {
  id: GroupChatId
  createdAt: Date
  createdBy: UserId
  modifiedAt: Date
  members: User[]
  recentMessage: RecentMessageType
}
