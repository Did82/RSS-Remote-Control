import robot from 'robotjs';

const drawRectangle = (sizeA: number, sizeB: number) => {
  const mousePos = robot.getMousePos();
  const mouseX = mousePos.x;
  const mouseY = mousePos.y;
  robot.setMouseDelay(500);
  robot.dragMouse(mouseX + sizeA, mouseY - sizeB);
  robot.dragMouse(mouseX + sizeA, mouseY + sizeB);
  robot.dragMouse(mouseX - sizeA, mouseY + sizeB);
  robot.dragMouse(mouseX - sizeA, mouseY - sizeB);
  robot.dragMouse(mouseX + sizeA, mouseY - sizeB);
  robot.setMouseDelay(10);
};

export default drawRectangle;
