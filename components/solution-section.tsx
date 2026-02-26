import {
  Link2,
  Brain,
  Mic,
  FileSearch,
  Workflow,
  MessageCircleQuestion,
  Lightbulb,
} from "lucide-react"

const capabilities = [
  {
    icon: Link2,
    title: "Connects your entire stack",
    description: "Slack, Google Drive, Calendar, HR tools, CRM — all unified in one place.",
  },
  {
    icon: Brain,
    title: "Organizes company knowledge",
    description: "Structures scattered information into an accessible, searchable knowledge base.",
  },
  {
    icon: Mic,
    title: "Transcribes meetings automatically",
    description: "Every call and meeting gets transcribed, timestamped, and indexed.",
  },
  {
    icon: FileSearch,
    title: "Creates structured summaries",
    description: "Action items, decisions, and key points extracted and organized.",
  },
  {
    icon: Workflow,
    title: "Surfaces tasks intelligently",
    description: "Tasks from meetings, messages, and docs are captured and prioritized.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Answers workspace questions",
    description: "Employees ask questions and get instant answers from company context.",
  },
  {
    icon: Lightbulb,
    title: "Suggests next actions",
    description: "AI-driven recommendations based on context, deadlines, and priorities.",
  },
]

export function SolutionSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-flux-midnight overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-flux-gold/80 mb-3">
            The Solution
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#ffffff] sm:text-4xl text-balance">
            Meet Flux
          </h2>
          <p className="mt-4 text-base leading-relaxed text-flux-lavender sm:text-lg">
            Flux is a workspace intelligence layer that connects everything your team uses into one system.
            Not automation hype — real operational clarity.
          </p>
        </div>

        {/* Capability cards */}
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8">
          {capabilities.map((cap, index) => (
            <div
  key={index}
  className={[
    "group rounded-2xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-5 backdrop-blur-sm transition-all hover:border-flux-violet/40 hover:bg-[#ffffff]/10",
    // Make every card take 2 columns at XL so 8 columns becomes a 4-card row
    "xl:col-span-2",

    // If there are 7 items, the last row has 3 cards. Shift them by half a card:
    // place them at xl col starts 2, 4, 6
    capabilities.length % 4 === 3 && index === capabilities.length - 3 ? "xl:col-start-2" : "",
    capabilities.length % 4 === 3 && index === capabilities.length - 2 ? "xl:col-start-4" : "",
    capabilities.length % 4 === 3 && index === capabilities.length - 1 ? "xl:col-start-6" : "",
  ].join(" ")}
>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-flux-violet/20 text-flux-violet">
                <cap.icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-[#ffffff] mb-1.5">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-flux-lavender/80">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
