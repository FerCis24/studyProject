const checkout = (req, res) => {
  res.status(200).json({ message: "Compra finalizada con éxito" });
};

module.exports = { checkout };
