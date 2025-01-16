const express = require("express");
const productRoutes = require("./routes/product.routes.js");
const userRoutes = require("./routes/user.routes.js");
const cors = require("cors");
const session = require("express-session");
const sessionDuration = 1000 * 60 * 60 * 24;//ESTA DURACION EN SEGUNDOS LO USE EN EL EJERCICIO DE CLASE
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

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
    })//PARSEANDO DATOS DE FORMULARIOS URL-ENCODED
  );

//CONFIGURACIÓN DE SESSION 
app.use(session({
    secret: 'asd',//DESPUES LA CAMBIO
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }//CREO QUE DEBERIA SER true si uso HTTPS
}));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//ROUTES
app.use("/productos", productRoutes);
app.use("/usuarios", userRoutes);