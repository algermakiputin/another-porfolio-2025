import { useState } from 'react';

import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';

const clientId = "80b2529c-2f73-4484-bb47-32354caebfde";

const configuration: Configuration = {
  color: '#000',
};

const BotPressChat = () => {
  const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
  );
}

export default BotPressChat;