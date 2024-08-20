"use client"

import { Smartphone } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneProps {
  phone: string
}

const BarberShopPhone = ({ phone }: PhoneProps) => {
  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <Smartphone />
        <p>{phone}</p>
      </div>
      <Button
        variant="secondary"
        className="rounded-xl"
        onClick={() => handleCopyPhone(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default BarberShopPhone
