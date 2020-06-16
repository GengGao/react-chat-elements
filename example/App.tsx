import Identicon from 'identicon.js';
import { loremIpsum } from 'lorem-ipsum';
import React, { createRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FaComments, FaSearch } from 'react-icons/fa';
import { Button, ChatList, Input, MessageList, Popup, SideBar } from '../src';
import { ChatItemProps } from '../src/ChatItem/ChatItem';
import {
  MessageBoxProps,
  MessageStatus,
  MessageType,
} from '../src/MessageBox/MessageBox';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function photo(size?: number) {
  return new Identicon(String(Math.random()) + String(Math.random()), {
    margin: 0,
    size: size || 20,
  }).toString();
}
function token() {
  return Math.round((Math.random() * 10) % 6);
}

function get(): [MessageType, MessageStatus] {
  var messageType = token();
  let status: MessageStatus = 'waiting';
  let type: MessageType = 'text';
  switch (messageType) {
    case 0:
      type = 'photo';
      status = 'sent';
      break;
    case 1:
      type = 'file';
      status = 'sent';
      break;
    case 2:
      type = 'system';
      status = 'received';
      break;
    case 3:
      type = 'location';
      break;
    case 4:
      type = 'spotify';
      break;
    default:
      type = 'text';
      status = 'read';
      break;
  }

  return [type, status];
}

function random(generate: 'message' | 'chat'): ChatItemProps | MessageBoxProps {
  switch (generate) {
    case 'message':
      const [type, status] = get();
      return {
        position: token() >= 1 ? 'right' : 'left',
        forwarded: true,
        replyButton: true,
        reply:
          token() >= 1
            ? {
                photoURL:
                  token() >= 1
                    ? `data:image/png;base64,${photo(150)}`
                    : undefined,
                title: loremIpsum({ count: 2, units: 'words' }),
                titleColor: getRandomColor(),
                message: loremIpsum({ count: 1, units: 'sentences' }),
              }
            : undefined,
        type: type,
        theme: 'white',
        view: 'list',
        title: loremIpsum({ count: 2, units: 'words' }),
        titleColor: getRandomColor(),
        text:
          type === 'spotify'
            ? ''
            : loremIpsum({ count: 1, units: 'sentences' }),
        uri:
          type === 'spotify'
            ? 'spotify:track:7wGoVu4Dady5GV0Sv4UIsx'
            : undefined,
        data: {
          uri: `data:image/png;base64,${photo(150)}`,
          status: {
            click: true,
            loading: 0.5,
          },
          size: '100MB',
          width: 300,
          height: 300,
          latitude: '37.773972',
          longitude: '-122.431297',
          staticURL:
            'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY',
        },
        onLoad: () => {
          console.log('Photo loaded');
        },
        status: status,
        date: new Date(),
        onReplyMessageClick: () => {
          console.log('onReplyMessageClick');
        },
        avatar: `data:image/png;base64,${photo()}`,
      };
    case 'chat':
      return {
        id: String(Math.random()),
        avatar: `data:image/png;base64,${photo()}`,
        avatarFlexible: true,
        statusColor: 'lightgreen',
        statusColorType:
          Math.round((Math.random() * 100) % 2) === 1 ? 'encircle' : undefined,
        alt: loremIpsum({ count: 2, units: 'words' }),
        title: loremIpsum({ count: 2, units: 'words' }),
        date: new Date(),
        subtitle: loremIpsum({ count: 1, units: 'sentences' }),
        unread: Math.round((Math.random() * 10) % 3),
      };
  }
}
export const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const [messageList, setMessageList] = useState<MessageBoxProps[]>([]);
  const inputRef = createRef<Input>();

  const addMessage = () => {
    setMessageList([...messageList, random('message') as MessageBoxProps]);
  };

  const arr = [];
  for (let i = 0; i < 5; i++) arr.push(i);
  const chatSource = arr.map(() => random('chat') as ChatItemProps);

  return (
    <div className="container">
      <div className="chat-list">
        <SideBar
          top={
            <Popup
              show={show}
              header="Lorem ipsum dolor sit amet."
              headerButtons={[
                {
                  type: 'transparent',
                  color: 'black',
                  onClick: () => {
                    setShow(false);
                  },
                  icon: {
                    component: <MdClose />,
                    size: 18,
                  },
                },
              ]}
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!"
              footerButtons={[
                {
                  color: 'white',
                  backgroundColor: '#ff5e3e',
                  text: 'Vazgeç',
                },
                {
                  color: 'white',
                  backgroundColor: 'lightgreen',
                  text: 'Tamam',
                },
              ]}
            />
          }
          center={<ChatList dataSource={chatSource} />}
          bottom={
            <span>
              <Button
                type="transparent"
                color="black"
                icon={{
                  component: <FaComments />,
                  size: 18,
                }}
              />
              <Button
                type="transparent"
                color="black"
                icon={{
                  component: <FaSearch />,
                  size: 18,
                }}
              />
              <Button text="Count"></Button>
            </span>
          }
        />
      </div>
      <div className="right-panel">
        <MessageList
          className="message-list"
          lockable={true}
          downButtonBadge={10}
          dataSource={messageList}
        />

        <Input
          placeholder="Mesajınızı buraya yazınız."
          defaultValue=""
          ref={inputRef}
          multiline={true}
          onKeyPress={e => {
            if (e.shiftKey && e.charCode === 13) {
              return true;
            }
            if (e.charCode === 13) {
              inputRef.current?.clear();
              addMessage();
              e.preventDefault();
              return false;
            }
          }}
          rightButtons={<Button text="Gönder" onClick={addMessage} />}
        />
      </div>
    </div>
  );
};

export default App;
