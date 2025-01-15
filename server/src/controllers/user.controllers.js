//VER CLASES 30 (middleware login) 31 (session(back)/cookies(front))
const connection = require("../db/db.js");

const userLogin = (req, res) => {
  const { user, password } = req.body;

  if (user === db_Users.user && password === db_Users.password) {
    req.session.db_Users = logedUser;
    console.log(req.session.logedUser);
    res.json(req.session.logedUser);
  } else {
    res.json({ status: "failure", mesagge: "Credenciales incorrectas" });
  }
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
};

const updateUser = (req, res, next) => {
  const { id } = req.params;
  const { userName, password, fullName, email, image, role } = req.body;

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
        res
          .status(200)
          .json({
            status: "warning",
            message: "No se pudo actualizar datos de usuario",
          });
      }
    }
  );
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
