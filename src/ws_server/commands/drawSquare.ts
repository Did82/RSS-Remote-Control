import robot from 'robotjs';

const drawSquare = (size: number) => {
  const mousePos = robot.getMousePos();
  const mouseX = mousePos.x;
  const mouseY = mousePos.y;

  robot.setMouseDelay(500);
  robot.dragMouse(mouseX + size, mouseY - size);
  robot.dragMouse(mouseX + size, mouseY + size);
  robot.dragMouse(mouseX - size, mouseY + size);
  robot.dragMouse(mouseX - size, mouseY - size);
  robot.dragMouse(mouseX + size, mouseY - size);
  robot.setMouseDelay(10);
};

export default drawSquare;
