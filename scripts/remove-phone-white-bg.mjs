import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function isShellPixel(r, g, b) {
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const spread = max - min;
  if (min >= 248 && spread <= 12) return true;
  if (min >= 235 && spread <= 4 && (r + g + b) / 3 >= 245) return true;
  return false;
}

async function removeWhiteBackground(input, output) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];
  const idx = (x, y) => y * width + x;
  const push = (x, y) => {
    const i = idx(x, y);
    if (visited[i]) return;
    const o = i * channels;
    const r = data[o];
    const g = data[o + 1];
    const b = data[o + 2];
    if (!isShellPixel(r, g, b)) return;
    visited[i] = 1;
    queue.push([x, y]);
  };

  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  while (queue.length) {
    const [x, y] = queue.pop();
    const o = idx(x, y) * channels;
    data[o + 3] = 0;
    if (x > 0) push(x - 1, y);
    if (x < width - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < height - 1) push(x, y + 1);
  }

  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * channels + 3];
      if (a > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  await sharp(data, { raw: { width, height, channels } })
    .extract({ left: minX, top: minY, width: w, height: h })
    .png()
    .toFile(output);

  const meta = await sharp(output).metadata();
  console.log(JSON.stringify({ width: meta.width, height: meta.height, hasAlpha: meta.hasAlpha }));
}

const [inputName = "홍보(1).png", outputName = "screenshot-1.png"] =
  globalThis.process.argv.slice(2);
const input = path.join(root, inputName);
const output = path.join(root, "public", outputName);
await removeWhiteBackground(input, output);
