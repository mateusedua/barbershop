"use client"
import { BarberShopProps } from "../_constants/types"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface BarberShopItemProps {
  barbershop: BarberShopProps
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 py-1">
        <div className="relative h-[159px] w-full">
          <Image
            src={barbershop.image_url}
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">
            {barbershop.complement}, {barbershop.numero}, {barbershop.city}
          </p>
          <Button variant="secondary" className="mt-3 w-full">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopItem
