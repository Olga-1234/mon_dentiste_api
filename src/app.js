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
const resetPwdRoute = require("./routes/pwdReset.routes")
const createError = require('http-errors');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');

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
app.use(path.baseUriAuth, authRoute);
app.use(path.baseUriUsers, userRoute);
app.use(path.baseUriPub, pubRoute );
app.use(path.baseUriCabinet, cabinetRoute);
app.use(path.baseUriService, serviceRoute);
app.use(path.baseUriArticle, articleRoute);
app.use(path.baseUriAppointment, appointmentRoute);
app.use(path.baseUriRestPwd, resetPwdRoute)


app.listen(PORT, () => {
  console.log(`le port écoute sur ${PORT}`);
});


  // "username": "ukhspoemn68nqkod",
  // "password": "hai7GqG9elf3RcfAa2Xv",
  // "database": "bahlhqgjxxgyazyr8pab",
  // "host": "bahlhqgjxxgyazyr8pab-mysql.services.clever-cloud.com",
  // "dialect": "mysql"

//   DB_HOST = bahlhqgjxxgyazyr8pab-mysql.services.clever-cloud.com
// DB_USER = ukhspoemn68nqkod
// DB_PASSWORD = hai7GqG9elf3RcfAa2Xv
// DB_DATABASE = bahlhqgjxxgyazyr8pab 
// PORT = 3306


//  dans .env
// DB_HOST = 127.0.0.1
// DB_USER = olgita
// DB_PASSWORD = KbgZedOmn@1234
// DB_DATABASE = mon_dentiste_DB
// PORT = 7000


// "username": "olgita",
// "password": "KbgZedOmn@1234",
// "database": "mon_dentiste_DB",
// "host": "127.0.0.1",
// "dialect": "mysql"