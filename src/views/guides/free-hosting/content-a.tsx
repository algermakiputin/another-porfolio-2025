/* Chapters 1–2: hosting basics + platform comparison. Server component. */

import { ChapterToc, DiagramZoom, StepCheck } from "./islands";
import { CompareQuiz } from "./islands";
import { DifficultyDiagram, HostingFlowDiagram, HttpsDiagram, StaticVsDynamicDiagram } from "./diagrams";

function ChapterNav({ prev, next }: { prev?: [string, string]; next?: [string, string] }) {
  return (
    <nav className="fh-chapter-nav" aria-label="Chapter navigation">
      <span>{prev ? <a href={prev[1]}>← {prev[0]}</a> : <span />}</span>
      <span>{next ? <a href={next[1]}>{next[0]} →</a> : <span />}</span>
    </nav>
  );
}

export function GuideHero() {
  return (
    <header className="fh-hero">
      <span className="fh-kicker">Libreng step-by-step guide</span>
      <h1>Paano Mag-host ng Website nang LIBRE</h1>
      <p className="fh-lead">
        Para sa Filipino beginners: walang coding experience na kailangan. Sundan lang ang pictures,
        at sa Chapter 3 may <strong>live website</strong> ka na — kahit cellphone lang ang gamit mo.
      </p>
      <div className="fh-btn-row" style={{ justifyContent: "center" }}>
        <a className="fh-btn" href="#chapter-1">Simulan ang Chapter 1 →</a>
        <a className="fh-btn-secondary" href="/guides/free-hosting/sample-site.zip">⬇ Sample website (ZIP)</a>
      </div>
      <div className="fh-meta-row">
        <span className="fh-meta-pill">
          ⏱ <strong>~90 min</strong> lahat-lahat
        </span>
        <span className="fh-meta-pill">
          🌱 <strong>Beginner</strong> friendly
        </span>
        <span className="fh-meta-pill">
          💳 <strong>₱0</strong> para magsimula
        </span>
        <span className="fh-meta-pill">
          📅 Na-verify: <strong>Nob 2026</strong>
        </span>
      </div>
    </header>
  );
}

export function GuideTakeaways() {
  return (
    <div className="fh-takeaways">
      <h2>📌 Key takeaways</h2>
      <ul>
        <li>
          Ang <strong>hosting</strong> ay pagrenta ng espasyo sa internet para makita ng iba ang website mo.
        </li>
        <li>
          <strong>Apat na libreng options:</strong> GitHub Pages, Cloudflare Pages, Vercel, at Netlify — iba-iba
          ang limit at rules.
        </li>
        <li>
          <strong>Pinaka-madali sa beginners:</strong> GitHub Pages — lahat sa browser, puwede sa phone.
        </li>
        <li>
          Hindi lahat puwedeng libre: <strong>basahin ang Chapter 6</strong> bago mag-assume na kasya ang free plan.
        </li>
      </ul>
    </div>
  );
}

export function GuideToc() {
  return (
    <nav className="fh-toc" aria-label="Table of contents">
      <h2>📖 Mga chapters</h2>
      <ChapterToc />
    </nav>
  );
}

