/* Chapters 4–7: developer path, troubleshooting, limits, finish. Server component. */

import { readFileSync } from "fs";
import { join } from "path";
import { CodeBlock, CopyText, DiagramZoom, StepCheck } from "./islands";
import { DeployPipelineDiagram } from "./diagrams";

const GUIDE_URL = "https://algermakiputin.com/guides/free-hosting/";

function Trouble({
  symptom,
  cause,
  children,
}: {
  symptom: string;
  cause: string;
  children: React.ReactNode;
}) {
  return (
    <details className="fh-trouble">
      <summary>{symptom}</summary>
      <div className="fh-trouble-body">
        <dl>
          <div>
            <dt>Sintomas</dt>
            <dd>{symptom}</dd>
          </div>
          <div>
            <dt>Malamang na dahilan</dt>
            <dd>{cause}</dd>
          </div>
        </dl>
        <div>
          <strong>Step-by-step fix:</strong>
          {children}
        </div>
      </div>
    </details>
  );
}

export function Chapter4() {
  return (
    <section className="fh-chapter" id="chapter-4" aria-labelledby="ch4-h">
      <h2 id="ch4-h">Chapter 4: Para sa developers (React app)</h2>
      <p className="fh-time">⏱ Mga 25 minuto · Kailangan: laptop + Node.js + Git basics</p>

      <div className="fh-note">
        <strong>🧭 Ang pipeline na gagawin mo</strong>
        Sa Chapter 3, mano-mano ang upload. Dito, automatic: bawat <code>git push</code> ay nagti-trigger ng build
        at bagong deploy — wala ka nang pipindutin.
      </div>

      <figure className="fh-diagram">
        <DeployPipelineDiagram />
        <figcaption>Local code → GitHub → Build → Hosting → Live. Bawat push, bagong deploy.</figcaption>
        <DiagramZoom label="Deployment pipeline diagram">
          <DeployPipelineDiagram />
        </DiagramZoom>
      </figure>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">1</span>
          <h3>Ihanda ang project</h3>
        </div>
        <p>Gagamit tayo ng Vite + React bilang example (pinaka-common sa beginners):</p>
        <CodeBlock
          title="Terminal — gumawa ng project"
          code={`npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev`}
        />
        <p>
          Buksan ang <code>http://localhost:5173</code> — kung may lumabas, ready ka na. I-commit ang lahat sa
          GitHub (bagong public o private repository — puwede ang private dito).
        </p>
        <StepCheck id="c4-s1">Tumakbo ang project ko sa localhost at na-push ko na sa GitHub.</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">2</span>
          <h3>Subukan ang production build nang lokal</h3>
        </div>
        <p>
          Huwag mag-deploy nang hindi sinusubukan ang build — dito lumalabas ang 90% ng errors:
        </p>
        <CodeBlock title="Terminal — build + preview" code={`npm run build\nnpm run preview`} />
        <p>
          Dapat may lumabas na <code>dist/</code> folder at walang error. Kung may error dito, ayusin muna — pareho
          lang ang tatakbo sa hosting.
        </p>
        <StepCheck id="c4-s2">Gumana ang npm run build at may dist/ folder ako.</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">3</span>
          <h3>I-connect ang repo at i-set ang build settings</h3>
        </div>
        <ol>
          <li>
            Sa <strong>Vercel</strong>: <em>Add New → Project → Import</em> ang GitHub repo. Sa{" "}
            <strong>Cloudflare</strong>: <em>Workers &amp; Pages → Create → Connect to Git</em>.
          </li>
          <li>Piliin ang tamang build command at output directory:</li>
        </ol>
        <div className="fh-table-scroll" role="region" aria-label="Build settings table" tabIndex={0}>
          <table className="fh-table">
            <thead>
              <tr>
                <th scope="col">Framework</th>
                <th scope="col">Build command</th>
                <th scope="col">Output directory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Vite (React/Vue)</th>
                <td>
                  <code>npm run build</code>
                </td>
                <td>
                  <code>dist</code>
                </td>
              </tr>
              <tr>
                <th scope="row">Create React App</th>
                <td>
                  <code>npm run build</code>
                </td>
                <td>
                  <code>build</code>
                </td>
              </tr>
              <tr>
                <th scope="row">Next.js</th>
                <td>
                  <code>next build</code>
                </td>
                <td>
                  <code>.next</code> (Vercel lang ang zero-config)
                </td>
              </tr>
              <tr>
                <th scope="row">Astro</th>
                <td>
                  <code>npm run build</code>
                </td>
                <td>
                  <code>dist</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fh-warn">
          <strong>⚠️ Pinakamadalas na mali</strong>
          Maling output directory — hal. <code>build</code> imbes na <code>dist</code> sa Vite. Kapag blanko ang
          site mo, ito ang unang i-check (Chapter 5).
        </div>
        <StepCheck id="c4-s3">Na-connect ko na ang repo at tama ang build command + output directory.</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">4</span>
          <h3>Ayusin ang SPA routing (para hindi mag-404 ang refresh)</h3>
        </div>
        <p>
          Kung gumagamit ka ng React Router: kapag ni-refresh ang <code>/about</code>, hahanapin ng server ang file
          na <code>about.html</code> — wala iyon, kaya 404. Ang fix: ituro lahat ng routes pabalik sa{" "}
          <code>index.html</code>.
        </p>
        <CodeBlock title="Netlify / Cloudflare Pages — file na _redirects (sa public/ o root)" code={`/*    /index.html   200`} />
        <CodeBlock
          title="Vercel — file na vercel.json (sa root)"
          code={`{\n  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]\n}`}
        />
        <div className="fh-note">
          <strong>💡 GitHub Pages?</strong>
          Walang redirect rules ang GitHub Pages. Gamitin ang HashRouter (<code>#/about</code>) o ang kilalang{" "}
          <code>404.html</code> redirect trick — o ilipat ang SPA sa Cloudflare/Vercel.
        </div>
        <StepCheck id="c4-s4">Nalagyan ko na ng routing fix (o hindi SPA ang app ko).</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">5</span>
          <h3>I-deploy at mag-update via git push</h3>
        </div>
        <ol>
          <li>
            Pindutin ang <strong>Deploy</strong> → hintayin ang build logs → buksan ang binigay na URL.
          </li>
          <li>
            Simula ngayon, bawat <code>git push</code> sa main branch ay automatic na nagde-deploy:
          </li>
        </ol>
        <CodeBlock
          title="Terminal — ang habambuhay mong workflow"
          code={`git add .\ngit commit -m "Baguhin ang homepage"\ngit push`}
        />
        <p>
          Bonus: ang bawat pull request ay nakakakuha ng sariling <strong>preview URL</strong> — puwede mong ipakita
          sa client bago i-merge.
        </p>
        <StepCheck id="c4-s5">Naka-deploy ang app ko at nasubukan ang update via git push.</StepCheck>
      </article>

      <nav className="fh-chapter-nav" aria-label="Chapter navigation">
        <span>
          <a href="#chapter-3">← Chapter 3</a>
        </span>
        <span>
          <a href="#chapter-5">Chapter 5: Ayusin ang errors →</a>
        </span>
      </nav>
    </section>
  );
}

export function Chapter5() {
  return (
    <section className="fh-chapter" id="chapter-5" aria-labelledby="ch5-h">
      <h2 id="ch5-h">Chapter 5: Ayusin ang errors</h2>
      <p className="fh-time">⏱ Mga 10 minuto · Pindutin ang card na kamukha ng problema mo</p>

      <div className="fh-note">
        <strong>🩺 Unang lunas sa lahat ng error</strong>
        Hard-refresh muna (<code>Ctrl + Shift + R</code> sa laptop, o i-clear ang cache sa phone browser) at
        maghintay ng 2 minuto — madalas ay luma lang ang naka-save o hindi pa tapos ang build.
      </div>

      <Trouble symptom="❌ 404 Page Not Found" cause="Maling file name, maling folder, o wala pang tapos na build.">
        <ol>
          <li>
            Siguraduhing <code>index.html</code> ang pangalan — hindi <code>Index.html</code> o{" "}
            <code>index (1).html</code>. Case-sensitive ang hosting!
          </li>
          <li>
            Dapat nasa <strong>root</strong> (pinakataas) ng branch/folder ang file — hindi sa subfolder.
          </li>
          <li>Sa GitHub Pages: i-check na ang source ay main + /(root) at may berdeng “live” banner.</li>
          <li>Maghintay ng 2 minuto at i-refresh. Kung SPA route ang 404, basahin ang Step 4 ng Chapter 4.</li>
        </ol>
      </Trouble>

      <Trouble symptom="⬜ Blank white screen (walang laman)" cause="Nabigo ang JavaScript — madalas maling build output o sirang asset path.">
        <ol>
          <li>Buksan ang browser console (F12 → Console) at basahin ang pulang error.</li>
          <li>
            Kung <code>Failed to load resource</code>: maling output directory (hal. <code>build</code> imbes na{" "}
            <code>dist</code>) — ayusin sa hosting dashboard at i-redeploy.
          </li>
          <li>
            Kung Vite + subpath (hal. GitHub project site): i-set ang <code>base</code> sa{" "}
            <code>vite.config.js</code> sa pangalan ng repo (hal. <code>base: &quot;/my-site/&quot;</code>).
          </li>
          <li>
            Subukan muna ang <code>npm run build</code> + <code>npm run preview</code> nang lokal.
          </li>
        </ol>
      </Trouble>

      <Trouble symptom="🎨 Walang CSS o hindi lumalabas ang images" cause="Maling file path — absolute path na hindi tugma sa deploy URL.">
        <ol>
          <li>
            Gamitin ang <strong>relative paths</strong>: <code>href=&quot;styles.css&quot;</code>, hindi{" "}
            <code>href=&quot;/styles.css&quot;</code> (ang `/` ay tumuturo sa domain root).
          </li>
          <li>I-check ang spelling at capital letters ng file names — case-sensitive!</li>
          <li>Siguraduhing na-upload o na-commit din ang CSS at images — hindi lang ang HTML.</li>
          <li>I-check sa Console kung 404 ang CSS file, tapos ayusin ang path at i-redeploy.</li>
        </ol>
      </Trouble>

      <Trouble symptom="📁 Mali ang build directory" cause="Hindi tugma ang output directory sa dashboard sa aktwal na nilalabas ng build.">
        <ol>
          <li>
            Patakbuhin ang <code>npm run build</code> nang lokal at tandaan kung anong folder ang nalikha (
            <code>dist</code>? <code>build</code>?).
          </li>
          <li>Gamitin ang tamang pair mula sa table ng Chapter 4 (Vite = dist, CRA = build).</li>
          <li>I-save ang settings at pindutin ang Redeploy / Retry deploy.</li>
        </ol>
      </Trouble>

      <Trouble symptom="🔀 Sirang routes kapag ni-refresh (SPA)" cause="Walang fallback rule — hinahanap ng server ang file na katumbas ng route.">
        <ol>
          <li>Netlify/Cloudflare: magdagdag ng file na `_redirects` na may `/* /index.html 200`.</li>
          <li>
            Vercel: magdagdag ng `vercel.json` na may rewrites rule (kopyahin sa Chapter 4).
          </li>
          <li>GitHub Pages: lumipat sa HashRouter o ilipat ang SPA sa ibang host.</li>
          <li>I-redeploy at subukang i-refresh ang `/about`.</li>
        </ol>
      </Trouble>

      <Trouble symptom="🔥 Failed deployment (pula ang build)" cause="Error sa build — basahin ang logs, huwag manghula.">
        <ol>
          <li>Buksan ang build logs sa hosting dashboard at hanapin ang unang pulang error.</li>
          <li>
            Kung <code>Module not found</code>: may kulang sa <code>package.json</code> — mag-`npm install` nang
            lokal at i-commit ang nabago.
          </li>
          <li>
            Kung Node version error: i-set ang Node version sa dashboard (hal. 20.x) o magdagdag ng{" "}
            <code>.nvmrc</code> file.
          </li>
          <li>
            Kung timeout: baka masyadong malaki ang project — paliitin ang dependencies o assets.
          </li>
        </ol>
      </Trouble>

      <Trouble symptom="🌐 Hindi gumagana ang custom domain" cause="Maling DNS records o hindi pa tapos ang SSL/propagation (hanggang 24–48 oras).">
        <ol>
          <li>Sundin ang eksaktong DNS records na binigay ng hosting (A/CNAME) — huwag manghula ng IP.</li>
          <li>Sa GitHub Pages: ilagay ang domain sa Pages settings at hintaying ma-check ang Enforce HTTPS.</li>
          <li>
            I-check ang propagation sa <a href="https://www.whatsmydns.net">whatsmydns.net</a> — kung pula pa,
            maghintay lang.
          </li>
          <li>Huwag magpalit-palit ng records kada oras — nare-reset ang paghihintay.</li>
        </ol>
      </Trouble>

      <StepCheck id="c5">Nabasa ko ang troubleshooting at alam ko na ang unang lunas (hard-refresh + hintay).</StepCheck>
      <nav className="fh-chapter-nav" aria-label="Chapter navigation">
        <span>
          <a href="#chapter-4">← Chapter 4</a>
        </span>
        <span>
          <a href="#chapter-6">Chapter 6: Ang totoo sa “libre” →</a>
        </span>
      </nav>
    </section>
  );
}

export function Chapter6() {
  return (
    <section className="fh-chapter" id="chapter-6" aria-labelledby="ch6-h">
      <h2 id="ch6-h">Chapter 6: Ang totoo sa “libre”</h2>
      <p className="fh-time">⏱ Mga 7 minuto · Basahin bago mangako sa client</p>

      <div className="fh-warn">
        <strong>⚠️ Honest talk</strong>
        Hindi lahat ng app ay kasya sa libre. Ang chapter na ito ang magliligtas sa iyo mula sa pangakong hindi mo
        kayang tuparin.
      </div>

      <div className="fh-card">
        <h3>📄 Static files vs 🖥️ Backend — magkaibang mundo</h3>
        <p>
          Ang apat na platforms ay <strong>static-first</strong>: magaling sila sa HTML/CSS/JS files. Pero kapag
          kailangan ng app mo ang mga ito, ibang usapan na:
        </p>
        <ul>
          <li>
            <strong>Database</strong> (saan naka-save ang users, orders, posts?) — wala nito ang static hosting.
            Kailangan mo ng hiwalay na serbisyo (hal. Supabase, Firebase — may sarili silang free tier at limit).
          </li>
          <li>
            <strong>Server-side API</strong> (sikretong logic o API keys) — hindi puwede sa purong static; kailangan
            ng serverless functions o tunay na server.
          </li>
          <li>
            <strong>File uploads mula sa users</strong> (profile pics, attachments) — kailangan ng storage service;
            hindi imbakan ng uploads ang static hosts.
          </li>
          <li>
            <strong>Serverless functions</strong> — maliit na backend snippets. Libre sa limit: hal. Vercel Hobby =
            1M invocations/buwan; Cloudflare = 100k requests/araw (shared sa Workers). Kapag naubos, titigil ang
            feature — hindi magbabayad nang kusa, pero titigil.
          </li>
        </ul>
      </div>

      <div className="fh-card">
        <h3>📊 Usage limits — ano ang nangyayari kapag naubos?</h3>
        <ul>
          <li>
            <strong>GitHub Pages:</strong> soft limits (100 GB/mo, 10 builds/oras) — puwedeng hindi ma-serve ang site
            kapag sobra, o makakatanggap ka ng email na nagsasabing lumipat ng host.
          </li>
          <li>
            <strong>Cloudflare Pages:</strong> unlimited ang static bandwidth — dito pinaka-panatag kapag viral.
            Ang functions ay may daily limit.
          </li>
          <li>
            <strong>Vercel Hobby:</strong> kapag naubos ang quota, maghihintay ka hanggang sa next 30-day cycle —
            hindi ka sisingilin, pero titigil ang feature.
          </li>
          <li>
            <strong>Netlify Free:</strong> hard limit na 300 credits/buwan — kapag ubos, titigil ang deploys at
            services hanggang next month. Walang auto-charge sa Free.
          </li>
        </ul>
      </div>

      <div className="fh-card">
        <h3>💼 Commercial-use rules — basahin bago kumita</h3>
        <ul>
          <li>
            <strong>GitHub Pages:</strong> bawal gamitin bilang libreng host ng online business, e-commerce, o SaaS
            (nakasulat sa limits docs).
          </li>
          <li>
            <strong>Vercel Hobby:</strong> “personal or non-commercial use” lang (Terms of Service) — kapag kumikita
            na, Pro plan ang kailangan (~$20/seat/buwan).
          </li>
          <li>
            <strong>Cloudflare Pages:</strong> walang commercial ban sa product/limits docs — ito ang safe pick sa
            business brochure sites.
          </li>
          <li>
            <strong>Netlify Free:</strong> hindi namin na-verify ang commercial rule sa pricing/docs pages — basahin
            ang Terms nila bago gamitin sa client.
          </li>
        </ul>
      </div>

      <div className="fh-good-box">
        <strong>🚀 Kailan mag-upgrade? 5 senyales</strong>
        1) Kumikita na ang site (kahit piso). 2) Kailangan ng database o login. 3) Laging ubos ang credits/quota. 4)
        May client na umaasa sa uptime. 5) Kailangan ng team seats o mas mahabang build times. Hanggang wala pa
        nito — libre lang, at ayos lang iyon.
      </div>

      <StepCheck id="c6">Naintindihan ko ang limits: backend, database, at commercial rules.</StepCheck>
      <nav className="fh-chapter-nav" aria-label="Chapter navigation">
        <span>
          <a href="#chapter-5">← Chapter 5</a>
        </span>
        <span>
          <a href="#chapter-7">Chapter 7: Tapusin at i-share →</a>
        </span>
      </nav>
    </section>
  );
}

