import Search from "./_components/search"
import Image from "next/image"
import { getrecomendedbarber } from "./_data/get-recomended-barber"
import BarberShopItem from "./_components/barbershop-item"
import { BarberShopProps } from "./_constants/types"

const Home = async () => {
  const recomendedBarber: Array<BarberShopProps> = await getrecomendedbarber()

  return (
    <div className="p-6">
      <div>
        <h2 className="text-xl font-bold">Olá, Mateus!</h2>
        <p>Sexta, 2 de Fevereiro</p>
      </div>
      <div className="mt-6">
        <Search />
      </div>
      <div className="relative mt-6 h-[150px] w-full">
        <Image
          src="/BannerPizza.svg"
          alt=""
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div>
        {recomendedBarber.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs uppercase text-gray-400">
              Recomendados
            </h2>
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {recomendedBarber.map((barbershop) => (
                <BarberShopItem
                  key={barbershop.id_barber}
                  barbershop={barbershop}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
