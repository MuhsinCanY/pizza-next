'use client'
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { createContext } from 'react'

export interface FormDataContextProps {
  formData: any
  setFormData: Dispatch<SetStateAction<any>>
}

const FormDataContext = createContext<FormDataContextProps>({
  formData: {},
  setFormData: () => {},
})

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
