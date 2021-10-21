const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 7000;
const path = require("./config/path");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use(path.baseUriUsers, userRoute);
app.use(path.baseUriAuth, authRoute);

app.listen(PORT, () => {
  console.log(`le port écoute sur ${PORT}`);
});
