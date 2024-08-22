import { pool } from "@/app/_lib/postgres"

interface BarberOrServiceProps {
  type?: string
  value?: string
}

export const getBarberOrService = async (data: BarberOrServiceProps) => {
  const db = await pool.connect()

  let query: string = `
            select id_barber,
            name,
            city,
            numero,
            complement,
            image_url
            from barbershop,
            address
            where address.id_address = barbershop.id_address
            and lower(name) like lower($1)
    `

  if (data.type === "service") {
    query = `
            select barbershop.id_barber,
            barbershop.name,
            city,
            numero,
            complement,
            barbershop.image_url,
            barbershop_service.name service
            from barbershop,
            address,
            barbershop_service
            where address.id_address = barbershop.id_address
            and barbershop_service.id_barber = barbershop.id_barber
            and lower(barbershop_service.name) like lower($1)
        `
  }

  const { rows } = await db.query(query, ["%" + data.value + "%"])
  return rows
}
