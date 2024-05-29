import React from 'react'

const PizzaPaste = ({ errors, register }: { errors: any; register: any }) => {
  return (
    <div className="paste flex gap-4 flex-col p-4">
      <label className="text-black font-semibold text-lg">
        Hamur Seç <span className="text-red-500">*</span>
      </label>
      {errors.paste && (
        <span className="text-red-500">This field is required</span>
      )}
      <select
        className="bg-white text-black p-1 rounded-lg border-2 border-black"
        {...register('paste', { required: true })}
      >
        <option value="" className="hidden">
          Hamur Kalınlığı
        </option>
        <option value="İnce">İnce</option>
        <option value="Orta">Orta</option>
        <option value="Kalın">Kalın</option>
      </select>
    </div>
  )
}

export default PizzaPaste
