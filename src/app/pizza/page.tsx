'use client'
import PizzaSize from '@/components/PizzaSize'
import PizzaHeader from '@/components/PizzaHeader'
import PizzaPaste from '@/components/PizzaPaste'
import PizzaContent from '@/components/PizzaContent'
import { useForm } from 'react-hook-form'
import PizzaMaterials from '@/components/PizzaMaterials'
import PizzaNote from '@/components/PizzaNote'
import { useState } from 'react'
import PizzaCount from '@/components/PizzaCount'
import PizzaResult from '@/components/PizzaResult'
import { useRouter } from 'next/navigation'
import { useFormData } from '../provider'

export interface FormValues {
  size: string
  paste: string
  materials: string[]
}

export default function Pizza() {
  const [pizzaCount, setPizzaCount] = useState(1)
  const router = useRouter()
  const { setFormData } = useFormData()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    router.push('/success')
    setFormData({ ...data, count: pizzaCount })
  }

  return (
    <>
      <PizzaHeader />
      <div className=" font-barlow font-medium bg-white flex flex-col justify-center items-center">
        <div className="container max-w-pizza">
          <PizzaContent />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between flex-wrap ">
              <PizzaSize errors={errors} register={register} />
              <PizzaPaste errors={errors} register={register} />
            </div>
            <PizzaMaterials errors={errors} register={register} />
            <PizzaNote register={register} />
            <div className="h-[2px] bg-gray-500 rounded-full my-6"></div>
            <div className="flex justify-between py-6">
              <PizzaCount
                pizzaCount={pizzaCount}
                setPizzaCount={setPizzaCount}
              />
              <PizzaResult
                pizzaCount={pizzaCount}
                watch={watch}
                isValid={isValid}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
