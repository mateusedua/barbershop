import { getbarberbyid } from "./_actions/get-barber-byid"
import Image from "next/image"
import { ChevronLeft, Menu, MapPinIcon, StarIcon } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import Link from "next/link"
import { Separator } from "@/app/_components/ui/separator"
import { BarberByIDProps } from "@/app/_constants/interfaces"
import BarberShopService from "@/app/_components/barbershop-service"
import BarberShopPhone from "@/app/_components/barbershop-phone"

interface BarberShopProps {
  params: {
    id: string
  }
}

const BarberShop = async ({ params }: BarberShopProps) => {
  const barberbyid: Array<BarberByIDProps> = await getbarberbyid(params.id)

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barberbyid[0].barber_image_url}
          alt={barberbyid[0].barber_name}
          fill
          className="object-cover"
        />
        <Button className="absolute left-4 top-4 p-3" variant="secondary">
          <Link href="/">
            <ChevronLeft />
          </Link>
        </Button>
        <Button className="absolute right-4 top-4" variant="secondary">
          <Menu />
        </Button>
      </div>
      <div className="p-5">
        <h1 className="mb-3 text-xl font-bold">{barberbyid[0].barber_name}</h1>
        <div className="flex gap-2">
          <MapPinIcon className="text-primary" />
          <p>
            {barberbyid[0].complement}, {barberbyid[0].numero},{" "}
            {barberbyid[0].city}
          </p>
        </div>
        <div className="mt-2 flex gap-2">
          <StarIcon className="text-primary" />
          <p>5,0 (889 avaliações)</p>
        </div>
      </div>
      <Separator />
      <div className="p-5">
        <h2 className="mb-3 text-xs font-semibold uppercase text-gray-400">
          sobre nós
        </h2>
        <p className="text-justify">{barberbyid[0].barber_description}</p>
      </div>
      <Separator />
      <div className="p-5">
        <h2 className="mb-3 text-xs font-semibold uppercase text-gray-400">
          serviços
        </h2>
        <div className="flex flex-col gap-3">
          {barberbyid.map((service) => (
            <BarberShopService key={service.id_service} service={service} />
          ))}
        </div>
      </div>
      <Separator />
      <div className="p-5">
        <h2 className="mb-3 text-xs font-semibold uppercase text-gray-400">
          contato
        </h2>
        <div className="flex flex-col gap-3">
          {barberbyid[0].phones.map((phone) => (
            <BarberShopPhone key={phone} phone={phone} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarberShop
