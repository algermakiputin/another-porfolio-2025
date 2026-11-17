"use client";

/* Lightweight interactive islands: progress, checklists, copy buttons,
   recommendation quiz, and diagram lightbox. No dependencies. */

import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "fh-guide-progress-v1";
const EVENT = "fh-progress-changed";

export type ChapterMeta = { id: string; num: string; title: string; time: string; anchor: string };

export const CHAPTERS: ChapterMeta[] = [
  { id: "c1", num: "1", title: "Ano ba ang hosting?", time: "5 min", anchor: "#chapter-1" },
  { id: "c2", num: "2", title: "Alin ang bagay sa iyo?", time: "8 min", anchor: "#chapter-2" },
  { id: "c3", num: "3", title: "Tutorial: unang website mo", time: "30 min", anchor: "#chapter-3" },
  { id: "c4", num: "4", title: "Para sa developers (React)", time: "25 min", anchor: "#chapter-4" },
  { id: "c5", num: "5", title: "Ayusin ang errors", time: "10 min", anchor: "#chapter-5" },
  { id: "c6", num: "6", title: "Ang totoo sa 'libre'", time: "7 min", anchor: "#chapter-6" },
  { id: "c7", num: "7", title: "Tapusin at i-share", time: "5 min", anchor: "#chapter-7" },
];

/** Every checkable item in the guide. Progress = checked / total. */
export const ALL_STEPS: string[] = [
  "c1",
  "c2",
  "c3-dl",
  "c3-s1",
  "c3-s2",
  "c3-s3",
  "c3-s4",
  "c3-s5",
  "c3-s6",
  "c3-s7",
  "c3-s8",
  "c4-s1",
  "c4-s2",
  "c4-s3",
  "c4-s4",
  "c4-s5",
  "c5",
  "c6",
  "c7",
];

function readStored(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function useGuideProgress() {
  const [done, setDone] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDone(readStored());
    setReady(true);
    const sync = () => setDone(readStored());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* Storage full or blocked: progress just won't persist. */
      }
      window.dispatchEvent(new Event(EVENT));
      return next;
    });
  }, []);

  return { done, ready, toggle, total: ALL_STEPS.length };
}

/** Sticky completion bar. Rendered once near the top of the guide. */
export function GuideProgress() {
  const { done, ready } = useGuideProgress();
  const pct = Math.round((done.length / ALL_STEPS.length) * 100);
  return (
    <div className="fh-progress" role="status" aria-label="Progress sa guide">
      <div className="fh-progress-track">
        <div className="fh-progress-fill" style={{ width: ready ? `${pct}%` : "0%" }} />
      </div>
      <div className="fh-progress-label">
        {ready ? `${done.length} / ${ALL_STEPS.length} steps tapos na (${pct}%) — auto-save sa phone mo` : "Loading progress…"}
      </div>
    </div>
  );
}

/** A single mark-as-complete checkbox. */
export function StepCheck({ id, children }: { id: string; children: React.ReactNode }) {
  const { done, toggle } = useGuideProgress();
  const checked = done.includes(id);
  return (
    <label className={`fh-check${checked ? " fh-checked" : ""}`}>
      <input type="checkbox" checked={checked} onChange={() => toggle(id)} />
      <span>{children}</span>
    </label>
  );
}

