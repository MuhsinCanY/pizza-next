'use client'
import PizzaHeader from '@/components/PizzaHeader'
import PizzaContent from '@/components/PizzaContent'
import PizzaForm from '@/components/PizzaForm'

export default function Pizza() {
  return (
    <>
      <PizzaHeader />
      <div className="font-barlow font-medium bg-white flex flex-col justify-center items-center">
        <div className="container p-10 max-w-2xl">
          <PizzaContent />
          <PizzaForm />
        </div>
      </div>
    </>
  )
}
