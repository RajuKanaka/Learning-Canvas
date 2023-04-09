export function basicRect(ctx) {
  ctx.rect(50, 50, 150, 150);
  //   rect(x, y, width, height): draws a rectangle
  ctx.strokeRect(300, 50, 150, 150);
  //   strokeRect(x, y, width, height): draws a rectangle with no fill.
  addingShadows(ctx);
  ctx.fill();
  //   fill(): fills the current drawing (path). The default color is black.
  clearRect(ctx, 60, 60, 130, 130);
}

export function clearRect(ctx, ...args) {
  ctx.clearRect(...args);
  //   clearRect(x, y, width, height): clears the specified rectangular area, making it fully transparent.
}

export function addingShadows(ctx) {
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  //   shadowColor: the color of the shadow.
  ctx.shadowOffsetX = 5;
  //   shadowOffsetX: the horizontal distance the shadow will be offset.
  ctx.shadowOffsetY = 5;
  //   shadowOffsetY: the vertical distance the shadow will be offset.
  ctx.shadowBlur = 4;
  //   shadowBlur: the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.
}
