const autentification = (req, res, next) => {
    if (req.session.logedUser) {
      next();
    } else {
      res
      .status(401).json({ message: "Debes iniciar sesión para finalizar la compra"})
      .redirect("/login");
    }
  };
  
  module.exports = { autentification };