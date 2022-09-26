import messages from '@database/messages'

export const getMessagesOfChat = (groupId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const totalMessages = messages.find(m => m.groupId === groupId)?.messages

      resolve(totalMessages || [])
    }, 1000)
  })
}
