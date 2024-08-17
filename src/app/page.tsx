import Search from "./_components/search"

export default function Home() {
  return (
    <div>
      <div className="p-6">
        <h2 className="text-xl font-bold">Olá, Mateus!</h2>
        <p>Sexta, 2 de Fevereiro</p>
      </div>
      <div className="p-6">
        <Search />
      </div>
    </div>
  )
}
