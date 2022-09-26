import { Button } from '@components'
import { AiOutlineSend } from 'react-icons/ai'
import { BiMicrophone } from 'react-icons/bi'
import { MdAttachFile, MdOutlineTagFaces } from 'react-icons/md'
import { SendContainer, TextAreaController } from './styled'

const ChatContentSendBar = () => {
  return (
    <SendContainer>
      <Button variant="icon" color='gray'>
        <MdAttachFile />
      </Button>
      <TextAreaController
        placeholder="Enviar mensaje..."
        rows={1}
      />
      <Button variant="icon" color='gray'>
        <AiOutlineSend />
      </Button>
      <Button variant="icon" color='gray'>
        <MdOutlineTagFaces />
      </Button>
      <Button variant="icon" color='gray'>
        <BiMicrophone />
      </Button>
    </SendContainer>
  )
}

export default ChatContentSendBar
