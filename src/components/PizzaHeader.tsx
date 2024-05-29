import Link from 'next/link'
import React from 'react'

const PizzaHeader = () => {
  return (
    <div className="bg-pizza_red flex items-center justify-center pt-10">
      <div className="container  max-w-pizza ">
        <h1 className="font-roboto font-semibold text-[42px] text-white text-center">
          Teknolojik Yemekler
        </h1>
        <h2 className="py-6 font-barlow text-base font-light text-white">
          <Link href="/">Anasayfa</Link> -{' '}
          <span className=" font-medium">Sipariş Oluştur</span>
        </h2>
      </div>
    </div>
  )
}

export default PizzaHeader
