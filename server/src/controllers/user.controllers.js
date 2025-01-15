//VER CLASES 30 (middleware login) 31 (session(back)/cookies(front))
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
  isAutenticated,
  isAdmin,
}