"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";
const contactEmail = "akashi.web.design1031@gmail.com";
const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const budgetOptions = [
  "〜¥50,000",
  "¥50,000〜¥150,000",
  "¥150,000〜¥300,000",
  "¥300,000以上",
  "未定・相談したい",
];

const typeOptions = [
  "コーポレートサイト",
  "ランディングページ",
  "ECサイト",
  "既存サイトのリニューアル",
  "その他",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEndpoint) {
      setStatus("error");
      setErrorMessage("フォーム送信設定が未完了です。メールで直接ご連絡ください。");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          type: form.type || "未選択",
          budget: form.budget || "未選択",
          message: form.message,
          _replyto: form.email,
          _subject: `【Web制作相談】${form.name}様より`,
        }),
      });

      if (!response.ok) {
        throw new Error("send_failed");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        type: "",
        budget: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-400/30";
  const inputStyle = {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            お問い合わせ・<span className="gradient-text">無料相談</span>
          </h2>
          <p
            className="max-w-md mx-auto text-base"
            style={{ color: "var(--text-muted)" }}
          >
            フォームに記入して送信するだけ。48時間以内に返信します。
            電話・対面は不要です。
          </p>
        </div>

        {/* Form */}
        {status === "success" ? (
          <div
            className="text-center p-12 rounded-2xl"
            style={{
              background: "var(--accent-dim)",
              border: "1px solid rgba(0,200,255,0.25)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "var(--accent)", color: "#000" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              送信しました
            </h3>
            <p style={{ color: "var(--text-muted)" }} className="text-sm">
              ご連絡ありがとうございます。48時間以内にご返信いたします。
            </p>
          </div>
        ) : status === "error" ? (
          <div
            className="text-center p-10 rounded-2xl"
            style={{
              background: "rgba(255, 140, 140, 0.08)",
              border: "1px solid rgba(255, 140, 140, 0.3)",
            }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              送信できませんでした
            </h3>
            <p style={{ color: "var(--text-muted)" }} className="text-sm mb-3">
              {errorMessage}
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm font-semibold"
              style={{ color: "var(--accent)" }}
            >
              {contactEmail} にメールする
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 md:p-10 flex flex-col gap-5"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  お名前 <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  メールアドレス <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                会社名・店舗名（任意）
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="株式会社〇〇 / ○○店"
                className={inputClass}
                style={inputStyle}
              />
            </div>

            {/* Type + Budget */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  制作の種類
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">選択してください</option>
                  {typeOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  ご予算
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">選択してください</option>
                  {budgetOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                ご要望・ご質問 <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="現在のサイトの課題、作りたいサイトのイメージ、参考にしたいURLなど、何でもお気軽にお書きください。"
                className={inputClass}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {/* Privacy note */}
            <p className="text-xs" style={{ color: "#3a4560" }}>
              送信していただいた情報は、お問い合わせへの返答以外の目的では使用しません。
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="py-4 rounded-xl font-semibold text-sm transition-all duration-200 mt-1"
              style={{
                background: status === "submitting" ? "rgba(0,200,255,0.4)" : "var(--accent)",
                color: "#000",
                cursor: status === "submitting" ? "not-allowed" : "pointer",
                boxShadow: status === "submitting" ? "none" : "0 0 30px var(--accent-glow)",
              }}
            >
              {status === "submitting" ? "送信中..." : "送信する（無料・返信48h以内）"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