export function Chapter1() {
  return (
    <section className="fh-chapter" id="chapter-1" aria-labelledby="ch1-h">
      <h2 id="ch1-h">Chapter 1: Ano ba ang hosting?</h2>
      <p className="fh-time">⏱ Mga 5 minuto · Walang kailangang gawin — intindi lang</p>

      <div className="fh-card">
        <h3>Ang website mo, nasa computer mo lang… hanggang sa i-host mo</h3>
        <p>
          Kapag gumawa ka ng <code>index.html</code> sa laptop mo, ikaw lang ang makakakita. Ang{" "}
          <strong>hosting</strong> ay paglalagay ng files mo sa isang computer na laging naka-on at
          laging naka-connect sa internet — para kahit sino, kahit saan, puwedeng bumisita.
        </p>
      </div>

      <figure className="fh-diagram">
        <HostingFlowDiagram />
        <figcaption>Paano nagiging online ang website: files mo → hosting provider → internet → visitors.</figcaption>
        <DiagramZoom label="Hosting flow diagram">
          <HostingFlowDiagram />
        </DiagramZoom>
      </figure>

      <div className="fh-grid-2">
        <div className="fh-card">
          <h3>🏠 Hosting vs 🌐 Domain</h3>
          <p>
            <strong>Hosting</strong> = ang bahay (kung saan nakatira ang files mo).
            <br />
            <strong>Domain</strong> = ang address (hal. <code>mysite.com</code>).
          </p>
          <p>
            Sa guide na ito, <strong>libre ang hosting</strong> at libre rin ang starter address (hal.{" "}
            <code>username.github.io</code>). Ang sariling <code>.com</code> ay binibili — optional lang iyon.
          </p>
        </div>
        <div className="fh-card">
          <h3>🎁 Ano ang ibig sabihin ng “free hosting”?</h3>
          <p>
            Ang provider ang nagbabayad ng kuryente at internet ng server — ikaw, libre lang gagamit, pero may{" "}
            <strong>limit</strong>: gaano karaming bisita, gaano kabilis mag-build, at anong klaseng site ang puwede.
          </p>
          <p>
            Para sa portfolio, school project, o practice site? <strong>Sobra-sobra na ang libre.</strong>
          </p>
        </div>
      </div>

      <div className="fh-card">
        <h3>🔒 Ano ang HTTPS / SSL?</h3>
        <p>
          Ang <strong>HTTPS</strong> (may padlock 🔒 sa browser) ay naka-encrypt na koneksyon — hindi puwedeng
          manilip ng datos ang nasa gitna. Dati binabayaran ito; ngayon, <strong>libre na ito</strong> sa apat na
          platforms sa guide na ito.
        </p>
      </div>

      <figure className="fh-diagram">
        <HttpsDiagram />
        <figcaption>Ang HTTPS ay parang sealed envelope: ligtas ang usapan ng bisita at website mo.</figcaption>
        <DiagramZoom label="HTTPS diagram">
          <HttpsDiagram />
        </DiagramZoom>
      </figure>

      <div className="fh-card">
        <h3>📄 Static vs ⚙️ Dynamic</h3>
        <p>Dalawang klase ng website — dito nakasalalay kung kasya ang libreng hosting:</p>
      </div>

      <figure className="fh-diagram">
        <StaticVsDynamicDiagram />
        <figcaption>
          Static = fixed files (portfolio, blog). Dynamic = may utak sa server (login, database, shop).
        </figcaption>
        <DiagramZoom label="Static vs dynamic diagram">
          <StaticVsDynamicDiagram />
        </DiagramZoom>
      </figure>

      <div className="fh-good-box">
        <strong>✅ Bakit sapat na ang libre sa beginners?</strong>
        Ang portfolio, school project, at landing page ay static lang — at ang static hosting ay mura para sa
        providers, kaya bukal sa loob nilang ibigay nang libre. Mag-upgrade ka lang kapag kumikita na ang site
        o kailangan na ng database (Chapter 6).
      </div>

      <StepCheck id="c1">Tapos ko nang basahin ang Chapter 1 — gets ko na ang hosting, domain, at HTTPS.</StepCheck>
      <ChapterNav next={["Chapter 2: Alin ang bagay sa iyo?", "#chapter-2"]} />
    </section>
  );
}

