import moveMouse from './commands/moveMouse';
import drawCircle from './commands/drawCircle';
import drawSquare from './commands/drawSquare';
import drawRectangle from './commands/drawRectangle';
import mousePosition from './commands/mousePosition';
import printScreen from './commands/printScreen';

const messageHandler = async (command) => {
  if (command.title === 'mouse_up') {
    const direction = 'up';
    const distance = command.arg;
    moveMouse(direction, distance);
  }
  if (command.title === 'mouse_down') {
    const direction = 'down';
    const distance = command.arg;
    moveMouse(direction, distance);
  }
  if (command.title === 'mouse_left') {
    const direction = 'left';
    const distance = command.arg;
    moveMouse(direction, distance);
  }
  if (command.title === 'mouse_right') {
    const direction = 'right';
    const distance = command.arg;
    moveMouse(direction, distance);
  }
  if (command.title === 'draw_circle') {
    const radius = command.arg;
    drawCircle(radius);
  }
  if (command.title === 'draw_square') {
    const size = command.arg;
    drawSquare(size);
  }
  if (command.title === 'draw_rectangle') {
    const sizeA = command.arg;
    const sizeB = command.arg2;
    drawRectangle(sizeA, sizeB);
  }
  if (command.title === 'mouse_position') {
    const coordinates = mousePosition();
    return `${command.title} ${coordinates}`;
  }
  if (command.title === 'prnt_scrn') {
    const base64img = await printScreen();
    return `${command.title} ${base64img}`;
  }
  return command.title;
};

export default messageHandler;
