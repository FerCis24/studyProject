const connection = require("../db/db.js");
const bcrypt = require("bcrypt");

const userLogin = (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  const query = "SELECT * FROM usuarios WHERE userName = ? LIMIT 1";

  connection.query(query, [email], (err, rows, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "failure", message: err.message });
    }
    if (rows.length === 0) {
      return res
      .status(401)
      .json({ status: "failure", message: "Credenciales incorrectas" });
    }
    console.log(rows)

    const user = rows[0];

    // bcrypt.compare(password, user.password, (err, isMatch) => {
    //   if (err) {
    //     console.error(err);
    //     return res
    //       .status(500)
    //       .json({ status: "failure", message: err.message });
    //   }

    //   if (!isMatch) {
    //     return res
    //       .status(401)
    //       .json({ status: "failure", message: "Credenciales incorrectas" });
    //   }

    //   // Si las credenciales son correctas, continúo con el siguiente middleware
    //   req.session.usuario = user;
    //   next();
    // });
    
    if (user.password === password) {
      req.session.usuario = user;
      res.status(200).json({ status:"satisfies", message: "Session iniciada"  })
      
    } else {
      res.status(401).json({ status:"failure", message: "contraseña incorrecta"  })

  }

  });
};

const isAutenticated = (req, res, next) => {
  console.log(req.session.usuario);
  if (req.session.usuario) {
    return next();
  }
  res.status(403).JSON({ message: "Debes iniciar sesión" });
};

const isAdmin = (req, res, next) => {
  if (!req.session.usuario) {
    return res.status(403).JSON({ message: "Debes iniciar sesión" });
  }
  if (!req.session.usuario.role === "admin") {
    return next();
  }
};

module.exports = {
  userLogin,
  isAutenticated,
  isAdmin,
};

