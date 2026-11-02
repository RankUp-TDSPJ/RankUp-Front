import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ApiError } from '../../services/api'
import { registrarAcao } from '../../services/registroService'
import type { TipoMensagem } from '../../types'
import type { AcaoSustentavel, Nivel, RegistroAcaoRequest } from '../../types/api'
import { formatarCO2, formatarNivel, formatarNumero, hojeISO } from '../../utils/formatadores'
import { inputClasses, submitButtonClasses } from '../forms/estilos'
import { FormField } from '../forms/FormField'
import { Alerta } from '../ui/Alerta'
import { ActionPicker } from './ActionPicker'
import { PointsResult } from './PointsResult'

type RegistrarAcaoFormProps = {
  acoes: AcaoSustentavel[]
  idUsuario: number
  nivelAtual: Nivel
  onRegistrado: () => void
}

// a quantidade fica como texto no formulário (assim o reset consegue limpar o campo) e vira número só no envio
type RegistroFormData = Omit<RegistroAcaoRequest, 'nomeAcao' | 'quantidade'> & { quantidade: string }

type Resultado = { tipo: TipoMensagem; texto: string }

export function RegistrarAcaoForm({ acoes, idUsuario, nivelAtual, onRegistrado }: RegistrarAcaoFormProps) {
  const [nomeAcao, setNomeAcao] = useState<string | null>(null)
  const [semAcao, setSemAcao] = useState(false)
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistroFormData>({ defaultValues: { quantidade: '', data: hojeISO() } })

  const acao = acoes.find((item) => item.nome === nomeAcao) ?? null
  const hoje = hojeISO()

  function escolherAcao(nome: string) {
    setNomeAcao(nome)
    setSemAcao(false)
    setResultado(null)
  }

  // roda também quando outro campo está inválido, para o aviso de ação aparecer junto com os outros erros
  function conferirAcao() {
    if (!nomeAcao) setSemAcao(true)
  }

  async function onSubmit({ quantidade, data }: RegistroFormData) {
    if (!nomeAcao) {
      setSemAcao(true)
      return
    }
    setResultado(null)

    try {
      const criado = await registrarAcao(idUsuario, { nomeAcao, quantidade: Number(quantidade), data })
      const subiuDeNivel = criado.nivel !== nivelAtual ? ` Você subiu para o nível ${formatarNivel(criado.nivel)}!` : ''
      setResultado({
        tipo: 'sucesso',
        texto: `+${formatarNumero(criado.pontosGanhos)} pontos e ${formatarCO2(criado.co2Evitado)} de CO₂ evitado! Agora você tem ${formatarNumero(criado.pontuacaoTotal)} pontos.${subiuDeNivel}`,
      })
      setNomeAcao(null)
      reset({ quantidade: '', data: hojeISO() })
      onRegistrado()
    } catch (error) {
      setResultado({
        tipo: 'erro',
        texto: error instanceof ApiError ? error.message : 'Não foi possível registrar a ação. Tente novamente.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, conferirAcao)} noValidate>
      <ActionPicker acoes={acoes} selecionada={nomeAcao} onSelect={escolherAcao} />
      {semAcao && (
        <span className="mt-2 block text-[13px] text-red-600" role="alert">
          Escolha uma ação.
        </span>
      )}

      <div className="grid gap-x-4 sm:grid-cols-2">
        <FormField
          label={acao ? `Quantidade (${acao.unidade})` : 'Quantidade'}
          htmlFor="registro-quantidade"
          error={errors.quantidade?.message}
        >
          <input
            id="registro-quantidade"
            type="number"
            inputMode="decimal"
            min="0"
            step="any"
            placeholder="Ex.: 5"
            aria-invalid={errors.quantidade ? 'true' : 'false'}
            className={inputClasses(Boolean(errors.quantidade))}
            {...register('quantidade', {
              required: 'Digite a quantidade.',
              validate: (valor) => Number(valor) > 0 || 'A quantidade precisa ser maior que zero.',
            })}
          />
        </FormField>

        <FormField label="Data" htmlFor="registro-data" error={errors.data?.message}>
          <input
            id="registro-data"
            type="date"
            max={hoje}
            aria-invalid={errors.data ? 'true' : 'false'}
            className={inputClasses(Boolean(errors.data))}
            {...register('data', {
              required: 'Escolha a data.',
              // datas no formato yyyy-MM-dd podem ser comparadas como texto
              validate: (valor) => valor <= hojeISO() || 'A data não pode estar no futuro.',
            })}
          />
        </FormField>
      </div>

      <div className="mt-6">
        <PointsResult acao={acao} quantidade={Number(watch('quantidade'))} />
      </div>

      <button type="submit" disabled={isSubmitting} className={submitButtonClasses}>
        {isSubmitting ? 'Registrando...' : 'Registrar ação'}
      </button>

      {resultado && (
        <Alerta tipo={resultado.tipo} className="mt-4">
          {resultado.texto}
        </Alerta>
      )}
    </form>
  )
}
