import React from 'react'

const PizzaSize = ({ errors, register }: { errors: any; register: any }) => {
  return (
    <div className="size text-pizza_gray text-base flex gap-4 flex-col py-4">
      <label className="text-black font-semibold text-2xl">
        Boyut Seç <span className="text-red-400">*</span>
      </label>
      {errors.size && (
        <span className="text-red-500">Lütfen pizza boyutunu seçiniz.</span>
      )}
      <label>
        <input
          className="mr-2"
          {...register('size', { required: true })}
          type="radio"
          value="Küçük"
        />
        Küçük
      </label>
      <label>
        <input
          className="mr-2"
          {...register('size', { required: true })}
          type="radio"
          value="Orta"
        />
        Orta
      </label>
      <label>
        <input
          className="mr-2"
          {...register('size', { required: true })}
          type="radio"
          value="Büyük"
        />
        Büyük
      </label>
    </div>
  )
}

export default PizzaSize
