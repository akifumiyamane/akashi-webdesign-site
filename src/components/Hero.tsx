"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      style={{ paddingTop: "64px" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,200,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span
            className="text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{
              background: "var(--accent-dim)",
              color: "var(--accent)",
              border: "1px solid rgba(0,200,255,0.2)",
            }}
          >
            明石市発 &middot; 全国対応 &middot; オンライン完結
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          会わなくても、
          <br />
          <span className="gradient-text accent-glow">一流のWebを。</span>
        </h1>

        {/* Sub headline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          ヒアリングから納品まで、すべてオンラインで完結。
          <br className="hidden md:block" />
          移動ゼロ、無駄ゼロ。その分、品質に全力を。
        </p>
        <p
          className="text-sm max-w-xl mx-auto mb-10"
          style={{ color: "#4a5568" }}
        >
          地元・明石市はもちろん、全国どこの企業・店舗様もご依頼いただけます。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "#000",
              boxShadow: "0 0 30px var(--accent-glow)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 50px var(--accent-glow), 0 0 80px rgba(0,200,255,0.2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 30px var(--accent-glow)";
              (e.currentTarget as HTMLElement).style.transform = "";
            }}
          >
            無料相談・お問い合わせ
          </a>
          <a
            href="#why-online"
            className="px-8 py-4 rounded-xl text-base font-medium transition-all duration-200"
            style={{
              background: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(0,200,255,0.3)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
            }}
          >
            なぜオンラインで安心なのか
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-16 pt-10 border-t grid grid-cols-3 gap-8 max-w-lg mx-auto"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { value: "100%", label: "オンライン完結" },
            { value: "48h", label: "初回返信目安" },
            { value: "全国", label: "対応エリア" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl font-bold gradient-text"
              >
                {stat.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
      />
    </section>
  );
}
