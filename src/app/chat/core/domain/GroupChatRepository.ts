import { UserId } from '@app/users'
import { GroupChat, GroupChatId } from './GroupChat'
import { MessageChat } from './MessageChat'

export interface GroupChatRepository {
  getGroups(userId: UserId): Promise<GroupChat[]>
  getMessages(groupId: GroupChatId): Promise<MessageChat[]>
}
