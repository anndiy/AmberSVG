const express = require("express");

const app = express();

const svgRoutes = require("./routes/svg.routes");

app.use("/svg", svgRoutes);

app.get("/", (req, res) => {
  res.send(`
  <h1>AmberSVG API</h1>
  <p>Dynamic SVG asset generator for frontend workflows.</p>

  <h2>Available endpoints</h2>
  <ul>
    <li>/svg/wave</li>
  </ul>
  <p>Documentation: https://ambercore.space/tools</p>
`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});