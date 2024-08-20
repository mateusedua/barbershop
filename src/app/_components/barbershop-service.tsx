"use client"
import Image from "next/image"
import { BarberByIDProps } from "../_constants/interfaces"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

interface ServiceProps {
  service: BarberByIDProps
}

const BarberShopService = ({ service }: ServiceProps) => {
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
