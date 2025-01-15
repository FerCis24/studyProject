const autentification = (req, res, next) => {
    if (req.session.logedUser) {
      next();
    } else {
      res.redirect("/login");
    }
  };
  
  module.exports = { autentification };