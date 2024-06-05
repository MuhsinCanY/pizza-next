import React, { useState } from 'react'
import PizzaSize from './PizzaSize'
import PizzaPaste from './PizzaPaste'
import PizzaMaterials from './PizzaMaterials'
import PizzaNote from './PizzaNote'
import PizzaCount from './PizzaCount'
import PizzaResult from './PizzaResult'
import { useRouter } from 'next/navigation'
import { useFormData } from '@/app/provider'
import { useForm } from 'react-hook-form'

export interface FormValues {
  size: string
  paste: string
  note: string
  count: number
  materials: string[]
}

const PizzaForm = () => {
  const [pizzaCount, setPizzaCount] = useState(1)
  const router = useRouter()
  const { setFormData }: { setFormData: any } = useFormData()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    setFormData({ ...data, count: pizzaCount })
    router.push('/success')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between flex-wrap ">
        <PizzaSize errors={errors} register={register} />
        <PizzaPaste errors={errors} register={register} />
      </div>
      <PizzaMaterials errors={errors} register={register} />
      <PizzaNote register={register} />
      <div className="h-[2px] bg-gray-500 rounded-full my-6"></div>
      <div className="flex justify-between py-6 flex-wrap gap-4">
        <PizzaCount pizzaCount={pizzaCount} setPizzaCount={setPizzaCount} />
        <PizzaResult pizzaCount={pizzaCount} watch={watch} isValid={isValid} />
      </div>
    </form>
  )
}

export default PizzaForm
