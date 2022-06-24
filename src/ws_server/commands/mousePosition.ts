import robot from 'robotjs';

const mousePosition = () => {
  const mousePos = robot.getMousePos();
  const mouseX = mousePos.x;
  const mouseY = mousePos.y;
  return `${mouseX},${mouseY}`;
};

export default mousePosition;
