import { Volume2, Eye, Zap, Clock, ArrowLeftRight } from "lucide-react"

const benefits = [
  {
    icon: Volume2,
    title: "Reduces operational noise",
    description: "Cut through the clutter. Flux filters signal from noise so your team focuses on what matters.",
  },
  {
    icon: Eye,
    title: "Improves clarity",
    description: "Everyone knows what to do, who owns what, and where things stand — without asking around.",
  },
  {
    icon: Clock,
    title: "Speeds onboarding",
    description: "New hires get answers instantly from company knowledge. Ramp up in days, not months.",
  },
  {
    icon: ArrowLeftRight,
    title: "Eliminates tool switching",
    description: "One workspace. One context. No more jumping between 10+ tabs to piece together information.",
  },
  {
    icon: Zap,
    title: "Gives managers visibility",
    description: "See team workload, project status, and blockers in one view — without micromanaging.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-flux-violet mb-3">
            Why Teams Trust Flux
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Real Impact. No Exaggeration.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Flux is built for teams that value clarity over complexity. Here{"'"}s what changes when you start using it.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={[
                "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-flux-violet/20 hover:shadow-sm",
                "lg:col-span-2",
                // Offset the last row (for exactly 5 cards)
                benefits.length === 5 && index === 3 ? "lg:col-start-2" : "",
                benefits.length === 5 && index === 4 ? "lg:col-start-4" : "",
              ].join(" ")}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F0FF] text-flux-violet">
                <benefit.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
