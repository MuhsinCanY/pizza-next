import React from 'react'

const PizzaContent = () => {
  return (
    <div className="text-black flex flex-col gap-4 py-8">
      <h1 className="font-bold text-3xl">Position Absolute Acı Pizza</h1>
      <div className="flex justify-between items-center my-8">
        <h1 className="font-bold text-3xl">85.50₺</h1>
        <h1 className="font-light text-[#5F5F5F]">4.9</h1>
        <h1 className="font-light text-[#5F5F5F]">(200)</h1>
      </div>
      <p className="font-light text-sm text-[#5F5F5F] leading-6">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </div>
  )
}

export default PizzaContent
