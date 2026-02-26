import Image from "next/image"
import {
  Search,
  Bell,
  Calendar,
  CheckCircle2,
  MessageSquare,
  BarChart3,
  Users,
  FileText,
  Sparkles,
  ArrowRight,
  Clock,
  CircleDot,
} from "lucide-react"

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="rounded-2xl border border-border bg-card shadow-xl shadow-[#270072]/[0.04] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/flux-logo.png"
              alt="Flux Workspace"
              width={80}
              height={28}
              className="h-5 w-auto"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Search workspace...</span>
            </div>
            <Bell className="h-4 w-4 text-muted-foreground" />
            <div className="h-6 w-6 rounded-full bg-flux-violet" />
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden md:flex w-52 shrink-0 flex-col border-r border-border bg-[#F5F0FF]/60 p-3">
            <div className="flex flex-col gap-1">
              {[
                { icon: BarChart3, label: "Dashboard", active: true },
                { icon: CheckCircle2, label: "Tasks", active: false },
                { icon: Calendar, label: "Calendar", active: false },
                { icon: MessageSquare, label: "Messages", active: false },
                { icon: Users, label: "Team", active: false },
                { icon: FileText, label: "Knowledge", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium ${
                    item.active
                      ? "bg-card text-flux-violet border border-border"
                      : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col lg:flex-row">
            {/* Main content */}
            <div className="flex-1 p-4 sm:p-5">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-foreground">Good morning, Sarah</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{"Here's what needs your attention today"}</p>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                {[
                  { label: "Open tasks", value: "12", color: "text-flux-violet" },
                  { label: "Due today", value: "3", color: "text-foreground" },
                  { label: "Meetings", value: "4", color: "text-foreground" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-card p-2.5 sm:p-3">
                    <p className={`text-lg sm:text-xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Tasks list */}
              <div className="rounded-xl border border-border p-3">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-semibold text-foreground">Priority Tasks</h4>
                  <span className="rounded-full bg-[#F5F0FF] border border-border px-2 py-0.5 text-[10px] font-medium text-flux-violet">5 pending</span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { task: "Review Q1 marketing budget", tag: "Finance", tagColor: "bg-flux-gold/10 border border-flux-gold/20 text-[#9a7500]" },
                    { task: "Approve new hire onboarding", tag: "HR", tagColor: "bg-[#F5F0FF] border border-border text-flux-violet" },
                    { task: "Prepare client presentation", tag: "Sales", tagColor: "bg-[#eef2ff] border border-[#c7d2fe] text-flux-deep-blue" },
                  ].map((item) => (
                    <div key={item.task} className="flex items-center gap-3 rounded-lg bg-[#F5F0FF]/40 px-3 py-2">
                      <CircleDot className="h-3.5 w-3.5 shrink-0 text-flux-violet" />
                      <span className="text-xs text-foreground flex-1 truncate">{item.task}</span>
                      <span className={`hidden sm:inline rounded-full px-2 py-0.5 text-[10px] font-medium ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Side Panel */}
            <div className="w-full lg:w-64 shrink-0 border-t lg:border-t-0 lg:border-l border-border bg-[#FBFAFF] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-flux-violet" />
                <h4 className="text-xs font-semibold text-foreground">Flux AI</h4>
              </div>

              <div className="flex flex-col gap-3">
                <div className="rounded-xl bg-card border border-border p-3">
                  <p className="text-[11px] text-muted-foreground mb-1.5">Suggestion</p>
                  <p className="text-xs text-foreground leading-relaxed">
                    {"The Q1 budget review has 3 comments from your team. Want me to summarize them?"}
                  </p>
                  <button className="mt-2 flex items-center gap-1 text-[11px] font-medium text-flux-violet">
                    Summarize <ArrowRight className="h-3 w-3" />
                  </button>
                </div>

                <div className="rounded-xl bg-card border border-border p-3">
                  <p className="text-[11px] text-muted-foreground mb-1.5">Meeting recap</p>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Clock className="h-3 w-3 text-flux-soft-indigo" />
                    <span className="text-[11px] text-muted-foreground">Today, 10:00 AM</span>
                  </div>
                  <p className="text-xs text-foreground leading-relaxed">
                    Product sync: 4 action items assigned, 2 blockers identified.
                  </p>
                </div>

                <div className="rounded-xl bg-[#F5F0FF] border border-border p-3">
                  <div className="flex items-center gap-2 rounded-lg bg-card px-3 py-2 border border-border">
                    <MessageSquare className="h-3.5 w-3.5 text-flux-violet" />
                    <span className="text-xs text-muted-foreground">Ask Flux anything...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#FBFAFF]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Badge with gradient border */}
        <div className="flex justify-center mb-6">
          <div className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-card">
            {/* Gradient border effect */}
            <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-flux-violet to-flux-magenta" aria-hidden="true">
              <span className="block h-full w-full rounded-full bg-card" />
            </span>
            <span className="relative flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-flux-violet" />
              <span className="text-xs font-medium text-foreground">AI-Powered Workspace Intelligence</span>
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {"Your Company's "}
          <span className="text-flux-violet">
            AI Operating System
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Flux connects your tools, tasks, meetings, and internal knowledge into one
          intelligent workspace — so your team always knows what to do next.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl bg-flux-violet px-7 py-3.5 text-sm font-semibold text-[#ffffff] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#F5F0FF]"
          >
            See How It Works
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 sm:mt-20">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
