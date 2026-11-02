import { Button } from './Button'

type ErroCarregamentoProps = {
  mensagem: string
  onTentarNovamente: () => void
}

export function ErroCarregamento({ mensagem, onTentarNovamente }: ErroCarregamentoProps) {
  return (
    <div className="mx-auto flex max-w-[480px] flex-col items-center gap-4 rounded-xl bg-white p-8 text-center ring-1 ring-red-200" role="alert">
      <p className="text-lg font-bold text-red-700">Ops, algo deu errado</p>
      <p className="text-sm text-cinza">{mensagem}</p>
      <Button variant="ghost" onClick={onTentarNovamente}>
        Tentar novamente
      </Button>
    </div>
  )
}
