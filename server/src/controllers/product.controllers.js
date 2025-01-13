const connection = require("../db/db.js");

const getAllProducts = (req, res) => {
  connection.query("SELECT * FROM productos", (err, rows, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "failure", message: err.message });
    }
    res.status(200).json(rows);
  });
};

const createProduct = (req, res) => {
  const { title, price, description, categoryId } = req.body;

  connection.query(
    "INSERT INTO productos (title, price, description, categoryId) VALUES (?, ?, ?, ?)",
    [title, price, description, categoryId],
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

const getProductById = (req, res) => {
  const { id } = req.params;

  connection.query(
    "SELECT * FROM productos WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "failure", message: err.message });
      }

      res.status(200).json(rows);
    } //callback closing
  ); //query closing
}; //function closing

const deleteProductById = (req, res) => {
  const { id } = req.params;

  connection.query(
    "DELETE FROM productos WHERE id = ? LIMIT 1",
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

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { title, price, description, categoryId, image } = req.body

  connection.query(
    "UPDATE productos SET title = ?, price = ?, description = ?, categoryId = ?, image = ? WHERE id = ? LIMIT 1",
    [title, price, description, categoryId, image, id],
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "failure", message: err.message });
      }

      if(rows.changedRows){
        res
          .status(200)
          .json({status: "succes", message: "Producto actualizado"});
      }else{
        res
        .status(200)
        .json({status: "warning", message: "No se actualizó ningún producto"});
      }
    }
  );
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProduct,
};
