import React from 'react'

const PizzaPaste = ({ errors, register }: { errors: any; register: any }) => {
  const pastes = ['İnce', 'Normal', 'Kalın']

  return (
    <div className="paste flex gap-4 flex-col py-4">
      <label className="text-black font-semibold text-2xl">
        Hamur Seç <span className="text-red-500">*</span>
      </label>
      {errors.paste && (
        <span className="text-red-500">Lütfen hamur kalınlığını seçiniz.</span>
      )}
      <select
        data-testid="paste-select"
        className="bg-white text-black p-1 rounded-lg border-2 border-black"
        {...register('paste', { required: true })}
      >
        <option value="" className="hidden">
          Hamur Kalınlığı
        </option>
        {pastes.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PizzaPaste
