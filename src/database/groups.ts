import users from './users'

export default [
  {
    id: 'group-uuid-1',
    createdAt: new Date(Date.UTC(2022, 8, 12, 20, 11, 3)),
    createdBy: 'user-uuid-1',
    modifiedAt: new Date(Date.UTC(2022, 8, 12, 21, 21, 4)),
    members: [
      users[0],
      users[1],
      users[2],
      users[3],
      users[4],
      users[5],
      users[6],
      users[7]
    ],
    recentMessage: {
      messageText: 'Last message group text',
      sentBy: 'user-uuid-5',
      sentAt: new Date(Date.UTC(2022, 8, 12, 21, 21, 3)),
      readBy: [
        {
          userId: 'user-uuid-2',
          readThe: new Date(Date.UTC(2022, 8, 12, 21, 15, 19))
        },
        {
          userId: 'user-uuid-5',
          readThe: new Date(Date.UTC(2022, 8, 12, 21, 12, 43))
        }
      ]
    },
    name: 'Grupo Química 2022-I',
    type: 'GROUP',
    figure: 'https://i.pravatar.cc/150?img=10'
  },
  {
    id: 'group-uuid-2',
    createdAt: new Date(Date.UTC(2022, 8, 6, 10, 48, 21)),
    createdBy: 'user-uuid-1',
    modifiedAt: new Date(Date.UTC(2022, 9, 25, 11, 33, 30)),
    members: [
      users[0],
      users[1]
    ],
    recentMessage: {
      sentBy: 'user-uuid-1',
      sentAt: new Date(Date.UTC(2022, 9, 25, 11, 33, 29)),
      messageText: 'What do u think about creating some asentAtional screens for our case?',
      readBy: [
        {
          userId: 'user-uuid-2',
          readThe: new Date(Date.UTC(2022, 9, 25, 11, 33, 28))
        },
        {
          userId: 'user-uuid-1',
          readThe: new Date(Date.UTC(2022, 9, 25, 11, 33, 28))
        }
      ]
    },
    name: null,
    type: 'PRIVATE',
    figure: null
  },
  {
    id: 'group-uuid-3',
    createdAt: new Date(Date.UTC(2022, 9, 6, 10, 48, 21)),
    createdBy: 'user-uuid-3',
    modifiedAt: new Date(Date.UTC(2022, 9, 25, 11, 33, 30)),
    members: [
      users[0],
      users[2]
    ],
    recentMessage: {
      sentBy: 'user-uuid-3',
      sentAt: new Date(Date.UTC(2022, 9, 25, 11, 33, 29)),
      messageText: 'What do u think about creating some asentAtional screens for our case?',
      readBy: [
        {
          userId: 'user-uuid-3',
          readThe: new Date(Date.UTC(2022, 9, 25, 11, 33, 28))
        }
      ]
    },
    name: null,
    type: 'PRIVATE',
    figure: null
  },
  {
    id: 'group-uuid-4',
    createdAt: new Date(Date.UTC(2022, 9, 6, 10, 48, 21)),
    createdBy: 'user-uuid-1',
    modifiedAt: new Date(Date.UTC(2022, 9, 25, 11, 33, 30)),
    members: [
      users[0],
      users[4]
    ],
    recentMessage: {
      sentBy: 'user-uuid-1',
      sentAt: new Date(Date.UTC(2022, 9, 25, 11, 33, 29)),
      messageText: 'What do u think about creating some asentAtional screens for our case?',
      readBy: [
        {
          userId: 'user-uuid-1',
          readThe: new Date(Date.UTC(2022, 9, 25, 11, 33, 28))
        }
      ]
    },
    name: null,
    type: 'PRIVATE',
    figure: null
  }
]
