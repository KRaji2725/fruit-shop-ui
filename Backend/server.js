const express = require("express"); // express package import pannrom
const cors = require("cors");

const app = express();        // express app create pandrom  // server

app.use(cors());   //  frontend (react localhost5173) connected with serever port 5000
app.use(express.json());  // json data vah read pannudhu

app.get("/", (req, res) => {
  res.send("FreshMart API Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});