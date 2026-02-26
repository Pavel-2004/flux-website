import { Cable, Layers, Sparkles } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Cable,
    title: "Connect your tools",
    description:
      "Link Slack, Google Drive, Calendar, your CRM, HR platform, and more. Flux integrates in minutes with no engineering effort.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Flux structures your workspace",
    description:
      "Flux indexes your tools, organizes knowledge, refers to policies, and builds a unified context layer across everything.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Your team asks and acts",
    description:
      "Employees ask questions, get intelligent answers, see prioritized tasks, and take action — all from one workspace.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F5F0FF]/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-flux-violet mb-3">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Up and Running in Three Steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Flux is designed to be effortless. Connect, organize, and empower your team — without complex setup.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Connector line (visible on desktop between steps) */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-border md:block" />
              )}

              <div className="relative mb-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border text-flux-violet">
                  <item.icon className="h-8 w-8" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-flux-violet text-[11px] font-bold text-[#ffffff]">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
