//VER CLASES 30 (middleware login) 31 (session(back)/cookies(front))
const connection = require("../db/db.js");
const bcrypt = require("bcrypt");

const userLogin = (req, res, next) => {
  const { userName, password } = req.body;
  console.log(req.body);
  const query = "SELECT * FROM usuarios WHERE userName = ?";

  connection.query(query, [userName], (err, rows, fields) => {
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

const getAllUsers = (req, res, next) => {
  connection.query("SELECT * FROM usuarios", (err, rows, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "failure", message: err.message });
    }
    res.status(200).json(rows);
  });
};

const getUserById = (req, res, next) => {
  const { id } = req.params;

  connection.query(
    "SELECT * FROM usuarios WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "failure", message: err.message });
      }

      res.status(200).json(rows);
    }
  );
};

const addUser = (req, res, next) => {
  const { userName, password, fullName, email, image, role } = req.body;

  // //ENCRIPTANDO LA CONTRASEÑA ANTES DE ALMACENARLA
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "failure", message: err.message });
    }

    connection.query(
      "INSERT INTO usuarios (userName, password, fullName, email, image, role) VALUES (?, ?, ?, ?, ?, ?)",
      [userName, password, fullName, email, image, role],
      (err, rows, fields) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ status: "failure", message: err.message });
        }

        res.status(200).json(rows);
      }
    );
  }); //cerrando bcrypt.hash y su callback
};

const updateUser = (req, res, next) => {
  const { id } = req.params;
  const { userName, password, fullName, email, image, role } = req.body;

  //ENCRIPTANDO LA CONTRASEÑA
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "failure", message: err.message });
    }
    connection.query(
      "UPDATE usuarios SET userName = ?, password = ?, fullName = ?, email = ?, image = ?, role = ? WHERE id = ? LIMIT 1",

      [userName, password, fullName, email, image, role, id],
      (err, rows, fields) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ status: "failure", message: err.message });
        }

        if (rows.changedRows) {
          res
            .status(200)
            .json({ status: "succes", message: "Datos de usuario actualizado" });
        } else {
          res.status(200).json({
            status: "warning",
            message: "No se pudo actualizar datos de usuario",
          });
        }
      }
    );
  });
};

const deleteUserById = (req, res, next) => {
  const { id } = req.params;

  connection.query(
    "DELETE FROM usuarios WHERE id = ? LIMIT 1",
    [id],
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "failure", message: err.message });
      }

      res.status(200).json(rows);
    }
  );
};

module.exports = {
  userLogin,
  isAutenticated,
  isAdmin,
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
};
