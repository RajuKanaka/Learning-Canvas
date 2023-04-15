import { basicRect, clearRect } from './rect/basic-rect.js';
import {
  drawRandomShape,
  drawTrapezoid,
  drawRombus,
  drawHexagon,
} from './draw/index.js';
const initailizeCanvas = (ctx) => {
  ctx.fillStyle = '#fff';
  // fillStyle: the color or style to use inside shapes.
  ctx.strokeStyle = '#fff';
  // strokeStyle: the color or style to use for the lines around shapes.
  ctx.lineWidth = 5;
  // lineWidth: the width of lines drawn in the future.
};

export {
  initailizeCanvas,
  basicRect,
  clearRect,
  drawRandomShape,
  drawTrapezoid,
  drawRombus,
  drawHexagon,
};
