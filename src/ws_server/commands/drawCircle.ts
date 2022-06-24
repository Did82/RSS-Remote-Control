import robot from 'robotjs';

const drawCircle = (radius: number) => {
  const mousePos = robot.getMousePos();
  const mouseX = mousePos.x;
  const mouseY = mousePos.y;
  for (let i = 0; i <= Math.PI * 2; i += 0.05) {
    const x = mouseX + radius * Math.cos(i);
    const y = mouseY + radius * Math.sin(i);
    robot.dragMouse(x, y);
  }
};

export default drawCircle;
