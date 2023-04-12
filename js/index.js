import {
  initailizeCanvas,
  basicRect,
  drawRandomShape,
  drawTrapezoid,
  drawRombus,
} from './basic-canvas/index.js';

const canvas = document.getElementById('basic_canvas');
const ctx = canvas.getContext('2d');
//  getContext: returns an object that provides methods and properties for drawing on the canvas.
if (!ctx) {
  throw new Error('No 2D context found!');
}
initailizeCanvas(ctx);
basicRect(ctx);
drawRandomShape(ctx);
drawTrapezoid(ctx, 750, 50, 150);
drawRombus(ctx, 50, 250, 150);
