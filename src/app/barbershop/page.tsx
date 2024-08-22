import Header from "../_components/header"
import Search from "../_components/search"
import { getBarberOrService } from "./_actions/get-barber-or-service"
import BarberShopItem from "../_components/barbershop-item"
import { BarberShopProps } from "../_constants/types"

interface BarberShopsPageProps {
  searchParams: {
    title?: string
    service?: string
  }
}

const BarberShopPage = async ({ searchParams }: BarberShopsPageProps) => {
  const barberorservice: BarberShopProps[] = await getBarberOrService({
    type: searchParams.service ? "service" : "title",
    value: searchParams?.title || searchParams?.service,
  })

  return (
    <>
      <Header />
      <div className="p-6">
        <Search />
        <h2 className="mb-5 mt-6 text-xs uppercase">
          resultados para &quot;{searchParams?.title || searchParams?.service}
          &quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barberorservice.map((barbershop) => (
            <BarberShopItem
              key={barbershop.id_barber}
              barbershop={barbershop}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default BarberShopPage
