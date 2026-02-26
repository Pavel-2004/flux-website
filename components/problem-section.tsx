import { Layers, Search, Clock, HelpCircle, EyeOff } from "lucide-react"

const problems = [
  {
    icon: Layers,
    title: "Too many tools, zero clarity",
    description:
      "Your team juggles Slack, Drive, Notion, Jira, email, and more. Information lives everywhere and nowhere.",
  },
  {
    icon: Search,
    title: "Tasks scattered across platforms",
    description:
      "Action items are buried in threads, docs, and meeting notes. Nothing is centralized or trackable.",
  },
  {
    icon: Clock,
    title: "Meeting notes vanish instantly",
    description:
      "Important decisions and follow-ups disappear. Teams spend hours reconstructing what was discussed.",
  },
  {
    icon: HelpCircle,
    title: "Employees constantly ask for context",
    description:
      "New and existing team members waste time searching for processes, policies, and tribal knowledge.",
  },
  {
    icon: EyeOff,
    title: "Managers lack visibility",
    description:
      "Without a single source of truth, leaders can't see what's on track, what's blocked, or who needs help.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="relative overflow-hidden py-20 sm:py-28 bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(114,49,255,0.04),transparent_25%,transparent_75%,rgba(114,49,255,0.04))]" >
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-flux-violet mb-3">
            The Problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Work Is Fragmented
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Modern teams are drowning in tool overload. Critical context gets lost, decisions slow down, and nobody has the full picture.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={[
                "rounded-2xl border border-border bg-card p-6",
                "lg:col-span-2",
                problems.length === 5 && index === 3 ? "lg:col-start-2" : "",
                problems.length === 5 && index === 4 ? "lg:col-start-4" : "",
              ].join(" ")}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F0FF] text-flux-violet">
                <problem.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
