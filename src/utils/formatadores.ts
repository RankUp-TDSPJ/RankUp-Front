import type { Nivel } from '../types/api'

const numero = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 })

export function formatarNumero(valor: number) {
  return numero.format(valor)
}

export function formatarCO2(kg: number) {
  return `${numero.format(kg)} kg`
}

const NIVEIS: Record<Nivel, string> = {
  INICIANTE: 'Iniciante',
  BRONZE: 'Bronze',
  PRATA: 'Prata',
  OURO: 'Ouro',
}

export function formatarNivel(nivel: Nivel) {
  return NIVEIS[nivel]
}

/** "2026-10-22" → "22/10/2026" */
export function formatarData(iso: string) {
  const [ano, mes, dia] = iso.split('-')
  return dia && mes && ano ? `${dia}/${mes}/${ano}` : iso
}
