import { AvisoServidor } from './AvisoServidor'

type CarregandoProps = {
  texto?: string
}

export function Carregando({ texto = 'Carregando...' }: CarregandoProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center" role="status" aria-live="polite">
      <span
        className="h-10 w-10 animate-spin rounded-full border-4 border-verde-suave border-t-verde-escuro motion-reduce:animate-none"
        aria-hidden="true"
      />
      <p className="font-medium text-grafite">{texto}</p>
      <AvisoServidor />
    </div>
  )
}