/** Table of contents with per-chapter completion dots. */
export function ChapterToc() {
  const { done } = useGuideProgress();
  return (
    <ol>
      {CHAPTERS.map((c) => (
        <li key={c.id}>
          <a href={c.anchor} className={done.includes(c.id) ? "fh-done" : undefined}>
            <span className="fh-ch-num">{done.includes(c.id) ? "✓" : c.num}</span>
            <span>{c.title}</span>
            <span className="fh-ch-time">{c.time}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Code snippet with a copy button. */
export function CodeBlock({ title, code }: { title: string; code: string }) {
  const [label, setLabel] = useState("Kopyahin");
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    []
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setLabel("Na-kopya na ✓");
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLabel("Kopyahin"), 2000);
  };

  return (
    <div className="fh-code">
      <div className="fh-code-head">
        <span>{title}</span>
        <button type="button" className="fh-copy-btn" onClick={copy}>
          {label}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

/** Small inline copy button for links and template texts. */
export function CopyText({ text, label }: { text: string; label: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setDone(true);
    window.setTimeout(() => setDone(false), 2000);
  };
  return (
    <button type="button" className="fh-copy-btn" onClick={copy}>
      {done ? "Na-kopya na ✓" : label}
    </button>
  );
}

/** Tap a diagram to open it bigger. Uses the native dialog element. */
export function DiagramZoom({ label, children }: { label: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" className="fh-zoom-btn" onClick={() => ref.current?.showModal()} aria-label={`${label} — palakihin`}>
        🔍 Palakihin ang diagram
      </button>
      <dialog
        ref={ref}
        className="fh-lightbox"
        aria-label={label}
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        {children}
        <button type="button" className="fh-lightbox-close" onClick={() => ref.current?.close()}>
          Isara
        </button>
      </dialog>
    </>
  );
}

type QuizState = { site: string; git: string; biz: string };

function recommend(q: QuizState) {
  if (q.biz === "yes") {
    return {
      name: "Cloudflare Pages",
      chapter: "Chapter 3 (Plan B) o Chapter 4",
      why: "Ikaw ay kikita o para sa client ang site — at ang Cloudflare ang may pinaka-maluwag na libreng terms: walang commercial-use ban sa docs nila at unlimited ang bandwidth ng static files. Iwas-iwasan ang Vercel Hobby (bawal pang-negosyo sa Terms nila) at GitHub Pages (bawal ang online business) para sa ganitong site.",
      alt: "Kung gusto mo pa rin ng GitHub-style flow, puwede ang Netlify — pero tandaan ang 300 credits kada buwan.",
    };
  }
  if (q.site === "react") {
    if (q.git === "yes") {
      return {
        name: "Vercel",
        chapter: "Chapter 4",
        why: "React app + marunong ka sa Git + hindi pang-negosyo = Vercel ang pinaka-smooth: i-connect mo lang ang GitHub repo at automatic nang nagbi-build at nagde-deploy bawat push. Libre ang 100 GB transfer at 1M function calls kada buwan.",
        alt: "Gusto ng mas malaking bandwidth? Puwede rin ang Cloudflare Pages via Git — parehong may automatic deploys.",
      };
    }
    return {
      name: "Cloudflare Pages (drag & drop)",
      chapter: "Chapter 4, tapos Chapter 3 Plan B",
      why: "React app pero ayaw mo pa ng Git? I-build mo lang locally gamit ang npm run build, tapos i-drag-and-drop ang dist folder sa Cloudflare dashboard. Walang Git na kailangan at unlimited ang bandwidth.",
      alt: "Kapag natuto ka na ng Git, lumipat sa Git-connected deploy para automatic na.",
    };
  }
  if (q.git === "no") {
    return {
      name: "GitHub Pages",
      chapter: "Chapter 3 (main tutorial)",
      why: "Simple site at first time mo? Ang GitHub Pages ang pinaka-madali: lahat gagawin mo sa browser — upload ng files, pindot ng Save — at puwede kahit sa phone. Libre ang hosting, HTTPS, at 100 GB bandwidth kada buwan (soft limit).",
      alt: "Kapag gusto mo ng unlimited bandwidth o custom domain na seryoso, subukan ang Cloudflare Pages.",
    };
  }
  return {
    name: "GitHub Pages",
    chapter: "Chapter 3 (main tutorial)",
    why: "Simple site + marunong ka sa Git = pinakamabilis ang GitHub Pages: push mo lang ang files at naka-live agad. Libre ang HTTPS at custom domain, at 100 GB bandwidth kada buwan.",
    alt: "Para sa mas maraming builds o mas malaking traffic, Cloudflare Pages ang upgrade path.",
  };
}

/** "Anong website ang gagawin mo?" recommendation selector. */
export function CompareQuiz() {
  const [q, setQ] = useState<QuizState>({ site: "", git: "", biz: "" });
  const set = (k: keyof QuizState, v: string) => setQ((p) => ({ ...p, [k]: v }));
  const complete = q.site !== "" && q.git !== "" && q.biz !== "";
  const rec = complete ? recommend(q) : null;

  return (
    <div className="fh-quiz" id="quiz">
      <h3 style={{ marginTop: 0 }}>Anong website ang gagawin mo?</h3>
      <p style={{ marginTop: 0 }}>Sagutin ang 3 tanong para malaman ang bagay na platform sa iyo.</p>
      <fieldset>
        <legend>1. Anong klaseng website?</legend>
        {[
          ["static", "Simple site — portfolio, blog, landing page (HTML/CSS)"],
          ["react", "React / Next.js / Vite app"],
          ["school", "School project o practice lang"],
        ].map(([v, label]) => (
          <label key={v}>
            <input type="radio" name="q-site" value={v} checked={q.site === v} onChange={() => set("site", v)} />
            {label}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>2. Marunong ka na ba sa Git at GitHub?</legend>
        {[
          ["no", "Hindi pa — gusto ko ng pinaka-madali"],
          ["yes", "Oo, nagamit ko na ang push/pull"],
        ].map(([v, label]) => (
          <label key={v}>
            <input type="radio" name="q-git" value={v} checked={q.git === v} onChange={() => set("git", v)} />
            {label}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>3. Kikita ba ito o para sa client/negosyo?</legend>
        {[
          ["no", "Hindi — personal, school, o portfolio lang"],
          ["yes", "Oo — may kita, client, o business"],
        ].map(([v, label]) => (
          <label key={v}>
            <input type="radio" name="q-biz" value={v} checked={q.biz === v} onChange={() => set("biz", v)} />
            {label}
          </label>
        ))}
      </fieldset>
      {rec && (
        <div className="fh-quiz-result" role="status">
          <h4>🎯 Para sa iyo: {rec.name}</h4>
          <p>
            <strong>Bakit?</strong> {rec.why}
          </p>
          <p>
            <strong>Sunod na gawin:</strong> pumunta sa <strong>{rec.chapter}</strong>.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Okay rin:</strong> {rec.alt}
          </p>
        </div>
      )}
      {complete && (
        <button type="button" className="fh-quiz-reset" onClick={() => setQ({ site: "", git: "", biz: "" })}>
          Ulitin ang quiz
        </button>
      )}
    </div>
  );
}
