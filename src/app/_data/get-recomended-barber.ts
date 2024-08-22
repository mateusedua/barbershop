import { pool } from "../_lib/postgres"

export const getrecomendedbarber = async () => {
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
`)
  return rows
}
