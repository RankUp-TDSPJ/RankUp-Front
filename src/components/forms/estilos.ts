export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputBaseClasses =
  'w-full rounded-lg border bg-fundo px-3 py-2.5 text-sm transition-colors motion-reduce:transition-none focus:border-verde-medio focus:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro'

export function inputClasses(hasError: boolean) {
  return `${inputBaseClasses} ${hasError ? 'border-red-500' : 'border-borda-forte'}`
}

export const submitButtonClasses =
  'mt-6 w-full rounded-lg bg-verde-escuro p-3.5 font-bold text-white transition motion-reduce:transition-none hover:bg-verde-profundo active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro disabled:cursor-wait disabled:opacity-70'
