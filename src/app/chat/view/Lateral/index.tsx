import { BsThreeDotsVertical, Button, FiSearch, InputForm } from '@components'
import ChatList from '../ChatList'

const ChatLateral = ({ className }) => {
  return (
    <div className={className}>
      <div className="d-flex align-items-center gap-3 mb-3">
        <InputForm
          inputType='text'
          onSubmit={() => console.log('SUMIT')}
          placeholder='Buscar chats'
          iconButton={<FiSearch />}
        />
        <Button variant='icon' color='gray'>
          <BsThreeDotsVertical />
        </Button>
      </div>
      <ChatList />
    </div>
  )
}

export default ChatLateral
