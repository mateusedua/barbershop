"use client"
import Image from "next/image"
import { BarberByIDProps } from "../_constants/interfaces"
import { Card, CardContent } from "./ui/card"

interface ServiceProps {
  service: BarberByIDProps
}

const BarberShopService = ({ service }: ServiceProps) => {
  return (
    <Card className="h-[134px] w-full">
      <CardContent className="flex p-3">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.service_image_url}
            alt={service.service_description}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h3>{service.service_name}</h3>
          <p>{service.service_description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopService
