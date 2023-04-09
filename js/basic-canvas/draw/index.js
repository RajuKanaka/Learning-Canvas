export const drawRandomShape = (ctx) => {
  ctx.beginPath();
  // beginPath(): creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
  ctx.moveTo(500, 50);
  // moveTo(x, y): moves the starting point of a new sub-path to the (x, y) coordinates.
  ctx.lineTo(500, 200);
  // lineTo(x, y): adds a new point and creates a line to that point from the last specified point in the current path.
  ctx.lineTo(600, 50);
  ctx.fill();
  // fill(): fills the current drawing (path). The default color is black.
  ctx.closePath();
};

export const drawTrapezoid = (ctx, x, y, size) => {
  ctx.beginPath();
  ctx.moveTo(x, y + size);
  ctx.lineTo(x + size * 0.25, y);
  ctx.lineTo(x + size * 0.75, y);
  ctx.lineTo(x + size, y + size);
  ctx.fill();
  ctx.closePath();
};
