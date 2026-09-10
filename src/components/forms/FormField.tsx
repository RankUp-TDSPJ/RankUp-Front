import type { ReactNode } from 'react'

type FormFieldProps = {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}

export function FormField({ label, htmlFor, error, children }: FormFieldProps) {
  return (
    <div className="mt-[15px]">
      <label htmlFor={htmlFor} className="mb-[6px] block font-bold text-[#333]">
        {label}
      </label>
      {children}
      {error && (
        <span className="mt-1 block text-[13px] text-red-600" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
