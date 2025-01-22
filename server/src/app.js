const express = require("express");
const productRouter = require("./routes/product.routes.js");
const userRouter = require("./routes/user.routes.js");
const authRouter = require("./routes/auth.routes.js");
const ticketRouter = require("./routes/ticket.routes.js")
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

const sessionDuration = 1000 * 60 * 60 * 24; //ESTA DURACION EN SEGUNDOS LO USE EN EL EJERCICIO DE CLASE

//MIDDLEWARES
// const corsOptions = {
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['content-Type', 'Authorization']
// };//Solo solicitudes desde el dominio de mi front
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json()); // Configurando body-parser para parsear JSON
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }) //PARSEANDO DATOS DE FORMULARIOS URL-ENCODED
);

//CONFIGURACIÓN DE SESSION
app.use(
  session({
    secret: "asd", //DESPUES LA CAMBIO
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, //CREO QUE DEBERIA SER true si uso HTTPS
  })
);

//SIRVIENDO ARCHIVOS ESTÁTICOS DESDE LA CARPETA public
app.use("/public", express.static("public"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//ROUTES
app.use("/productos", productRouter);
app.use("/usuarios", userRouter);
app.use("/auth", authRouter);
app.use("/tickets", ticketRouter)