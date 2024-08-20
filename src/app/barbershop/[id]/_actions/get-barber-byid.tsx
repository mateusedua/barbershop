import { pool } from "@/app/_lib/postgres"

export const getbarberbyid = async (id_barber: string) => {
  const db = await pool.connect()
  const { rows } = await db.query(
    `
        select b.name barber_name,
        ad.city,
        ad.numero,
        ad.complement,
        b.description barber_description,
        b.image_url barber_image_url,
        s.name service_name,
        s.description service_description,
        s.image_url service_image_url,
        s.price,
        s.id_service,
        b.phones
        from barbershop b,
        barbershop_service s,
        address ad
        where b.id_barber = s.id_barber
        and ad.id_address = b.id_address
        and b.id_barber = $1
        `,
    [id_barber],
  )
  return rows
}
