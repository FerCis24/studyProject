//VER CLASES 30 (middleware login) 31 (session(back)/cookies(front))
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
    return next()
  }
  res.status(403).JSON({ message: "Debes iniciar sesión" })
}

const isAdmin = (req, res, next) => {
  if (!req.session.usuario) {
    return res.status(403).JSON({ message: "Debes iniciar sesión" })
  }
  if (!req.session.usuario.role === "admin") {
    return next()
  }
}

module.exports = {
  userLogin,
  isAutenticated,
  isAdmin,
}