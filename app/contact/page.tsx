// src/app/contact/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | LearnSphere Institute",
  description:
    "Contact LearnSphere Institute for course guidance, custom training, or support.",
};

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-3xl font-semibold text-slate-50">Contact</h1>
      <p className="text-sm text-slate-400">
        Need course guidance, group training for your team, or have a question?
        Reach out and we&apos;ll respond as soon as we can.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-300">
            Name
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300">
            Message
          </label>
          <textarea
            rows={4}
            className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400"
        >
          Send message
        </button>
      </form>

      <p className="text-xs text-slate-500">
        Or contact directly via WhatsApp: +92-XXX-XXXXXXX (placeholder)
      </p>
    </div>
  );
}
