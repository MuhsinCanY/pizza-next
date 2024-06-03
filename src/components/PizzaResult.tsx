import { error } from 'console'
import React, { useEffect } from 'react'

const PizzaResult = ({
  pizzaCount,
  watch,
  errors,
  isValid,
}: {
  pizzaCount: number
  watch: any
  errors: any
  isValid: boolean
}) => {
  const materials = watch('materials') ? watch('materials').length : 0

  return (
    <div className="text-black w-[350px] border-[1px] pt-2 rounded-xl text-lg flex flex-col gap-4">
      <div className="p-6 pb-4 flex flex-col gap-3">
        <h1 className="text-xl">Sipariş Toplamı</h1>
        <div className="flex justify-between text-lg text-[#5F5F5F]">
          <p>Seçimler</p>
          <p>{materials * 5}.00₺</p>
        </div>
        <div className="text-[#CE2829] flex justify-between text-lg">
          <p>Toplam</p>
          <p>{pizzaCount * 85 + materials * 5}.00₺</p>
        </div>
      </div>
      <button
        className={
          isValid
            ? 'bg-pizza_yellow p-4 w-full rounded-b-lg text-xl'
            : 'bg-pizza_yellow p-4 w-full rounded-b-lg text-xl opacity-50 cursor-not-allowed'
        }
        type="submit"
        disabled={!isValid}
      >
        SİPARİŞ VER
      </button>
    </div>
  )
}

export default PizzaResult
