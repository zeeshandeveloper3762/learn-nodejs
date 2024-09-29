const express = require("express");
const app = express();
const port = 8000;

// Routes

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
