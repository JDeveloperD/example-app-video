import ChatBoxDetail from './ChatBoxDetail'
import ChatBoxHeader from './ChatBoxHeader'
import ChatBoxInputPanel from './ChatBoxInputPanel'
import messages from '@database/messages'
import { useState } from 'react'
import groups from '@database/groups'

const ChatBox = () => {
  const [dataChat, setDataChat] = useState({
    messages: messages[1].messages,
    meta: {
      photo: '',
      name: 'Karol',
      typeGroup: 'PRIVATE',
      totalMembers: 3
    }
  })

  console.log(groups[1])

  return (
    <div className='h-100 d-flex flex-column gap-2'>
      <ChatBoxHeader
        {...dataChat.meta}
      />
      <ChatBoxDetail
        type='PRIVATE'
        messages={dataChat.messages}
      />
      <ChatBoxInputPanel />
    </div>
  )
}

export default ChatBox
