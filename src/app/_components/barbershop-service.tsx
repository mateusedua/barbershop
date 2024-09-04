"use client"
import Image from "next/image"
import { BarberByIDProps } from "../_constants/types"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { useEffect, useMemo, useState } from "react"
import { getDayBooking } from "../_actions/get-day-booking"
import { DateTime } from "luxon"

const TIME_LIST = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
]

interface ServiceProps {
  service: BarberByIDProps
}

interface getTimeListProps {
  bookings: any[]
  selectDay: Date
}

const getTimeList = ({ bookings, selectDay }: getTimeListProps) => {
  return TIME_LIST.filter((time) => {
    const hour = Number(time.split(":")[0])
    const minute = Number(time.split(":")[1])

    const dateFormating = DateTime.local().set({ hour, minute })
  })
}

const BarberShopService = ({ service }: ServiceProps) => {
  const [selectDay, setSelectDay] = useState<Date | undefined>(undefined)
  const [dayBooking, setDayBooking] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      if (!selectDay) return
      const bookings = await getDayBooking(selectDay, service.id_service)
      setDayBooking(bookings)
    }
    fetchData()
  }, [selectDay, service.id_service])

  const timeList = useMemo(() => {
    if (!selectDay) return
    return getTimeList({
      bookings: dayBooking,
      selectDay,
    })
  }, [dayBooking, selectDay])

  return (
    <Card className="h-[134px] w-full">
      <CardContent className="flex gap-3 p-3">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.service_image_url}
            alt={service.service_description}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h3 className="mb-1 text-sm font-bold">{service.service_name}</h3>
          <p className="text-sm text-gray-400">{service.service_description}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button variant="secondary" className="rounded-xl">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopService
