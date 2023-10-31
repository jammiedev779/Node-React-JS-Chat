import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '8c6875e1-1ac7-4384-87ef-0375d0a8d641',
         props.user.username,
         props.user.secret
    );

    return <div style={{ height:'100vh'}}>
        <PrettyChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>;
  };
  export default ChatsPage;