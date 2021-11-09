const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 7000;
const path = require("./config/path");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const pubRoute = require("./routes/publicite.routes");
const { append } = require("express/lib/response");
const cabinetRoute = require("./routes/cabinet.routes");
const serviceRoute = require ("./routes/service.routes");
const articleRoute = require("./routes/article.routes");
const appointmentRoute = require("./routes/appointment.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// ruser router

app.use(path.baseUriUsers, userRoute);
app.use(path.baseUriAuth, authRoute);
app.use(path.baseUriPub, pubRoute );
app.use(path.baseUriCabinet, cabinetRoute);
app.use(path.baseUriService, serviceRoute);
app.use(path.baseUriArticle, articleRoute);
app.use(path.baseUriAppointment, appointmentRoute)


app.listen(PORT, () => {
  console.log(`le port écoute sur ${PORT}`);
});
