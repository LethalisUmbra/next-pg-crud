import { db } from '../../config/db'

export default async function handler(req, res) {
  const result = await db.any('SELECT NOW();')

  console.log(result[0].now)

  res.status(200).json(result[0])
}
