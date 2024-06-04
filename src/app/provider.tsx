'use client'
import { useContext, useState } from 'react'
import { createContext } from 'react'

const FormDataContext = createContext({})

export function Provider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState()

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  )
}

export function useFormData() {
  return useContext(FormDataContext)
}
