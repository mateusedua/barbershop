"use server"

import { pool } from "../_lib/postgres"

export const getDayBooking = async (
  date: Date | undefined,
  id_service: string,
) => {
  const DB = await pool.connect()
  const { rows } = await DB.query(
    `
        select id_booking,
        id_user,
        id_service,
        date
        from booking
        where id_service = $1
        and date = $2
    `,
    [id_service, date],
  )

  return rows
}
