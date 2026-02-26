"use client"

import { useState } from "react"
import Image from "next/image"
import {
  CheckCircle2,
  CircleDot,
  Clock,
  Calendar,
  Users,
  Hand,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Video,
  ChevronRight,
} from "lucide-react"

const screens = [
  {
    id: "tasks",
    label: "Task Dashboard",
    content: <TaskDashboard />,
  },
  {
    id: "ai",
    label: "AI Side Panel",
    content: <AISidePanel />,
  },
  {
    id: "calendar",
    label: "Calendar View",
    content: <CalendarView />,
  },
  {
    id: "team",
    label: "Team View",
    content: <TeamView />,
  },
  {
    id: "claimable",
    label: "Claimable Tasks",
    content: <ClaimableTasks />,
  },
]

function TaskDashboard() {
  const tasks = [
    { title: "Finalize Q2 OKRs", status: "In Progress", priority: "High", assignee: "SM", dueDate: "Today" },
    { title: "Review product roadmap draft", status: "To Do", priority: "High", assignee: "JK", dueDate: "Tomorrow" },
    { title: "Send client follow-up emails", status: "In Progress", priority: "Medium", assignee: "AL", dueDate: "Mar 2" },
    { title: "Update employee handbook", status: "To Do", priority: "Low", assignee: "RP", dueDate: "Mar 5" },
    { title: "Prepare board deck", status: "In Review", priority: "High", assignee: "SM", dueDate: "Mar 3" },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-foreground">My Tasks</h4>
        <div className="flex gap-2">
          <span className="rounded-full bg-flux-violet px-2.5 py-0.5 text-[10px] font-medium text-[#ffffff]">All</span>
          <span className="rounded-full bg-[#F5F0FF] border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">Personal</span>
          <span className="rounded-full bg-[#F5F0FF] border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">Team</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div key={task.title} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5 hover:bg-[#F5F0FF]/50 transition-colors">
            <CircleDot className={`h-3.5 w-3.5 shrink-0 ${task.status === "In Progress" ? "text-flux-violet" : task.status === "In Review" ? "text-flux-gold" : "text-muted-foreground"}`} />
            <span className="text-xs text-foreground flex-1 truncate">{task.title}</span>
            <span className={`hidden sm:inline rounded-full px-2 py-0.5 text-[10px] font-medium ${task.priority === "High" ? "bg-flux-violet/10 text-flux-violet" : task.priority === "Medium" ? "bg-flux-gold/10 text-[#9a7500]" : "bg-muted text-muted-foreground"}`}>
              {task.priority}
            </span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-flux-violet text-[9px] font-bold text-[#ffffff]">{task.assignee}</div>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">{task.dueDate}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AISidePanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-4 w-4 text-flux-violet" />
        <h4 className="text-sm font-semibold text-foreground">Flux AI Assistant</h4>
      </div>

      <div className="flex flex-col gap-3">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-xl rounded-br-sm bg-flux-violet p-3">
            <p className="text-xs text-[#ffffff]">{"What were the action items from yesterday's product sync?"}</p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex justify-start">
          <div className="max-w-[90%] rounded-xl rounded-bl-sm border border-border bg-[#FBFAFF] p-3">
            <p className="text-xs text-foreground leading-relaxed mb-2">
              {"From yesterday's product sync (Feb 22), here are the action items:"}
            </p>
            <div className="flex flex-col gap-1.5">
              {[
                "Sarah: Finalize Q2 OKRs by Friday",
                "Jake: Ship v2.1 release notes to marketing",
                "Amy: Schedule customer interviews for next sprint",
                "Ryan: Update the product roadmap deck",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-flux-violet" />
                  <span className="text-[11px] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-2.5 flex items-center gap-1 text-[11px] font-medium text-flux-violet">
              Create tasks from these <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 rounded-lg bg-[#F5F0FF] px-3 py-2 border border-border mt-1">
          <MessageSquare className="h-3.5 w-3.5 text-flux-violet" />
          <span className="text-xs text-muted-foreground">Ask Flux anything...</span>
        </div>
      </div>
    </div>
  )
}

function CalendarView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
  const events = [
    { day: 0, time: "9:00", title: "Team standup", color: "bg-flux-violet/10 text-flux-violet border-l-2 border-l-flux-violet" },
    { day: 0, time: "14:00", title: "Client call", color: "bg-[#F5F0FF] text-foreground border-l-2 border-l-flux-soft-indigo" },
    { day: 1, time: "10:00", title: "Product sync", color: "bg-[#eef2ff] text-flux-deep-blue border-l-2 border-l-flux-deep-blue" },
    { day: 2, time: "11:00", title: "Design review", color: "bg-flux-violet/10 text-flux-violet border-l-2 border-l-flux-violet" },
    { day: 2, time: "15:00", title: "1:1 with Jake", color: "bg-flux-gold/10 text-[#9a7500] border-l-2 border-l-flux-gold" },
    { day: 3, time: "9:00", title: "Team standup", color: "bg-flux-violet/10 text-flux-violet border-l-2 border-l-flux-violet" },
    { day: 3, time: "13:00", title: "Sprint planning", color: "bg-[#eef2ff] text-flux-deep-blue border-l-2 border-l-flux-deep-blue" },
    { day: 4, time: "10:00", title: "All-hands", color: "bg-[#F5F0FF] text-foreground border-l-2 border-l-flux-soft-indigo" },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-flux-violet" />
          <h4 className="text-sm font-semibold text-foreground">This Week</h4>
        </div>
        <span className="text-xs text-muted-foreground">Feb 23 - 27, 2026</span>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {days.map((day, dayIndex) => (
          <div key={day} className="flex flex-col gap-1.5">
            <div className="text-center">
              <p className="text-[10px] font-medium text-muted-foreground">{day}</p>
              <p className={`text-xs font-semibold ${dayIndex === 0 ? "text-flux-violet" : "text-foreground"}`}>
                {23 + dayIndex}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              {events
                .filter((e) => e.day === dayIndex)
                .map((event) => (
                  <div key={event.title + event.day} className={`rounded-md px-1.5 py-1 ${event.color}`}>
                    <p className="text-[9px] opacity-70">{event.time}</p>
                    <p className="text-[10px] font-medium truncate">{event.title}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#F5F0FF] border border-border px-3 py-2">
        <Video className="h-3.5 w-3.5 text-flux-violet" />
        <span className="text-[11px] text-foreground">Next: Team standup in 15 min</span>
        <ChevronRight className="h-3 w-3 ml-auto text-flux-violet" />
      </div>
    </div>
  )
}

function TeamView() {
  const members = [
    { name: "Sarah M.", role: "Ops Lead", initials: "SM", tasks: 5, status: "Active" },
    { name: "Jake K.", role: "Product", initials: "JK", tasks: 3, status: "In meeting" },
    { name: "Amy L.", role: "CS Lead", initials: "AL", tasks: 7, status: "Active" },
    { name: "Ryan P.", role: "People Ops", initials: "RP", tasks: 4, status: "Away" },
    { name: "Diana W.", role: "Engineering", initials: "DW", tasks: 6, status: "Active" },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-flux-violet" />
          <h4 className="text-sm font-semibold text-foreground">Team Overview</h4>
        </div>
        <span className="rounded-full bg-[#F5F0FF] border border-border px-2 py-0.5 text-[10px] font-medium text-flux-violet">5 members</span>
      </div>

      <div className="flex flex-col gap-2">
        {members.map((member) => (
          <div key={member.name} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-flux-violet text-[10px] font-bold text-[#ffffff]">
              {member.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-foreground">{member.name}</p>
              <p className="text-[10px] text-muted-foreground">{member.role}</p>
            </div>
            <span className={`hidden sm:inline rounded-full px-2 py-0.5 text-[10px] font-medium ${
              member.status === "Active" ? "bg-[#dcfce7] text-[#166534]" :
              member.status === "In meeting" ? "bg-[#F5F0FF] border border-border text-flux-violet" :
              "bg-muted text-muted-foreground"
            }`}>
              {member.status}
            </span>
            <span className="text-[10px] text-muted-foreground">{member.tasks} tasks</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ClaimableTasks() {
  const tasks = [
    { title: "Write release notes for v2.1", team: "Product", urgency: "Medium", points: 3 },
    { title: "Organize team offsite logistics", team: "Operations", urgency: "High", points: 5 },
    { title: "Create onboarding checklist template", team: "People Ops", urgency: "Low", points: 2 },
    { title: "Update API documentation", team: "Engineering", urgency: "Medium", points: 4 },
    { title: "Schedule Q2 customer reviews", team: "CS", urgency: "High", points: 3 },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Hand className="h-4 w-4 text-flux-violet" />
          <h4 className="text-sm font-semibold text-foreground">Claimable Tasks</h4>
        </div>
        <span className="text-xs text-muted-foreground">5 available</span>
      </div>

      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div key={task.title} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5 hover:border-flux-violet/20 hover:bg-[#F5F0FF]/50 transition-all">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-foreground truncate">{task.title}</p>
              <p className="text-[10px] text-muted-foreground">{task.team}</p>
            </div>
            <span className={`hidden sm:inline rounded-full px-2 py-0.5 text-[10px] font-medium ${
              task.urgency === "High" ? "bg-flux-violet/10 text-flux-violet" :
              task.urgency === "Medium" ? "bg-flux-gold/10 text-[#9a7500]" :
              "bg-muted text-muted-foreground"
            }`}>
              {task.urgency}
            </span>
            <button className="rounded-lg bg-[#F5F0FF] border border-border px-2.5 py-1 text-[10px] font-medium text-flux-violet hover:bg-flux-violet hover:text-[#ffffff] hover:border-flux-violet transition-colors">
              Claim
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProductScreensSection() {
  const [activeScreen, setActiveScreen] = useState("tasks")
  const active = screens.find((s) => s.id === activeScreen)

  return (
    <section id="screens" className="py-20 sm:py-28 bg-[#F5F0FF]/40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-flux-violet mb-3">
            Product Preview
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            A Glimpse Inside Flux
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore the key screens that make Flux the command center for your team.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(screen.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeScreen === screen.id
                  ? "bg-flux-violet text-[#ffffff]"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-flux-violet/20"
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>

        {/* Active screen */}
        <div className="mx-auto max-w-3xl">
          {active?.content}
        </div>
      </div>
    </section>
  )
}
