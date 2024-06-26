import { pizzaPrices } from '@/app/pizza'
import React from 'react'

const PizzaResult = ({
  pizzaCount,
  watch,
  isValid,
}: {
  pizzaCount: number
  watch: any
  isValid: boolean
}) => {
  const materials = watch('materials') ? watch('materials').length : 0

  return (
    <div className="text-black w-80 border-[1px] pt-2 rounded-xl text-lg flex flex-col gap-4">
      <div className="p-6 pb-4 flex flex-col gap-3">
        <h1 className="text-xl">Sipariş Toplamı</h1>
        <div className="flex justify-between text-lg text-[#5F5F5F]">
          <p>Seçimler</p>
          <p>{materials * 5}.00₺</p>
        </div>
        <div className="text-[#CE2829] flex justify-between text-lg">
          <p>Toplam</p>
          <p>
            {pizzaCount * pizzaPrices.pizza + materials * pizzaPrices.material}
            .00₺
          </p>
        </div>
      </div>
      <button
        data-testid="pizza-submit"
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
