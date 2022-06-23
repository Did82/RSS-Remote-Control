import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
// const duplex = new createWebSocketStream(wss);

export default wss;
