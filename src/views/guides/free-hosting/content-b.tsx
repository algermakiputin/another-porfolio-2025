/* Chapter 3: main GitHub Pages tutorial + Cloudflare Plan B. Server component. */

import { CodeBlock, DiagramZoom, StepCheck } from "./islands";
import { UrlShapesDiagram } from "./diagrams";

function Concept({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="fh-concept">
      <span className="fh-concept-tag">Concept diagram — hindi ito screenshot</span>
      <div className="fh-mock">{children}</div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Chapter3() {
  return (
    <section className="fh-chapter" id="chapter-3" aria-labelledby="ch3-h">
      <h2 id="ch3-h">Chapter 3: Ang unang website mo (main tutorial)</h2>
      <p className="fh-time">⏱ Mga 30 minuto · Kailangan: phone o laptop + email address. Walang i-install.</p>

      <div className="fh-note">
        <strong>🗺 Saan tayo pupunta?</strong>
        GitHub account → bagong repository → upload ng 2 files → pindot ng Save → may live website ka na sa{" "}
        <code>username.github.io/my-first-website/</code>. Sundan nang sunod-sunod at i-check ang bawat step.
      </div>

      <div className="fh-card" id="sample-download">
        <h3>⬇ Step 0: I-download ang sample website</h3>
        <p>
          Ito ang gagamitin mong practice files — isang simpleng portfolio page. I-download mo muna bago magsimula:
        </p>
        <div className="fh-btn-row">
          <a className="fh-btn" href="/guides/free-hosting/sample-site.zip" download>
            ⬇ I-download ang sample-site.zip
          </a>
        </div>
        <p>
          O buksan ang files nang paisa-isa:{" "}
          <a href="/guides/free-hosting/sample-site/index.html">index.html</a> ·{" "}
          <a href="/guides/free-hosting/sample-site/styles.css">styles.css</a>
        </p>
        <p>
          <strong>Sa phone:</strong> pagkatapos mag-download, i-extract ang ZIP (sa Files app, tap ang ZIP). Dapat may{" "}
          <code>index.html</code> at <code>styles.css</code> ka.
        </p>
        <StepCheck id="c3-dl">Na-download at na-extract ko na ang sample files.</StepCheck>
      </div>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">1</span>
          <h3>Gumawa ng GitHub account</h3>
        </div>
        <ol>
          <li>
            Buksan ang <a href="https://github.com/signup">github.com/signup</a>
          </li>
          <li>Ilagay ang email, gumawa ng password, at pumili ng username.</li>
          <li>Sagutan ang verification puzzle at i-verify ang email mo.</li>
          <li>
            Kapag tinanong ang plan, piliin ang <strong>Free</strong> — sapat na iyon.
          </li>
        </ol>
        <Concept caption="Ganyan ang itsura ng signup: email → password → username → verify. Libre ang Free plan.">
          <div className="fh-mock-row">
            <span className="fh-badge-num">1</span> Email address <span className="fh-field">ikaw@example.com</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">2</span> Username <span className="fh-field">ikaw-2026</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">3</span> <span className="fh-click">Continue for free</span>
          </div>
        </Concept>
        <StepCheck id="c3-s1">May GitHub account na ako at verified ang email ko.</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">2</span>
          <h3>Gumawa ng repository (lalagyan ng files)</h3>
        </div>
        <p>
          Ang <strong>repository</strong> ay parang folder sa internet. Ayon sa GitHub docs, pindutin ang{" "}
          <strong>+</strong> sa itaas-kanan, tapos <strong>New repository</strong>.
        </p>
        <ol>
          <li>
            Repository name: <span className="fh-field">my-first-website</span>
          </li>
          <li>
            Piliin ang <strong>Public</strong> — kailangan ito, dahil sa Free plan ay public lang ang puwedeng
            i-publish sa Pages.
          </li>
          <li>
            Pindutin ang <strong>Create repository</strong>.
          </li>
        </ol>
        <Concept caption="Tatlong bagay lang: pangalan → Public → Create repository. Huwag munang galawin ang iba.">
          <div className="fh-mock-row">
            <span className="fh-badge-num">1</span> Repository name <span className="fh-field">my-first-website</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">2</span> ◉ Public <span style={{ color: "var(--fh-muted)" }}>○ Private</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">3</span> <span className="fh-click">Create repository</span>
          </div>
        </Concept>
        <StepCheck id="c3-s2">Nakagawa na ako ng public repository na my-first-website.</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">3</span>
          <h3>I-upload ang dalawang files</h3>
        </div>
        <ol>
          <li>
            Sa bagong repository, pindutin ang <strong>Add file</strong> → <strong>Upload files</strong>.
          </li>
          <li>
            I-drag (o piliin) ang <code>index.html</code> at <code>styles.css</code> mula sa na-download mo.
          </li>
          <li>
            Pindutin ang <strong>Commit changes</strong> — ito ang “save” ng GitHub.
          </li>
        </ol>
        <div className="fh-warn">
          <strong>⚠️ Pinakamadalas na mali</strong>
          Huwag i-upload ang buong ZIP file, at huwag ilagay ang files sa loob ng subfolder. Dapat nasa pinakataas
          (root) ng repository ang <code>index.html</code> — hinahanap ito ng GitHub Pages bilang homepage.
        </div>
        <Concept caption="Add file → Upload files → piliin ang 2 files → Commit changes. Tapos, makikita mo ang files sa listahan.">
          <div className="fh-mock-row">
            <span className="fh-badge-num">1</span> <span className="fh-click">Add file ▾</span> → Upload files
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">2</span> 📄 index.html · 🎨 styles.css <span className="fh-arrow">→ drop dito</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">3</span> <span className="fh-click">Commit changes</span>
          </div>
        </Concept>
        <StepCheck id="c3-s3">Nasa repository ko na ang index.html at styles.css (hindi naka-ZIP, hindi naka-folder).</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">4</span>
          <h3>Buksan ang Settings → Pages</h3>
        </div>
        <ol>
          <li>
            Sa repository mo, pindutin ang tab na <strong>Settings</strong> (nasa itaas, pinaka-kanan).
          </li>
          <li>
            Sa kaliwang sidebar, sa ilalim ng “Code, planning, and automation”, pindutin ang{" "}
            <strong>Pages</strong>.
          </li>
        </ol>
        <Concept caption="Settings tab sa itaas → Pages sa kaliwang sidebar. Dito mo bubuksan ang hosting.">
          <div className="fh-mock-row">
            <span className="fh-badge-num">1</span> Tabs: Code · Issues · Pull requests · … ·{" "}
            <span className="fh-click">⚙ Settings</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">2</span> Sidebar: General · Access · … · <span className="fh-click">Pages</span>
          </div>
        </Concept>
        <StepCheck id="c3-s4">Nabuksan ko na ang Settings → Pages page.</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">5</span>
          <h3>I-set ang publishing source at i-Save</h3>
        </div>
        <p>Ito ang “buksan ang hosting” na pindutan. Ayon sa official docs:</p>
        <ol>
          <li>
            Sa ilalim ng <strong>Build and deployment</strong> → <strong>Source</strong>, piliin ang{" "}
            <strong>Deploy from a branch</strong>.
          </li>
          <li>
            Sa Branch dropdown: piliin ang <strong>main</strong>, at ang folder na <strong>/(root)</strong>.
          </li>
          <li>
            Pindutin ang <strong>Save</strong>.
          </li>
        </ol>
        <Concept caption="Source: Deploy from a branch → Branch: main + /(root) → Save. Hintayin ang 'Your site is live' banner.">
          <div className="fh-mock-row">
            <span className="fh-badge-num">1</span> Source: <span className="fh-field">Deploy from a branch ▾</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">2</span> Branch: <span className="fh-field">main ▾</span> +{" "}
            <span className="fh-field">/(root) ▾</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">3</span> <span className="fh-click">Save</span>
          </div>
        </Concept>
        <div className="fh-note">
          <strong>💡 Tandaan</strong>
          Nagbabago paminsan-minsan ang design ng GitHub. Kung hindi eksaktong ganito ang nakikita mo, hanapin
          ang pinaka-malapit na label — ang mahalaga ay <strong>branch = main</strong> at{" "}
          <strong>folder = /(root)</strong>.
        </div>
        <StepCheck id="c3-s5">Na-save ko na ang Deploy from a branch + main + /(root).</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">6</span>
          <h3>Hintayin ng 1–2 minuto, tapos buksan ang URL</h3>
        </div>
        <ol>
          <li>Maghintay ng 1–2 minuto (nagbi-build pa ang GitHub).</li>
          <li>I-refresh ang Pages settings — dapat may banner na “Your site is live at…”.</li>
          <li>
            Buksan ang address: <span className="fh-field">https://USERNAME.github.io/my-first-website/</span>{" "}
            (palitan ang USERNAME ng username mo).
          </li>
        </ol>
        <figure className="fh-diagram">
          <UrlShapesDiagram />
          <figcaption>
            Dalawang URL shapes: project site (may /repo-name) at user site (username lang). Sa iyo: project site.
          </figcaption>
          <DiagramZoom label="URL shapes diagram">
            <UrlShapesDiagram />
          </DiagramZoom>
        </figure>
        <StepCheck id="c3-s6">Bukas na ang website ko sa username.github.io/my-first-website/!</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">7</span>
          <h3>Palitan ang content (gawin mong sa iyo)</h3>
        </div>
        <p>Ngayong live ka na, ganito mag-update — uulitin mo ito habambuhay:</p>
        <ol>
          <li>Buksan ang repository → pindutin ang file na gusto mong baguhin (hal. index.html).</li>
          <li>
            Pindutin ang <strong>pencil ✏️ (Edit)</strong> icon.
          </li>
          <li>Palitan ang text (hal. ang pangalan ni “Maya” → pangalan mo).</li>
          <li>
            Pindutin ang <strong>Commit changes</strong> → hintay ng 1 minuto → i-refresh ang website mo.
          </li>
        </ol>
        <Concept caption="File → pencil icon → edit → Commit changes → refresh ang site. Ganoon lang mag-update.">
          <div className="fh-mock-row">
            <span className="fh-badge-num">1</span> 📄 index.html <span className="fh-click">✏️ Edit</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">2</span> Palitan ang text <span className="fh-field">Maya → Maria</span>
          </div>
          <div className="fh-mock-row">
            <span className="fh-badge-num">3</span> <span className="fh-click">Commit changes</span>{" "}
            <span className="fh-arrow">→ refresh site after 1 min</span>
          </div>
        </Concept>
        <StepCheck id="c3-s7">Nakapag-edit na ako ng file at nakita ang pagbabago sa live site.</StepCheck>
      </article>

      <article className="fh-step">
        <div className="fh-step-head">
          <span className="fh-step-num">8</span>
          <h3>Bonus: magdagdag ng bagong page</h3>
        </div>
        <p>Patunayan mong naintindihan mo — gumawa ng About page:</p>
        <ol>
          <li>
            Sa repository: <strong>Add file</strong> → <strong>Create new file</strong>.
          </li>
          <li>
            Pangalanan itong <span className="fh-field">about.html</span>, at i-paste ang code sa baba.
          </li>
          <li>
            <strong>Commit changes</strong> → buksan ang <code>username.github.io/my-first-website/about.html</code>
          </li>
        </ol>
        <CodeBlock
          title="about.html — kopyahin at i-paste"
          code={`<!DOCTYPE html>\n<html lang="tl">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Tungkol sa Akin</title>\n  <link rel="stylesheet" href="styles.css" />\n</head>\n<body>\n  <main class="card">\n    <h1>Tungkol sa akin</h1>\n    <p>Ito ang pangalawang page ng una kong website!</p>\n    <p><a href="index.html">← Bumalik sa homepage</a></p>\n  </main>\n</body>\n</html>`}
        />
        <StepCheck id="c3-s8">May about.html page na ang website ko at nagbubukas ito.</StepCheck>
      </article>

      <div className="fh-good-box">
        <strong>🎉 Congratulations!</strong>
        Kung umabot ka rito, may live website ka na sa internet — libre, may HTTPS, at na-update mo pa. I-screenshot
        at i-comment ang link mo sa video!
      </div>

      <div className="fh-card">
        <h3>🔀 Plan B: Cloudflare drag &amp; drop (para sa business sites)</h3>
        <p>
          Kung pang-negosyo o pang-client ang site mo, dito ka — walang commercial ban ang Cloudflare at unlimited
          ang bandwidth. Ayon sa official “Direct Upload” docs (Apr 2026):
        </p>
        <ol>
          <li>
            Gumawa ng account sa <a href="https://dash.cloudflare.com/sign-up">dash.cloudflare.com</a>
          </li>
          <li>
            Pumunta sa <strong>Workers &amp; Pages</strong>.
          </li>
          <li>
            <strong>Create application</strong> → <strong>Get started</strong> →{" "}
            <strong>Drag and drop your files</strong>.
          </li>
          <li>Ilagay ang project name at i-drag ang folder (o ZIP) ng website mo — hanggang 1,000 files.</li>
          <li>
            Pindutin ang <strong>Deploy site</strong> → live ka na sa <code>project-name.pages.dev</code>!
          </li>
        </ol>
        <div className="fh-note">
          <strong>💡 Tandaan</strong>
          Ang Direct Upload project ay hindi na puwedeng ilipat sa Git integration pagdating ng panahon — gagawa ka ng bagong
          project kapag gusto mo ng automatic deploys. Para sa updates, pindutin lang ang{" "}
          <strong>Create a new deployment</strong> at i-upload ulit.
        </div>
      </div>

      <nav className="fh-chapter-nav" aria-label="Chapter navigation">
        <span>
          <a href="#chapter-2">← Chapter 2</a>
        </span>
        <span>
          <a href="#chapter-4">Chapter 4: Para sa developers →</a>
        </span>
      </nav>
    </section>
  );
}
