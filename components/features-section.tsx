import {
  MessageSquareText,
  ListChecks,
  Mic2,
  Link2,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: MessageSquareText,
    title: "AI Workspace Assistant",
    description: "Ask anything about your company context. Get answers grounded in your actual tools, docs, and conversations.",
    highlight: "Natural language interface",
  },
  {
    icon: ListChecks,
    title: "Smart Task System",
    description: "Personal tasks, team tasks, and claimable tasks — all intelligently surfaced from meetings, messages, and workflows.",
    highlight: "Auto-captured from context",
  },
  {
    icon: Mic2,
    title: "Meeting Intelligence",
    description: "Every meeting is transcribed, summarized, and turned into actionable reports with clear follow-ups and decisions.",
    highlight: "Transcription + summaries",
  },
  {
    icon: Link2,
    title: "Connected Apps",
    description: "All your tools unified into one intelligent system. No more switching between platforms to find what you need.",
    highlight: "Unified workspace",
  },
  {
    icon: Zap,
    title: "Action Modes",
    description: "Three modes to match how you work: Explain for context, Guide for walkthroughs, Execute for automation.",
    highlight: "Explain. Guide. Execute.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-flux-violet mb-3">
            Core Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything Your Team Needs in One Place
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Flux replaces fragmented workflows with intelligent, connected features
            that keep your team aligned and productive.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-border bg-card p-6 lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              } ${index === 4 ? "lg:col-start-4" : ""}`}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0FF] text-flux-violet">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">{feature.description}</p>
              <span className="inline-flex rounded-full bg-[#F5F0FF] border border-border px-3 py-1 text-[11px] font-medium text-flux-violet">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
