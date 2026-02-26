import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  return (
    <section id="cta" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-flux-violet">
            <Sparkles className="h-7 w-7 text-[#ffffff]" />
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
          Stop Switching Tools.{" "}
          <span className="text-flux-violet">
            Start Operating Smarter.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Join the teams that have replaced tool chaos with intelligent, connected operations. Book a demo and see Flux in action.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-flux-violet px-8 py-4 text-base font-semibold text-[#ffffff] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-[#F5F0FF]"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  )
}
