import { Settings, Users, Rocket, HeadphonesIcon } from "lucide-react"

const audiences = [
  {
    icon: Settings,
    title: "Operations Teams",
    description:
      "Streamline internal processes, reduce manual coordination, and give every team member clarity on what to do next.",
    benefits: ["Centralized task management", "Process documentation", "Cross-team visibility"],
  },
  {
    icon: Users,
    title: "HR & People Ops",
    description:
      "Automate onboarding, surface policies instantly, and reduce repetitive questions from employees.",
    benefits: ["Instant policy answers", "Onboarding automation", "Employee self-service"],
  },
  {
    icon: Rocket,
    title: "Scaling Startups",
    description:
      "Keep your growing team aligned without adding layers of management. Flux scales with your org.",
    benefits: ["Knowledge preservation", "Fast onboarding", "Lean operations"],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Success Teams",
    description:
      "Surface client context instantly, track follow-ups, and ensure nothing falls through the cracks.",
    benefits: ["Client context at hand", "Follow-up tracking", "Team coordination"],
  },
]

export function WhoItsForSection() {
  return (
    <section id="who-its-for" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-flux-violet mb-3">
            Who It{"'"}s For
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Built for Teams That Move Fast
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you{"'"}re a 20-person startup or a 500-person org, Flux adapts to how your team actually works.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-flux-violet/20 hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F0FF] text-flux-violet">
                  <audience.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{audience.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">{audience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {audience.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full bg-[#F5F0FF] border border-border px-3 py-1 text-[11px] font-medium text-flux-violet"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
