"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-6"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <p className="text-xl font-bold tracking-tight">
              アカシ<span className="gradient-text">Web制作</span>
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              明石市発 &middot; 全国対応 &middot; オンライン完結Web制作
            </p>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            {[
              { label: "特徴", href: "#why-online" },
              { label: "サービス", href: "#services" },
              { label: "制作の流れ", href: "#flow" },
              { label: "お問い合わせ", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "#3a4560" }}>
            &copy; {year} アカシWeb制作. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
