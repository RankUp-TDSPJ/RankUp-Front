import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormField } from './FormField'
import type { ContatoFormData } from '../../types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputBaseClasses =
  'w-full rounded-lg border bg-fundo px-3 py-2.5 text-sm transition-colors motion-reduce:transition-none focus:border-verde-medio focus:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro'

function inputClasses(hasError: boolean) {
  return `${inputBaseClasses} ${hasError ? 'border-red-500' : 'border-borda-forte'}`
}

export function ContatoForm() {
  const [enviado, setEnviado] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContatoFormData>()

  function onSubmit() {
    setEnviado(true)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl bg-white p-6 ring-1 ring-borda sm:p-8"
    >
      {enviado && (
        <div className="mb-5 flex items-center justify-center gap-2 rounded-lg bg-verde-suave p-3 text-center text-sm font-medium text-verde-profundo ring-1 ring-verde-claro/40" role="status">
          Mensagem enviada com sucesso!
        </div>
      )}

      <FormField label="Nome" htmlFor="nome" error={errors.nome?.message}>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          aria-invalid={errors.nome ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.nome))}
          {...register('nome', {
            required: 'O nome precisa ter pelo menos 3 letras.',
            minLength: { value: 3, message: 'O nome precisa ter pelo menos 3 letras.' },
          })}
        />
      </FormField>

      <FormField label="E-mail" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="text"
          placeholder="exemplo@email.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.email))}
          {...register('email', {
            required: 'Digite um e-mail válido.',
            pattern: { value: EMAIL_PATTERN, message: 'Digite um e-mail válido.' },
          })}
        />
      </FormField>

      <FormField label="Assunto" htmlFor="assunto" error={errors.assunto?.message}>
        <select
          id="assunto"
          defaultValue=""
          aria-invalid={errors.assunto ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.assunto))}
          {...register('assunto', { required: 'Escolha um assunto.' })}
        >
          <option value="" disabled>
            Selecione...
          </option>
          <option value="duvida">Dúvida</option>
          <option value="sugestao">Sugestão</option>
          <option value="parceria">Parceria</option>
        </select>
      </FormField>

      <FormField label="Mensagem" htmlFor="mensagem" error={errors.mensagem?.message}>
        <textarea
          id="mensagem"
          placeholder="Escreva sua mensagem aqui..."
          aria-invalid={errors.mensagem ? 'true' : 'false'}
          className={`${inputClasses(Boolean(errors.mensagem))} min-h-[100px] resize-y`}
          {...register('mensagem', {
            required: 'A mensagem precisa ter pelo menos 10 letras.',
            minLength: { value: 10, message: 'A mensagem precisa ter pelo menos 10 letras.' },
          })}
        />
      </FormField>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-verde-escuro p-3.5 font-bold text-white transition motion-reduce:transition-none hover:bg-verde-profundo active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
      >
        Enviar
      </button>
    </form>
  )
}
