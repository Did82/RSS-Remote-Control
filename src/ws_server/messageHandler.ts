import robot from 'robotjs';

const messageHandler = (command) => {
  const mousePos = robot.getMousePos();
  const mouseX = mousePos.x;
  const mouseY = mousePos.y;
  if (command.title === 'mouse_up') {
    robot.moveMouseSmooth(mouseX, mouseY - command.arg);
  }
  if (command.title === 'mouse_down') {
    robot.moveMouseSmooth(mouseX, mouseY + command.arg);
  }
  if (command.title === 'mouse_left') {
    robot.moveMouseSmooth(mouseX - command.arg, mouseY);
  }
  if (command.title === 'mouse_right') {
    robot.moveMouseSmooth(mouseX + command.arg, mouseY);
  }
  if (command.title === 'draw_circle') {
    const radius = command.arg;
    for (let i = 0; i <= Math.PI * 2; i += 0.05) {
      const x = mouseX + radius * Math.cos(i);
      const y = mouseY + radius * Math.sin(i);
      robot.dragMouse(x, y);
    }
  }
  if (command.title === 'draw_square') {
    const size = command.arg;
    robot.setMouseDelay(500);
    robot.dragMouse(mouseX + size, mouseY - size);
    robot.dragMouse(mouseX + size, mouseY + size);
    robot.dragMouse(mouseX - size, mouseY + size);
    robot.dragMouse(mouseX - size, mouseY - size);
    robot.dragMouse(mouseX + size, mouseY - size);
    robot.setMouseDelay(10);
  }
  if (command.title === 'draw_rectangle') {
    const sizeA = command.arg;
    const sizeB = command.arg2;
    robot.setMouseDelay(500);
    robot.dragMouse(mouseX + sizeA, mouseY - sizeB);
    robot.dragMouse(mouseX + sizeA, mouseY + sizeB);
    robot.dragMouse(mouseX - sizeA, mouseY + sizeB);
    robot.dragMouse(mouseX - sizeA, mouseY - sizeB);
    robot.dragMouse(mouseX + sizeA, mouseY - sizeB);
    robot.setMouseDelay(10);
  }
  if (command.title === 'mouse_position') {
    return `${command.title} ${mouseX},${mouseY}`;
  }
  return command.title;
};

export default messageHandler;
