const services = [
  {
    tag: "Most Popular",
    title: "ビジネスサイト制作",
    price: "¥120,000〜",
    desc: "5ページ想定のコーポレートサイト。SEO・スマホ対応・お問い合わせフォームを標準装備。",
    features: [
      "Next.js / React による高速構築",
      "レスポンシブ対応（スマホ・タブレット）",
      "SEO基礎設定（メタ・OGP）",
      "お問い合わせフォーム",
      "Googleアナリティクス連携",
      "納品後1ヶ月サポート（軽微対応）",
    ],
    accent: true,
  },
  {
    tag: "LP特化",
    title: "ランディングページ制作",
    price: "¥80,000〜",
    desc: "商品・サービスの購買・申込を最大化する1枚完結のLP。キャンペーン・新商品のローンチに最適。",
    features: [
      "コンバージョン設計",
      "ABテスト対応構造",
      "高速表示最適化",
      "フォーム・CTA設計",
      "アクセス解析設定",
    ],
    accent: false,
  },
  {
    tag: "Store",
    title: "ECサイト構築",
    price: "¥240,000〜",
    desc: "Shopify標準導入で、在庫・決済・配送まで一元管理。運用に強いECを短期間で立ち上げます。",
    features: [
      "Shopify標準導入（テーマ/基本設定）",
      "決済ゲートウェイ連携（Shopify対応）",
      "在庫・注文・顧客管理（Shopify標準）",
      "スマホ最適化（表示速度含む）",
      "お問い合わせ/購入導線設計",
    ],
    accent: false,
  },
];

const addons = [
  { name: "CMS導入（Contentful / Sanity）", price: "¥30,000〜" },
  { name: "ロゴ・ブランドデザイン", price: "¥50,000〜" },
  { name: "コピーライティング", price: "¥20,000〜" },
  { name: "保守・月次更新", price: "¥10,000/月〜" },
  { name: "SEO改善コンサル", price: "¥30,000〜" },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Services
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            サービス・<span className="gradient-text">料金</span>
          </h2>
          <p
            className="max-w-lg mx-auto text-base"
            style={{ color: "var(--text-muted)" }}
          >
            すべてオーダーメイド。まずはお気軽にご相談ください。
          </p>
        </div>

        {/* Main cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover rounded-2xl p-7 flex flex-col relative overflow-hidden"
              style={{
                background: service.accent ? "var(--accent-dim)" : "var(--bg-card)",
                border: service.accent
                  ? "1px solid rgba(0,200,255,0.35)"
                  : "1px solid var(--border)",
              }}
            >
              {/* Glow for accent card */}
              {service.accent && (
                <div
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(0,200,255,0.12) 0%, transparent 70%)",
                  }}
                />
              )}

              <div className="mb-4">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: service.accent ? "rgba(0,200,255,0.2)" : "var(--bg-secondary)",
                    color: service.accent ? "var(--accent)" : "var(--text-muted)",
                    border: `1px solid ${service.accent ? "rgba(0,200,255,0.3)" : "var(--border)"}`,
                  }}
                >
                  {service.tag}
                </span>
              </div>

              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-2xl font-bold mb-3"
                style={{ color: service.accent ? "var(--accent)" : "var(--text-primary)" }}
              >
                {service.price}
              </p>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {service.desc}
              </p>

              <ul className="flex flex-col gap-2 mt-auto">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <circle cx="7" cy="7" r="7" fill="rgba(0,200,255,0.15)" />
                      <path
                        d="M4 7l2 2 4-4"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-7 block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: service.accent ? "var(--accent)" : "transparent",
                  color: service.accent ? "#000" : "var(--accent)",
                  border: service.accent ? "none" : "1px solid rgba(0,200,255,0.3)",
                }}
              >
                相談・見積もりを依頼
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div
          className="rounded-2xl p-7"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <h3
            className="text-base font-semibold mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            オプション・追加サービス
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between px-4 py-3 rounded-xl"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              >
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {addon.name}
                </span>
                <span
                  className="text-sm font-semibold ml-3 whitespace-nowrap"
                  style={{ color: "var(--accent)" }}
                >
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
