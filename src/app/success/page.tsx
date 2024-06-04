'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useFormData } from '../provider'

export default function Success() {
  const { formData } = useFormData()

  useEffect(() => {
    console.log(formData)
  }, [])

  return (
    <div className="bg-pizza_red h-screen w-full flex flex-col justify-center items-center">
      <h1>Success</h1>
      <h2>
        {formData?.size} - {formData?.paste} - {formData?.materials}-{' '}
        {formData?.count}- {formData?.note}
      </h2>
    </div>
  )
}
