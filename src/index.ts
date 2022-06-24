import { httpServer } from './http_server';
import messageHandler from './ws_server/messageHandler';
import wss from './ws_server';
import { createWebSocketStream } from 'ws';
import commandParser from './utils/commandParser';

const HTTP_PORT = 3000;

wss.on('connection', (ws) => {
  console.log('WebSocket connection opened');
  const duplex = new createWebSocketStream(ws, { decodeStrings: false });
  duplex.on('data', async (data) => {
    console.log('received: %s', data);
    const command = commandParser(data.toString());
    const result = await messageHandler(command);
    duplex.write(result);
  });
  duplex.on('end', () => {
    console.log('client disconnected');
  });
});

httpServer.listen(HTTP_PORT, () => {
  console.log(`🚀 Start static http server on the ${HTTP_PORT} port!`);
});
