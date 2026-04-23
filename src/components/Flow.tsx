const steps = [
  {
    num: "01",
    title: "お問い合わせ",
    duration: "〜即日",
    desc: "フォームに必要事項を入力して送信するだけ。ヒアリングシートと照らし合わせながら、スムーズに進みます。",
    detail: "フォーム記入 → 自動受付確認メール",
  },
  {
    num: "02",
    title: "ヒアリング",
    duration: "1〜2日",
    desc: "チャット（Slack / LINE / メール）で詳細をヒアリング。目標・ターゲット・参考サイトを確認し、方向性を固めます。",
    detail: "テキストベースのやり取りのみ",
  },
  {
    num: "03",
    title: "お見積もり・ご提案",
    duration: "2〜3日",
    desc: "ヒアリング内容をもとに、費用・工数・スケジュールを提示。疑問点はすべて解消してから進めます。",
    detail: "見積書・制作仕様書をPDF共有",
  },
  {
    num: "04",
    title: "制作・中間確認",
    duration: "2〜6週間",
    desc: "デザイン→コーディングの順で進行。中間確認はURLで共有するので、リアルタイムで進捗を確認できます。",
    detail: "ステージング環境で随時プレビュー可",
  },
  {
    num: "05",
    title: "修正・最終確認",
    duration: "3〜5日",
    desc: "ご要望の修正を対応後、最終チェックを実施。スマホ・各ブラウザでの表示確認も含みます。",
    detail: "修正2回まで無料で対応",
  },
  {
    num: "06",
    title: "納品・公開",
    duration: "〜即日",
    desc: "サーバーへのデプロイ・ドメイン設定をサポート。公開後の操作マニュアルも提供します。",
    detail: "公開後1ヶ月の保証期間あり",
  },
];

export default function Flow() {
  return (
    <section
      id="flow"
      className="py-28 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Process
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            制作の<span className="gradient-text">流れ</span>
          </h2>
          <p
            className="max-w-lg mx-auto text-base"
            style={{ color: "var(--text-muted)" }}
          >
            初めてのWeb制作でも安心。すべてのステップをテキスト・メールで進めます。
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-8 bottom-8 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 items-start">
                {/* Step number circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
                  style={{
                    background: i === 0 ? "var(--accent)" : "var(--bg-card)",
                    border: `1px solid ${i === 0 ? "transparent" : "var(--border)"}`,
                    color: i === 0 ? "#000" : "var(--text-muted)",
                  }}
                >
                  <span className="text-xs font-bold">{step.num}</span>
                </div>

                {/* Content */}
                <div
                  className="card-hover flex-1 p-5 rounded-2xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "var(--accent-dim)",
                        color: "var(--accent)",
                        border: "1px solid rgba(0,200,255,0.2)",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.desc}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#3a4560" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
