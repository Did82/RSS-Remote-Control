import { httpServer } from './http_server';
import messageHandler from './ws_server/messageHandler';
import wss from './ws_server';
import { createWebSocketStream } from 'ws';
import commandParser from './utils/commandParser';

const HTTP_PORT = 3000;

wss.on('connection', (ws) => {
  const duplex = new createWebSocketStream(ws);
  duplex.on('data', (data) => {
    console.log('received: %s', data);
    const command = commandParser(data.toString());
    const result = messageHandler(ws, command);
    ws.send(result);
  });
});

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
