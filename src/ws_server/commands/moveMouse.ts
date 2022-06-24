import robot from 'robotjs';

const moveMouse = (direction: string, distance: number) => {
  const mousePos = robot.getMousePos();
  const mouseX = mousePos.x;
  const mouseY = mousePos.y;
  switch (direction) {
    case 'up':
      robot.moveMouseSmooth(mouseX, mouseY - distance);
      break;
    case 'down':
      robot.moveMouseSmooth(mouseX, mouseY + distance);
      break;
    case 'left':
      robot.moveMouseSmooth(mouseX - distance, mouseY);
      break;
    case 'right':
      robot.moveMouseSmooth(mouseX + distance, mouseY);
      break;
    default:
      break;
  }
};

export default moveMouse;
