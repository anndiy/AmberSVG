function normalizeHex(input = "f59e0b") {
  if (!input) return false;

  input = input.trim();

  if (input.startsWith("#")) {
    input = input.slice(1);
  }

  // (fff → ffffff)
  if (input.length === 3) {
    input = input
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const isValidHex = /^[0-9a-fA-F]{6}$/.test(input);
  if (!isValidHex) return false;

  return `#${input.toLowerCase()}`;
}

module.exports = {
  normalizeHex
};