import robot from 'robotjs';
import Jimp from 'jimp';

const printScreen = async () => {
  const mousePos = robot.getMousePos();
  const mouseX = mousePos.x;
  const mouseY = mousePos.y;
  const size = 100;
  const screen = robot.screen.capture(mouseX - size, mouseY - size, size * 2, size * 2);
  const img = new Jimp(screen.width, screen.height);
  img.bitmap.data = screen.image;
  const base64img = await img.getBufferAsync(Jimp.MIME_PNG);

  return base64img.toString('base64');
};

export default printScreen;
