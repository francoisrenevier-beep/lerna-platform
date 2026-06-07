import { Button } from "@/components/ui/button"

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Main dashboard card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/20" />
            <div>
              <div className="h-3 w-24 rounded bg-primary/20" />
              <div className="mt-1.5 h-2 w-16 rounded bg-muted-foreground/20" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-lg bg-secondary" />
            <div className="h-8 w-8 rounded-lg bg-secondary" />
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-4">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-32 rounded bg-primary/20" />
              <div className="h-2 w-8 rounded bg-accent/40" />
            </div>
            <div className="h-2 w-full rounded-full bg-secondary">
              <div className="h-2 w-4/5 rounded-full bg-accent" />
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-28 rounded bg-primary/20" />
              <div className="h-2 w-8 rounded bg-accent/40" />
            </div>
            <div className="h-2 w-full rounded-full bg-secondary">
              <div className="h-2 w-3/5 rounded-full bg-primary" />
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-36 rounded bg-primary/20" />
              <div className="h-2 w-8 rounded bg-accent/40" />
            </div>
            <div className="h-2 w-full rounded-full bg-secondary">
              <div className="h-2 w-2/5 rounded-full bg-accent" />
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-accent/10 p-3">
            <div className="text-lg font-bold text-accent">12</div>
            <div className="h-2 w-12 rounded bg-accent/30" />
          </div>
          <div className="rounded-lg bg-primary/10 p-3">
            <div className="text-lg font-bold text-primary">85%</div>
            <div className="h-2 w-10 rounded bg-primary/30" />
          </div>
          <div className="rounded-lg bg-accent/10 p-3">
            <div className="text-lg font-bold text-accent">3</div>
            <div className="h-2 w-14 rounded bg-accent/30" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-xl bg-accent/20 backdrop-blur" />
      <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-primary/10 backdrop-blur" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="max-w-xl">
            <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              La formation continue, ancrée dans la réalité du terrain.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Learna propose aux institutions sociales et médico-sociales une
              plateforme e-learning pensée pour le terrain, par le terrain. Des
              formations courtes, concrètes, suivies à son rythme — avec des
              outils directement applicables dans votre pratique.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Découvrir les formations
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Demander une licence institution
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <DashboardIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
