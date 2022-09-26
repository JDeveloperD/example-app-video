import groups from '@database/groups'

export const getChatsOfUser = (userId: string): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // buscar al usuario en todos los grupo
      const chats: any[] = groups.filter(g => {
        return g.members.find(m => m.id === userId)
      })

      resolve(chats)
    }, 1000)
  })
}
