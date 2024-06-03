import React from 'react'

const PizzaNote = ({ register }: { register: any }) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <h1 className="font-semibold text-2xl text-black">Sipariş Notu</h1>
      <input
        className="bg-white text-gray-900 p-4 rounded-lg border-2 border-black"
        type="text"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        {...register('note')}
      />
    </div>
  )
}

export default PizzaNote
