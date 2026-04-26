/*
Planned things:- 🎯
color def #f59e0b              
width def 800
height def 800
strokeWidth def 4
opacity def 1
type def smooth wave
axis def x-axis
amplitude default 40
frequency
*/
const { normalizeHex } = require("../utils/color");

function generateWave(options = {}) {
  const width = Number(options.width) || 800;
  const height = Number(options.height) || 200;
  const amplitude = options.amplitude !== undefined ? Number(options.amplitude) : 10;
  const frequency = Number(options.frequency) || 20;
  const strokeWidth = Number(options.strokeWidth) || 4;
  const opacity = Number(options.opacity) || 1;
  const color = normalizeHex(options.color) ? normalizeHex(options.color || "#f59e0b") : "#f59e0b";
  const centerY = height / 2;
  const samples = frequency * 64;

  let path = "";

  for (let i = 0; i <= samples; i++) {
    const x = (i / samples) * width;

    const angle = (i / samples) * frequency * Math.PI * 2;
    const y = centerY - Math.sin(angle) * amplitude;

    path += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  }

  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="amber-wave-clip">
      <rect x="0" y="0" width="${width}" height="${height}" />
    </clipPath>
  </defs>

  <path
    d="${path}"
    fill="none"
    stroke="${color}"
    stroke-width="${strokeWidth}"
    stroke-linecap="round"
    stroke-linejoin="round"
    opacity="${opacity}"
    clip-path="url(#amber-wave-clip)"
  />
</svg>
`.trim();
  /*
  <text x="10" y="20" font-size="14" fill="blue">amp=${amplitude}</text>
  */
}

module.exports = generateWave;