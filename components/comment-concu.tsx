import { Search, Users, Share2 } from "lucide-react"

const etapes = [
  {
    icon: Search,
    number: "1",
    title: "Identifier les besoins du terrain",
    description:
      "Chaque formation naît d'un besoin réel, observé dans les institutions sociales et médico-sociales. Nous partons des questions concrètes que se posent les équipes, pas d'un programme théorique.",
  },
  {
    icon: Users,
    number: "2",
    title: "Co-construire avec un·e expert·e du domaine",
    description:
      "La formation est développée avec un·e professionnel·le qui exerce dans ce champ précis. Son ancrage dans la pratique garantit un contenu juste, applicable et fidèle aux réalités de l'accompagnement.",
  },
  {
    icon: Share2,
    number: "3",
    title: "Publier et mettre à disposition de toute l'équipe",
    description:
      "Une fois conçue, la formation rejoint la plateforme. Elle devient accessible à l'ensemble des collaborateurs, à leur rythme, pour construire un regard partagé au sein de l'institution.",
  },
]

export function CommentConcu() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Comment nos formations sont conçues
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Une démarche ancrée dans la pratique, du besoin réel à la formation
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Nos formations ne sortent pas de la tête d'une seule personne. Elles partent du terrain
            et se construisent avec celles et ceux qui l'exercent.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {etapes.map((etape, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-[#3DBFA0] text-sm font-bold text-white">
                {etape.number}
              </div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B2D5B]/10">
                <etape.icon className="h-7 w-7 text-[#1B2D5B]" />
              </div>

              <h3 className="text-balance text-lg font-semibold text-[#1B2D5B]">
                {etape.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{etape.description}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base text-muted-foreground italic">
          C'est notre façon d'ancrer les compétences sur le terrain : en partant de lui, et en y
          revenant.
        </p>
      </div>
    </section>
  )
}
