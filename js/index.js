import {
  initailizeCanvas,
  basicRect,
  drawRandomShape,
  drawTrapezoid,
} from './basic-canvas/index.js';
window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  //  getContext: returns an object that provides methods and properties for drawing on the canvas.
  initailizeCanvas(ctx);
  basicRect(ctx);
  drawRandomShape(ctx);
  drawTrapezoid(ctx, 750, 50, 150);
};
