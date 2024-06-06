import React from 'react'

const PizzaSize = ({ errors, register }: { errors: any; register: any }) => {
  const sizes = ['Küçük', 'Orta', 'Büyük']

  return (
    <div className="size text-pizza_gray text-base flex gap-4 flex-col py-4">
      <label className="text-black font-semibold text-2xl">
        Boyut Seç <span className="text-red-400">*</span>
      </label>
      {errors.size && (
        <span className="text-red-500">Lütfen pizza boyutunu seçiniz.</span>
      )}
      {sizes.map((item, index) => (
        <label key={index}>
          <input
            data-testid={'size-' + index}
            className="mr-2"
            {...register('size', { required: true })}
            type="radio"
            value={item}
          />
          {item}
        </label>
      ))}
    </div>
  )
}

export default PizzaSize
