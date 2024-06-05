'use client'
import React, { use } from 'react'
import { useFormData } from '../provider'
import { calculateMaterialsPrice, calculateTotalPrice } from '../pizza'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Success() {
  const router = useRouter()
  const { formData }: { formData: any } = useFormData()

  if (!formData) {
    router.push('/')
    return null
  }

  return (
    <div className="font-barlow bg-pizza_red h-screen w-full flex flex-col justify-center items-center">
      <div className="max-w-pizza container flex items-center flex-col gap-10">
        <h1 className="text-3xl font-[700] font-roboto text-center">
          Teknolojik Yemekler
        </h1>
        <h2 className="text-7xl font-[100]  text-center">SİPARİŞ ALINDI</h2>
        <div className="h-[1px] bg-[#FAF7F2] rounded-full mb-12 w-full"></div>
      </div>
      <div className=" flex flex-col gap-4 justify-center items-center max-w-72">
        <h1 className="text-2xl font-normal leading-7 text-center">
          Position Absolute Acı Pizza
        </h1>
        <div className="p-6 flex justify-center flex-col gap-4">
          <h1 className="font-[300]">
            Boyut: <span className="font-[500]">{formData.size}</span>
          </h1>
          <h1 className="font-[300]">
            Hamur: <span className="font-[500]">{formData.paste}</span>
          </h1>
          <h1 className="font-[300]">
            Ek Malzemeler:{' '}
            <span className="font-[500]">{formData.materials.join(', ')}</span>
          </h1>
        </div>
        <div className="p-6 w-full text-xl flex justify-center flex-col gap-4 border-[1px] border-[#FAF7F2] rounded-lg">
          <h1 className="text-xl">Sipariş Toplamı</h1>
          <div className="flex justify-between text-lg">
            <p>Seçimler</p>
            <p>{calculateMaterialsPrice(formData.materials)}.00₺</p>
          </div>
          <div className=" flex justify-between text-lg">
            <p>Toplam</p>
            <p>{calculateTotalPrice(formData.count, formData.materials)}.00₺</p>
          </div>
        </div>
        <Link className="text-white mt-4" href="/">
          Ana Sayfa
        </Link>
      </div>
    </div>
  )
}
