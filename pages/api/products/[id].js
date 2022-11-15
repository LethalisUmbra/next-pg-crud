import { db } from "../../../config/db";

export default async function (req, res) {
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

const getProduct = async (req, res) => {
  const { id } = req.query;
  const result = await db.one(
    "SELECT * FROM product WHERE id = ${id} AND deleted_at IS NULL",
    { id }
  );
  return res.status(200).json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.query;
  const result = await db.result(
    "UPDATE product SET deleted_at = CURRENT_TIMESTAMP WHERE id = ${id}",
    { id }
  );
  return res.status(200).json(result);
};
