import { Button } from "@/components/ui/button"
import { hero } from "@/content/site"

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

        {/* Mentions — volontairement non périssables : aucune valeur chiffrée
            liée au catalogue, qui périmerait à chaque publication. */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {hero.mentions.map((m, i) => (
            <div
              key={i}
              className={`rounded-lg p-3 ${i === 1 ? "bg-primary/10" : "bg-accent/10"}`}
            >
              <div
                className={`text-[11px] font-bold leading-tight ${
                  i === 1 ? "text-primary" : "text-accent"
                }`}
              >
                {m.mention}
              </div>
              <div
                className={`mt-1 text-[10px] leading-tight ${
                  i === 1 ? "text-primary/60" : "text-accent/70"
                }`}
              >
                {m.precision}
              </div>
            </div>
          ))}
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
              {hero.titre}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {hero.soutitre}
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
