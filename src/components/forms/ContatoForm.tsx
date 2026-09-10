import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormField } from './FormField'
import type { ContatoFormData } from '../../types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputBaseClasses =
  'w-full rounded-md border p-[10px] text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]'

function inputClasses(hasError: boolean) {
  return `${inputBaseClasses} ${hasError ? 'border-red-500' : 'border-[#ccc]'}`
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
      className="mx-auto max-w-[600px] rounded-lg bg-white p-[30px]"
    >
      {enviado && (
        <div className="mb-[15px] rounded-md bg-[#d4edda] p-3 text-center text-[#155724]" role="status">
          Mensagem enviada com sucesso!
        </div>
      )}

      <FormField label="Nome:" htmlFor="nome" error={errors.nome?.message}>
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

      <FormField label="E-mail:" htmlFor="email" error={errors.email?.message}>
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

      <FormField label="Assunto:" htmlFor="assunto" error={errors.assunto?.message}>
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

      <FormField label="Mensagem:" htmlFor="mensagem" error={errors.mensagem?.message}>
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
        className="mt-5 w-full rounded-md bg-[#2A6041] p-3 font-bold text-white transition-colors hover:bg-[#1f4830] motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
      >
        Enviar
      </button>
    </form>
  )
}