export function Chapter2() {
  return (
    <section className="fh-chapter" id="chapter-2" aria-labelledby="ch2-h">
      <h2 id="ch2-h">Chapter 2: Alin sa apat ang bagay sa iyo?</h2>
      <p className="fh-time">⏱ Mga 8 minuto · Ikumpara, tapos sagutin ang quiz sa baba</p>

      <div className="fh-note">
        <strong>🔎 Lahat ng numero sa baba ay galing sa official docs</strong>
        Na-verify noong Nobyembre 2026. Mabilis magbago ang free plans — kapag may duda ka, buksan ang source link.
      </div>

      <div className="fh-table-scroll" role="region" aria-label="Comparison table, scroll sideways on mobile" tabIndex={0}>
        <table className="fh-table">
          <caption style={{ textAlign: "left", padding: "0.5rem 0", color: "var(--fh-muted)" }}>
            Libreng plans, kumpara nang patas. I-scroll nang pakanan sa phone.
          </caption>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">GitHub Pages</th>
              <th scope="col">Cloudflare Pages</th>
              <th scope="col">Vercel (Hobby)</th>
              <th scope="col">Netlify (Free)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Presyo</th>
              <td>$0</td>
              <td>$0</td>
              <td>$0</td>
              <td>$0 — 300 credits/buwan</td>
            </tr>
            <tr>
              <th scope="row">Bandwidth (bisita)</th>
              <td>
                100 GB/buwan <span className="fh-src">(soft limit)</span>
              </td>
              <td>
                <span className="fh-yes">Unlimited</span> <span className="fh-src">(static files)</span>
              </td>
              <td>100 GB transfer/buwan</td>
              <td>
                ~15 GB epektibo <span className="fh-src">(300 ÷ 20 credits/GB — kwenta, hindi quote)</span>
              </td>
            </tr>
            <tr>
              <th scope="row">Builds / deploys</th>
              <td>
                10 builds/oras <span className="fh-src">(soft)</span>
              </td>
              <td>500 builds/buwan</td>
              <td>100 deploys/araw · 45 min bawat build</td>
              <td>
                Bawat prod deploy = 15 credits <span className="fh-src">(~20 deploys/buwan)</span>
              </td>
            </tr>
            <tr>
              <th scope="row">Custom domain + HTTPS</th>
              <td>
                <span className="fh-yes">Oo</span> <span className="fh-src">(1 domain setup, may Enforce HTTPS)</span>
              </td>
              <td>
                <span className="fh-yes">Oo</span> <span className="fh-src">(100/project)</span>
              </td>
              <td>
                <span className="fh-yes">Oo</span> <span className="fh-src">(50/project)</span>
              </td>
              <td>
                <span className="fh-yes">Oo</span>
              </td>
            </tr>
            <tr>
              <th scope="row">Pinaka-madaling deploy</th>
              <td>Upload sa browser — puwede sa phone</td>
              <td>Drag &amp; drop sa dashboard</td>
              <td>Git connect o CLI</td>
              <td>Drag &amp; drop o Git</td>
            </tr>
            <tr>
              <th scope="row">Puwede sa negosyo?</th>
              <td>
                <span className="fh-no">Hindi</span> <span className="fh-src">— bawal ang online business/e-commerce/SaaS sa docs</span>
              </td>
              <td>
                <span className="fh-yes">Oo</span> <span className="fh-src">— walang commercial ban sa docs</span>
              </td>
              <td>
                <span className="fh-no">Hindi</span> <span className="fh-src">— “personal or non-commercial use” lang (ToS)</span>
              </td>
              <td>
                <span className="fh-maybe">Hindi verified</span> <span className="fh-src">— basahin ang ToS nila</span>
              </td>
            </tr>
            <tr>
              <th scope="row">Bagay sa</th>
              <td>First-timers, portfolio, school</td>
              <td>Lahat — lalo na business at viral traffic</td>
              <td>React/Next.js devs (personal)</td>
              <td>Prototypes, forms, serverless test</td>
            </tr>
            <tr>
              <th scope="row">Kahirapan</th>
              <td>⭐ Pinaka-madali</td>
              <td>⭐⭐ Madali</td>
              <td>⭐⭐⭐ Kailangan ng Git</td>
              <td>⭐⭐ Madali</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure className="fh-diagram">
        <DifficultyDiagram />
        <figcaption>Deployment difficulty: mas maikli ang bar, mas madali para sa beginner.</figcaption>
        <DiagramZoom label="Difficulty chart">
          <DifficultyDiagram />
        </DiagramZoom>
      </figure>

      <div className="fh-warn">
        <strong>⚠️ Tungkol sa Netlify</strong>
        Noong Sep 2025, pinalitan ng Netlify ang lumang Starter plan (100 GB + 300 build minutes) ng{" "}
        <strong>credit system</strong> para sa bagong accounts: 300 credits/buwan, at bawat deploy at GB ay may
        bawas. Okay pa rin sa practice, pero ubusin nang maingat — detalye sa Chapter 6.
      </div>

      <CompareQuiz />

      <div className="fh-card">
        <h3>📚 Sources (official docs, Nov 2026)</h3>
        <ul className="fh-verify-list">
          <li>
            GitHub Pages limits —{" "}
            <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits">
              docs.github.com…/github-pages-limits
            </a>
          </li>
          <li>
            Cloudflare Pages limits —{" "}
            <a href="https://developers.cloudflare.com/pages/platform/limits/">
              developers.cloudflare.com…/limits
            </a>{" "}
            +{" "}
            <a href="https://developers.cloudflare.com/pages/functions/pricing/">
              static requests free &amp; unlimited
            </a>
          </li>
          <li>
            Vercel Hobby plan —{" "}
            <a href="https://vercel.com/docs/plans/hobby">vercel.com/docs/plans/hobby</a> + commercial ban sa{" "}
            <a href="https://vercel.com/legal/terms">Terms of Service § Hobby Plan</a>
          </li>
          <li>
            Netlify Free credits — <a href="https://www.netlify.com/pricing/">netlify.com/pricing</a> +{" "}
            <a href="https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/">
              credit-based plans docs
            </a>
          </li>
        </ul>
      </div>

      <StepCheck id="c2">Nakapili na ako ng platform (o sinagutan ang quiz).</StepCheck>
      <ChapterNav prev={["Chapter 1", "#chapter-1"]} next={["Chapter 3: Unang website mo", "#chapter-3"]} />
    </section>
  );
}
