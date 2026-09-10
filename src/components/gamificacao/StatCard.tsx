type StatCardProps = {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="min-w-full flex-1 rounded-lg bg-white p-5 text-center shadow-md md:min-w-[200px]">
      <p className="text-[32px] font-bold text-[#2A6041]">{value}</p>
      <p className="text-sm text-[#666]">{label}</p>
    </div>
  )
}
