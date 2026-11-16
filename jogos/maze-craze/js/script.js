const MAPA_1_ESPEJO = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1],
[1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
[1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1],
[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
[1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1],
[1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1],
[1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
[1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1],
[1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1],
[1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1],
[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],
[1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
[1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
[1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
[1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1],
[1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1],
[1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,4,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const MAPA_2_CIRCUITO = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,3,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
[1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1],
[1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
[1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1],
[1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1],
[1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1],
[1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1],
[1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1],
[1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1],
[1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1],
[1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1],
[1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
[1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],
[1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1],
[1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1],
[1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1],
[1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,4,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const MAPA_3_ENCRUZILHADAS = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1],
[1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
[1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
[1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1],
[1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1],
[1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1],
[1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1],
[1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1],
[1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1],
[1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1],
[1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1],
[1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1],
[1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1],
[1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1],
[1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
[1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1],
[1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1],
[1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
[1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1],
[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,4,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const MAPA_4_ESPIRAL = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,3,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
[1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1],
[1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1],
[1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1],
[1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1],
[1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1],
[1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1],
[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1],
[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
[1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
[1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
[1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1],
[1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1],
[1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1],
[1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1],
[1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
[1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1],
[1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1],
[1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1],
[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,4,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const MAPA_5_SERPENTE = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1],
[1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1],
[1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1],
[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1],
[1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1],
[1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
[1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1],
[1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1],
[1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1],
[1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1],
[1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
[1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1],
[1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
[1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1],
[1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1],
[1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
[1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1],
[1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,4,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const MAPAS_FIXOS = [MAPA_1_ESPEJO, MAPA_2_CIRCUITO, MAPA_3_ENCRUZILHADAS, MAPA_4_ESPIRAL, MAPA_5_SERPENTE];

const palette = {
  wall: "#26364e",
  wallBright: "#5de4ff",
  floor: "#0b1120",
  blue: "#5de4ff",
  pink: "#ff4c9a",
  lime: "#d9ff68"
};

function buildMaze(cols, rows, seed = 0) {
  const source = MAPAS_FIXOS[Math.abs(Math.floor(seed)) % MAPAS_FIXOS.length];
  return source.map(linha => [...linha]);
}

function drawMaze(canvas, cols, rows, decorative = false) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const grid = buildMaze(cols, rows, decorative ? 0 : 1);
  rows = grid.length;
  cols = grid[0].length;
  const cellW = canvas.width / cols;
  const cellH = canvas.height / rows;
  ctx.fillStyle = palette.floor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x]) {
        ctx.fillStyle = palette.wall;
        ctx.fillRect(x * cellW + 1, y * cellH + 1, cellW - 2, cellH - 2);
        ctx.fillStyle = "rgba(93,228,255,.12)";
        ctx.fillRect(x * cellW + 2, y * cellH + 2, Math.max(1, cellW - 4), 2);
      }
    }
  }
  ctx.fillStyle = palette.lime;
  ctx.fillRect(cellW * .25, cellH * (rows - 2) + cellH * .25, cellW * .5, cellH * .5);
  ctx.fillStyle = palette.pink;
  ctx.fillRect(cellW * (cols - 1.25), cellH * (rows - 2) + cellH * .25, cellW * .5, cellH * .5);

  const players = [
  { x: 1, y: 1, color: palette.blue },
  { x: 1, y: rows - 2, color: palette.pink }
];
  players.forEach((p, i) => {
    ctx.fillStyle = p.color;
    const pad = Math.min(cellW, cellH) * .2;
    ctx.fillRect(p.x * cellW + pad, p.y * cellH + pad, cellW - pad * 2, cellH - pad * 2);
    if (decorative) {
      ctx.fillStyle = "#08101c";
      ctx.font = `bold ${Math.max(8, Math.min(cellW, cellH) * .45)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(i === 0 ? "1" : "2", (p.x + .5) * cellW, (p.y + .5) * cellH);
    }
});
}

const heroCanvas = document.getElementById("heroMaze");
const gameCanvas = document.getElementById("gameCanvas");
function renderAll() {
  drawMaze(heroCanvas, 21, 21, true);
  drawMaze(gameCanvas, 31, 17, true);
}
renderAll();

document.getElementById("playGame")?.addEventListener("click", () => {
  const message = document.getElementById("playMessage");
  message.textContent = "O jogo ainda não foi integrado ao site. Adicione o código da partida para habilitar a jogabilidade.";
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.setAttribute("aria-label", opened ? "Fechar menu" : "Abrir menu");
});
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
});
});

var canvas = document.getElementById("jogo");
var ctx = canvas.getContext("2d");
var statusJogo = document.getElementById("status");
var pontos1Texto = document.getElementById("pontos1");
var pontos2Texto = document.getElementById("pontos2");

var tamanho = 30;
var colunas = 17;
var linhas = 13;
var mapa = [];
var jogadores = [];
var pontos1 = 0;
var pontos2 = 0;
var partidaAtiva = false;
var indiceMapaAtual = 0;
var objetivo = { x: 8, y: 6 };

function criarLabirinto() {
  var modelo = MAPAS_FIXOS[indiceMapaAtual];
  mapa = modelo.map(function(linha) { return linha.slice(); });
  linhas = mapa.length;
  colunas = mapa[0].length;
  objetivo = { x: 8, y: 6 };
  for (var y = 0; y < linhas; y++) {
    for (var x = 0; x < colunas; x++) {
      if (mapa[y][x] === 4) objetivo = { x: x, y: y };
    }
  }

  tamanho = Math.min(canvas.width / colunas, canvas.height / linhas);
}

function prepararJogadores() {
  var inicio1 = { x: 1, y: 1 };
  var inicio2 = { x: colunas - 2, y: 1 };
  var encontrouInicio1 = false;
  var encontrouInicio2 = false;
  for (var y = 0; y < linhas; y++) {
    for (var x = 0; x < colunas; x++) {
      if (mapa[y][x] === 2 && !encontrouInicio1) {
        inicio1 = { x: x, y: y };
        encontrouInicio1 = true;
      }
      if (mapa[y][x] === 3 && !encontrouInicio2) {
        inicio2 = { x: x, y: y };
        encontrouInicio2 = true;
      }
    }
  }
  jogadores = [
  { x: inicio1.x, y: inicio1.y, cor: "#3478f6", nome: "Jogador 1", rastro: [] },
  { x: inicio2.x, y: inicio2.y, cor: "#f04f91", nome: "Jogador 2", rastro: [] }
];
}

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#17243b";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var cellW = canvas.width / colunas;
  var cellH = canvas.height / linhas;

  for (var y = 0; y < linhas; y++) {
    for (var x = 0; x < colunas; x++) {
      var valor = mapa[y][x];
      ctx.fillStyle = valor === 1 ? "#34445f" : "#17243b";
      ctx.fillRect(x * cellW + 1, y * cellH + 1, cellW - 2, cellH - 2);
      if (valor === 4) {
        ctx.fillStyle = "#b8f36b";
        ctx.fillRect(x * cellW + cellW * .22, y * cellH + cellH * .22, cellW * .56, cellH * .56);
        ctx.fillStyle = "#17243b";
        ctx.font = "bold " + Math.max(10, Math.min(cellW, cellH) * .48) + "px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("★", (x + .5) * cellW, (y + .52) * cellH);
      }
    }
  }
  // Rastro de dash: um feixe curto e luminoso que fica para trás do jogador.
  var agora = performance.now();
  jogadores.forEach(function(jogador) {
    jogador.rastro = jogador.rastro.filter(function trechoAindaVisivel(trecho) {
      return agora - trecho.inicio < 230;
    });

    jogador.rastro.forEach(function(trecho) {
      var progresso = Math.min(1, (agora - trecho.inicio) / 230);
      var opacidade = (1 - progresso) * 0.78;
      var inicioX = (trecho.deX + 0.5) * cellW;
      var inicioY = (trecho.deY + 0.5) * cellH;
      var fimX = (trecho.paraX + 0.5) * cellW;
      var fimY = (trecho.paraY + 0.5) * cellH;

      ctx.save();
      ctx.globalAlpha = opacidade;
      ctx.lineCap = "round";
      ctx.lineWidth = Math.max(3, Math.min(cellW, cellH) * (0.48 - progresso * 0.22));
      ctx.strokeStyle = jogador.cor;
      ctx.shadowColor = jogador.cor;
      ctx.shadowBlur = 16 * (1 - progresso);
      ctx.beginPath();
      ctx.moveTo(inicioX, inicioY);
      ctx.lineTo(fimX, fimY);
      ctx.stroke();

      // Núcleo claro para dar aparência de velocidade/energia.
      ctx.globalAlpha = opacidade * 0.72;
      ctx.lineWidth = Math.max(1.5, Math.min(cellW, cellH) * 0.13);
      ctx.strokeStyle = "#ffffff";
      ctx.shadowBlur = 7 * (1 - progresso);
      ctx.beginPath();
      ctx.moveTo(inicioX, inicioY);
      ctx.lineTo(fimX, fimY);
      ctx.stroke();
      ctx.restore();
    });

    ctx.fillStyle = jogador.cor;
    ctx.shadowColor = jogador.cor;
    ctx.shadowBlur = 10;
    ctx.fillRect(jogador.x * cellW + cellW * .18, jogador.y * cellH + cellH * .18, cellW * .64, cellH * .64);
    ctx.shadowBlur = 0;
  });
}

// Sons sintetizados no navegador: não precisam de arquivos externos.
var contextoAudio = null;
function tocarSomJogador(indiceJogador) {
  try {
    var AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!contextoAudio) contextoAudio = new AudioCtx();
    if (contextoAudio.state === "suspended") contextoAudio.resume();
    var oscilador = contextoAudio.createOscillator();
    var volume = contextoAudio.createGain();
    var agora = contextoAudio.currentTime;
    // Jogador 1: tom agudo/triangular; Jogador 2: tom mais grave/senoidal.
    oscilador.type = indiceJogador === 0 ? "triangle" : "sine";
    oscilador.frequency.setValueAtTime(indiceJogador === 0 ? 620 : 330, agora);
    oscilador.frequency.exponentialRampToValueAtTime(indiceJogador === 0 ? 820 : 440, agora + 0.07);
    volume.gain.setValueAtTime(0.0001, agora);
    volume.gain.exponentialRampToValueAtTime(0.10, agora + 0.012);
    volume.gain.exponentialRampToValueAtTime(0.0001, agora + 0.10);
    oscilador.connect(volume);
    volume.connect(contextoAudio.destination);
    oscilador.start(agora);
    oscilador.stop(agora + 0.11);
  } catch (erro) {
    // O jogo continua funcionando mesmo se o navegador bloquear o áudio.
  }
}

var animacaoRastroAtiva = false;
function animarRastroDash() {
  if (animacaoRastroAtiva) return;
  animacaoRastroAtiva = true;

  function quadro() {
    desenhar();
    var aindaTemRastro = jogadores.some(function(jogador) {
      return jogador.rastro.some(function(trecho) {
        return performance.now() - trecho.inicio < 230;
      });
    });
    if (aindaTemRastro) {
      requestAnimationFrame(quadro);
    } else {
      animacaoRastroAtiva = false;
      desenhar();
    }
  }
  requestAnimationFrame(quadro);
}

function mover(jogador, dx, dy) {
  if (!partidaAtiva) return;

  var novoX = jogador.x + dx;
  var novoY = jogador.y + dy;

  if (mapa[novoY] && mapa[novoY][novoX] !== undefined && mapa[novoY][novoX] !== 1) {
    jogador.rastro.push({
      deX: jogador.x,
      deY: jogador.y,
      paraX: novoX,
      paraY: novoY,
      inicio: performance.now()
    });
    if (jogador.rastro.length > 4) jogador.rastro.shift();
    jogador.x = novoX;
    jogador.y = novoY;
    tocarSomJogador(jogadores.indexOf(jogador));
    animarRastroDash();
  }


  if (jogador.x === objetivo.x && jogador.y === objetivo.y) {
    partidaAtiva = false;
    if (jogador === jogadores[0]) {
      pontos1++;
      pontos1Texto.textContent = pontos1;
    } else {
      pontos2++;
      pontos2Texto.textContent = pontos2;
    }
    statusJogo.textContent = jogador.nome + " venceu! Clique em Nova partida para carregar o próximo mapa.";
  }

  desenhar();
}

function iniciarPartida(proximoMapa = false) {
  if (proximoMapa) indiceMapaAtual = (indiceMapaAtual + 1) % MAPAS_FIXOS.length;
  criarLabirinto();
  prepararJogadores();
  partidaAtiva = true;
  statusJogo.textContent = "Mapa " + (indiceMapaAtual + 1) + " de " + MAPAS_FIXOS.length + " — partida em andamento";
  desenhar();
  document.getElementById("areaJogo").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("keydown", function (evento) {
  var tecla = evento.key.toLowerCase();
  var teclasJogo = ["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"];

  if (teclasJogo.indexOf(tecla) !== -1) evento.preventDefault();
  if (!partidaAtiva) return;

  // Jogador 1: W A S D.
  if (tecla === "w") mover(jogadores[0], 0, -1);
  if (tecla === "s") mover(jogadores[0], 0, 1);
  if (tecla === "a") mover(jogadores[0], -1, 0);
  if (tecla === "d") mover(jogadores[0], 1, 0);

  // Jogador 2: setas do teclado.
  if (tecla === "arrowup") mover(jogadores[1], 0, -1);
  if (tecla === "arrowdown") mover(jogadores[1], 0, 1);
  if (tecla === "arrowleft") mover(jogadores[1], -1, 0);
  if (tecla === "arrowright") mover(jogadores[1], 1, 0);
});

document.getElementById("reiniciar").addEventListener("click", function() { iniciarPartida(true); });

criarLabirinto();
prepararJogadores();
partidaAtiva = true;
statusJogo.textContent = "Mapa 1 de " + MAPAS_FIXOS.length + " — partida em andamento";
desenhar();

if (typeof module !== "undefined" && module.exports) { module.exports = { MAPA_1_ESPEJO, MAPA_2_CIRCUITO, MAPA_3_ENCRUZILHADAS, MAPA_4_ESPIRAL, MAPA_5_SERPENTE, MAPAS_FIXOS }; }