function readTemplate(name: string): string {
  try {
    return readFileSync(join(process.cwd(), "public", "guides", "free-hosting", name), "utf-8").trim();
  } catch {
    return "";
  }
}

export function Chapter7() {
  const messenger = readTemplate("messenger-message.txt");
  const pinned = readTemplate("pinned-comment.txt");
  return (
    <section className="fh-chapter" id="chapter-7" aria-labelledby="ch7-h">
      <h2 id="ch7-h">Chapter 7: Tapusin at i-share</h2>
      <p className="fh-time">⏱ Mga 5 minuto · I-check ang progress mo sa itaas — 100% na ba?</p>

      <div className="fh-good-box">
        <strong>🎓 Natapos mo ang guide!</strong>
        Kung sinundan mo ang Chapters 1–3, may live website ka na. Kung tinapos mo pati ang 4–6, mas marami ka pang
        alam kaysa sa karamihan ng “nag-aaral pa lang mag-host.”
      </div>

      <div className="fh-card">
        <h3>🔗 I-share ang guide</h3>
        <p>Isang link lang — ipasa sa classmates, kaibigan, o sa GC ninyo:</p>
        <p>
          <code>{GUIDE_URL}</code>
        </p>
        <div className="fh-btn-row">
          <CopyText text={GUIDE_URL} label="Kopyahin ang link" />
          <a
            className="fh-btn-secondary"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(GUIDE_URL)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            I-share sa Facebook
          </a>
        </div>
      </div>

      <div className="fh-card fh-faq">
        <h3>❓ Madalas itanong (FAQ)</h3>
        <details className="fh-trouble" open>
          <summary>Libre ba talaga ang mag-host ng website?</summary>
          <div className="fh-trouble-body">
            <p>
              Oo — ang GitHub Pages, Cloudflare Pages, Vercel Hobby, at Netlify Free ay $0 para magsimula,
              pero may limits sa bandwidth, builds, at commercial use.
            </p>
          </div>
        </details>
        <details className="fh-trouble">
          <summary>Alin ang pinaka-madali sa beginners?</summary>
          <div className="fh-trouble-body">
            <p>
              Ang GitHub Pages: lahat gagawin sa browser (upload ng files, pindot ng Save) at puwede kahit sa
              phone.
            </p>
          </div>
        </details>
        <details className="fh-trouble">
          <summary>Puwede ba ang libreng hosting sa business website?</summary>
          <div className="fh-trouble-body">
            <p>
              Depende sa platform: bawal ang online business sa GitHub Pages at non-commercial lang ang Vercel
              Hobby; walang commercial ban ang Cloudflare Pages sa docs nila.
            </p>
          </div>
        </details>
      </div>

      <div className="fh-card">
        <h3>📣 Para sa video: Messenger at pinned comment</h3>
        <p>
          Galing ka ba sa “HOSTING” video? Eto ang dalawang template na kasama ng guide — kopyahin o i-download:
        </p>
        {messenger ? <CodeBlock title="messenger-message.txt" code={messenger} /> : null}
        {pinned ? <CodeBlock title="pinned-comment.txt" code={pinned} /> : null}
        <div className="fh-btn-row">
          <a className="fh-btn-secondary" href="/guides/free-hosting/messenger-message.txt" download>
            ⬇ Messenger message (.txt)
          </a>
          <a className="fh-btn-secondary" href="/guides/free-hosting/pinned-comment.txt" download>
            ⬇ Pinned comment (.txt)
          </a>
        </div>
      </div>

      <div className="fh-author">
        <span className="fh-avatar" aria-hidden="true">
          A
        </span>
        <div>
          <strong>Isinulat ni Alger Makiputin</strong>
          <br />
          <span style={{ color: "var(--fh-muted)", fontSize: "0.9rem" }}>
            Product Engineer (React, TypeScript, mobile &amp; web) — gumagawa ng practical tech guides para sa
            Filipino developers. May tanong? Mag-reply sa video o mag-message sa page.
          </span>
        </div>
      </div>

      <div className="fh-footer-cta">
        <h3 style={{ marginTop: 0 }}>Gusto mo pa ng ganitong tutorials?</h3>
        <p style={{ color: "var(--fh-muted)" }}>
          Pa-follow para sa susunod: custom domains, Git basics, at paano gawing portfolio na nakakakuha ng clients.
        </p>
        <div className="fh-btn-row" style={{ justifyContent: "center" }}>
          <a className="fh-btn" href="/blog/">
            Basahin ang blog →
          </a>
          <a className="fh-btn-secondary" href="/guides/free-hosting/sample-site.zip" download>
            ⬇ Sample website ulit
          </a>
        </div>
      </div>

      <StepCheck id="c7">Tapos ko na ang buong guide — may live website ako!</StepCheck>
      <nav className="fh-chapter-nav" aria-label="Chapter navigation">
        <span>
          <a href="#chapter-6">← Chapter 6</a>
        </span>
        <span>
          <a href="#top">Bumalik sa itaas ↑</a>
        </span>
      </nav>
    </section>
  );
}
