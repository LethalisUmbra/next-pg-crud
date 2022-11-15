import { db } from "../../../config/db";

export default async function (req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

const saveProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const { rowCount, rows } = await db.result(
    "INSERT INTO product (name, description, price) VALUES (${name}, ${description}, ${price}) RETURNING id",
    { name, description, price }
  );
  return res.status(200).json({ name, description, price, id: rows[0].id });
};

const getProducts = async (req, res) => {
  const result = await db.query("SELECT * FROM product WHERE deleted_at IS NULL");
  return res.status(200).json(result);
};