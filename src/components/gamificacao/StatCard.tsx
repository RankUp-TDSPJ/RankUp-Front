type StatCardProps = {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-xl bg-white p-5 text-center ring-1 ring-borda transition duration-200 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-lg hover:ring-verde-claro/40">
      <p className="text-[32px] font-bold leading-tight text-verde-escuro">{value}</p>
      <p className="mt-1 text-sm text-cinza">{label}</p>
    </div>
  )
}
