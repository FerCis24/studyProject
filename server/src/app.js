const express = require("express");
const productRoutes = require("./routes/product.routes.js");
const userRoutes = require("./routes/user.routes.js");
const cors = require("cors");

const app = express();

const PORT = 3000;

//MIDDLEWARES
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use("/productos", productRoutes);
app.use("/usuarios", userRoutes);