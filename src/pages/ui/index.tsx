import { Col, Row } from '@components'
import { MessageChat, MessageGroup, MessageImage, MessageGroupWithAvatar, MessageAudio } from '@app/chat/view/MessageChat'
import { ChatBox } from '@app/chat/view'

const UIPage = () => {
  return (
    <>
      <div>
        <ChatBox />
      </div>
      <Row>
        <Col>
          <div>Mensaje normal</div>
          <div className="d-flex gap-3">
            <div>
              <div>Privado</div>
              <MessageChat
                date={new Date(Date.UTC(2022, 10, 25, 12, 45, 3))}
                isPrimary={true}
                text='Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.'
              />
              <MessageChat
                date={new Date(Date.UTC(2022, 10, 25, 12, 45, 3))}
                isPrimary={false}
                text='Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.'
              />
              <MessageImage
                date={new Date(Date.UTC(2022, 10, 25, 12, 45, 3))}
                isPrimary={false}
                src='https://cdn.pixabay.com/photo/2021/04/18/13/35/flowers-6188414_960_720.jpg'
              />
              <MessageAudio
                isPrimary={false}
                date={new Date(Date.UTC(2022, 10, 25, 12, 45, 3))}
                src="https://www.bensound.com/bensound-music/bensound-memories.mp3"
              />
            </div>
            <div>
              <div>Grupo</div>
              <MessageGroupWithAvatar
                className='mb-3'
                userPhoto='/img/avatar/avatar1.png'
                userName='Kiguk'
                messages={[
                  {
                    type: 'TEXT',
                    content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
                    sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
                  },
                  {
                    type: 'TEXT',
                    content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
                    sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
                  },
                  {
                    type: 'TEXT',
                    content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
                    sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
                  },
                  {
                    type: 'TEXT',
                    content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
                    sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
                  }
                ]}
              />
              <MessageGroup
                userName='Kiguk'
                isPrimary={true}
                messages={[
                  {
                    type: 'TEXT',
                    content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
                    sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
                  },
                  {
                    type: 'IMAGE',
                    content: 'https://cdn.pixabay.com/photo/2021/04/18/13/35/flowers-6188414_960_720.jpg',
                    sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
                  },
                  {
                    type: 'TEXT',
                    content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
                    sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
                  },
                  {
                    type: 'TEXT',
                    content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
                    sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
                  }
                ]}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default UIPage
