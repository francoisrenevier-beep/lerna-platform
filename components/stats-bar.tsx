import { Users, BookOpen, Target } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "professionnels formés",
  },
  {
    icon: BookOpen,
    value: "20+",
    label: "formations disponibles",
  },
  {
    icon: Target,
    value: "100%",
    label: "ancré dans le terrain",
  },
]

export function StatsBar() {
  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center sm:flex-row sm:gap-4 sm:text-left"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 sm:mb-0">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
