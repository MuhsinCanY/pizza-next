import React from 'react'

const PizzaCount = ({
  pizzaCount,
  setPizzaCount,
}: {
  pizzaCount: number
  setPizzaCount: any
}) => {
  return (
    <div className="text-black flex">
      <button
        className="bg-pizza_yellow p-4 rounded-l-lg text-2xl h-16 flex items-center justify-center"
        onClick={(e) => {
          e.preventDefault()
          setPizzaCount((pizzaCount: number) => pizzaCount + 1)
        }}
      >
        +
      </button>
      <span className="flex items-center justify-center h-16 p-4 w-10 border-gray-300 border-[1px] border-r-0 border-l-0  text-xl">
        {pizzaCount}
      </span>
      <button
        className="bg-pizza_yellow p-4 rounded-r-lg text-2xl h-16 flex items-center justify-center"
        onClick={(e) => {
          e.preventDefault()
          setPizzaCount((pizzaCount: number) =>
            pizzaCount > 1 ? pizzaCount - 1 : 1
          )
        }}
      >
        -
      </button>
    </div>
  )
}

export default PizzaCount
