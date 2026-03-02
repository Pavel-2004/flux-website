import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-flux-midnight py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/flux-logo.png"
                alt="Flux"
                width={90}
                height={32}
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-flux-lavender/70">
              The AI operating system for modern teams. Connect, organize, and act — all in one workspace.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-flux-lavender mb-4">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {["Features", "How It Works", "Integrations", "Pricing", "Changelog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-flux-lavender/70 transition-colors hover:text-[#ffffff]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-flux-lavender mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {["About", "Blog", "Careers", "Contact", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-flux-lavender/70 transition-colors hover:text-[#ffffff]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-flux-lavender mb-4">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="/privacy" className="text-sm text-flux-lavender/70 transition-colors hover:text-[#ffffff]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-flux-lavender/70 transition-colors hover:text-[#ffffff]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-flux-lavender/70 transition-colors hover:text-[#ffffff]">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-flux-lavender/70 transition-colors hover:text-[#ffffff]">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#ffffff]/10 pt-8 sm:flex-row">
          <p className="text-xs text-flux-lavender/50">
            &copy; {new Date().getFullYear()} Flux. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {/* Social links */}
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-xs text-flux-lavender/50 transition-colors hover:text-[#ffffff]">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Fermion AI Group branding */}
<div
  id="fermion"
  className="mt-10 border-t border-border/60 pt-6 text-center"
>
  <p className="text-sm text-muted-foreground">
    A product of{" "}
    <span className="font-semibold text-foreground">Fermion AI Group</span>
  </p>
</div>
    </footer>
  )
}
