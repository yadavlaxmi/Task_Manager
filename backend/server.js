const app = require('./app');
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
