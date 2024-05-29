'use client'
import PizzaSize from '@/components/PizzaSize'
import PizzaHeader from '@/components/PizzaHeader'
import PizzaPaste from '@/components/PizzaPaste'
import PizzaContent from '@/components/PizzaContent'
import { useForm } from 'react-hook-form'

export interface FormValues {
  size: string
  paste: string
}

export default function Pizza() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => console.log(data)
  console.log(errors)

  return (
    <>
      <PizzaHeader />
      <div className=" font-barlow font-medium bg-white flex flex-col justify-center items-center">
        <div className="container max-w-pizza">
          <PizzaContent />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex  justify-between ">
              <PizzaSize errors={errors} register={register} />
              <PizzaPaste errors={errors} register={register} />
            </div>

            <input
              className="bg-pizza_yellow text-black py-2 px-4 rounded-lg hover:bg-amber-400 hover:text-white"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  )
}
