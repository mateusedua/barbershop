import Search from "./_components/search"
import Image from "next/image"
import { getpopularbarber } from "./_data/get-popular-barber"
import { getrecomendedbarber } from "./_data/get-recomended-barber"
import BarberShopItem from "./_components/barbershop-item"
import { BarberShopProps } from "./_constants/types"
import Header from "./_components/header"
import { quickSearchOptions } from "./_constants/search"
import { Button } from "./_components/ui/button"
import Link from "next/link"
import { DateTime } from "luxon"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"

const Home = async () => {
  const recomendedBarber: BarberShopProps[] = await getrecomendedbarber()
  const particularBarber: BarberShopProps[] = await getpopularbarber()
  const session = await getServerSession(authOptions)

  return (
    <>
      <Header />
      <div className="p-6">
        <div>
          <h2 className="text-xl font-bold">
            Olá, {session?.user ? session?.user?.name : "Faça seu Login"}!
          </h2>
          <p>
            <span className="capitalize">
              {DateTime.now().toFormat("EEEE dd,", { locale: "pt-BR" })}
            </span>
            <span>&nbsp;de&nbsp;</span>
            <span className="capitalize">
              {DateTime.now().toFormat("MMMM", { locale: "pt-BR" })}
            </span>
          </p>
        </div>
        <div className="mt-6">
          <Search />
        </div>
        <div className="mt-6 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              key={option.title}
              variant="secondary"
              className="gap-2"
              asChild
            >
              <Link href={`/barbershop?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
            </Button>
          ))}
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
        <div>
          {particularBarber.length > 0 && (
            <>
              <h2 className="mb-3 mt-6 text-xs uppercase text-gray-400">
                populares
              </h2>
              <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {particularBarber.map((barbershop) => (
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
    </>
  )
}

export default Home
