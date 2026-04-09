import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
] as const;
const contactLinks = [
  { href: "tel:09758170391", label: "Phone: 09758170391" },
  { href: "https://myaccount.google.com/personal-info?gar=WzEyMF0&hl=en&utm_source=OGB&utm_medium=act", label: "Email" },
  { href: "https://github.com/cloydinoc-123", label: "Github" },
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="font-semibold text-foreground">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground">Cebu, City</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-foreground">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-foreground">Contact</h3>
            <ul className="space-y-2">
              {contactLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      
    </footer>
  );
}