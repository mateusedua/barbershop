export type BarberShopProps = {
  id_barber: string
  name: string
  city: string
  numero: string
  complement: string
  image_url: string
}

export type BarberByIDProps = {
  barber_name: string
  city: string
  numero: string
  complement: string
  barber_description: string
  barber_image_url: string
  service_name: string
  service_description: string
  service_image_url: string
  price: number
  id_service: string
  phones: string[]
}
