import { AiOutlineSend, BiMicrophone, Button, MdAttachFile, MdOutlineTagFaces } from '@components'
import TextAreaRezise from '@components/inputs/TextAreaResize'
import { ChatBoxInputPanelBackground } from './styled'

const BoxInputPanel = () => {
  return (
    <ChatBoxInputPanelBackground>
      <Button variant="icon" color='gray'>
        <MdAttachFile />
      </Button>
      <TextAreaRezise
        onChange={(e) => console.log(e.target.value)}
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
    </ChatBoxInputPanelBackground>
  )
}

export default BoxInputPanel
