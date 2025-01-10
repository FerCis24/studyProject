const conection = require("../db/db.js");

const getUsers = (req, res) => {
  conection.query("SELECT * FROM usuarios", (err, rows, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "failure", message: err });
    } else {
      res.status(200).json(rows);
    }
  });
};

module.exports = {
    getUsers
};
