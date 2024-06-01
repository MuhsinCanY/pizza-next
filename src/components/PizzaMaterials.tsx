import React from 'react'

const materials = [
  'Pepperoni',
  'Sosis',
  'Domates',
  'Biber',
  'Mısır',
  'Sucuk',
  'Kanada Jambonu',
  'Ananas',
  'Tavuk Izgara',
  'Jalepeno',
  'Kabak',
  'Soğan',
  'Sarımsak',
]

const PizzaMaterials = ({
  errors,
  register,
}: {
  errors: any
  register: any
}) => {
  return (
    <div className="text-black flex flex-col gap-4 py-8">
      <h1 className="font-bold text-2xl">Ek Malzemeler</h1>
      <p className="font-normal">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      {errors.materials && errors.materials.type === 'biggerThan' && (
        <span className="text-red-500">
          {errors.materials.message} En az 4 adet seçilmelisiniz.
        </span>
      )}
      {errors.materials && errors.materials.type === 'lessThan' && (
        <span className="text-red-500">
          {errors.materials.message} En fazla 10 adet seçim yapabilirsiniz.
        </span>
      )}
      <div className="flex flex-wrap gap-2">
        {materials.map((item, index) => (
          <div className="flex items-center w-40 gap-3" key={index}>
            <input
              className="size-5"
              type="checkbox"
              id={item}
              value={item}
              {...register('materials', {
                validate: {
                  biggerThan: (v: string[]) => v.length > 4,
                  lessThan: (v: string[]) => v.length < 10,
                },
              })}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PizzaMaterials
