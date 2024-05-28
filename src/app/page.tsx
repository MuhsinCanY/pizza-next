import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="flex gap-3 flex-col items-center justify-start pt-20 w-full h-screen bg-cover bg-top bg-hero-pattern">
        <h1 className="text-3xl font-[700] font-roboto">Teknolojik Yemekler</h1>
        <h2 className="text-[70px] font-[100] font-barlow">KOD ACIKTIRIR</h2>
        <h2 className="text-[70px] font-[100] font-barlow">PIZZA, DOYURUR</h2>
        <button className="bg-pizza_yellow text-black font-[500] font-barlow rounded-full py-2 px-8">
          <Link href="/pizza">ACIKTIM</Link>
        </button>
      </div>
    </main>
  )
}
