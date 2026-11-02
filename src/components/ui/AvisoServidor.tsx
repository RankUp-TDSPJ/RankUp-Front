// a API roda no plano gratuito do Render, que "dorme" sem uso e demora para responder na primeira chamada
export function AvisoServidor() {
  return (
    <p className="mt-3 text-center text-xs text-cinza" role="status">
      O primeiro acesso pode levar alguns segundos enquanto o servidor acorda.
    </p>
  )
}
