import { pool } from "../_lib/postgres"

export const getpopularbarber = async () => {
  const db = await pool.connect()
  const { rows } = await db.query(`
    select id_barber,
    name,
    city,
    numero,
    complement,
    image_url
    from barbershop,
    address
    where address.id_address = barbershop.id_address
    order by name
    `)
  return rows
}
