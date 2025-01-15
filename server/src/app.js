const express = require("express");
const productRoutes = require("./routes/product.routes.js");
const userRoutes = require("./routes/user.routes.js");
const cors = require("cors");
const session = require("express-session");
const sessionDuration = 1000 * 60 * 60 * 24;

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
app.use(express.json());

//CONFIGURACIÓN DE SESSION 
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//ROUTES
app.use("/productos", productRoutes);
app.use("/usuarios", userRoutes);