import Link from "next/link";
import WorldHeader from "../../components/alger-world/WorldHeader";
import HeroStage from "../../components/alger-world/HeroStage";
import WorldMap from "../../components/alger-world/WorldMap";
import ProjectArchiveToggle from "../../components/alger-world/ProjectArchiveToggle";
import WorldFooter from "../../components/alger-world/WorldFooter";
import { challenges, skills } from "../../data/algerWorld";
import { getRawProjects } from "../../lib/projects.server";
import type { BlogMeta } from "../../types/BlogType";

type HomePageProps = { recentPosts: BlogMeta[] };

const featuredSlugs = ["hunter-vault", "zendtri-pos", "filipino-alamat", "hero-journals"];

const HomePage = ({ recentPosts }: HomePageProps) => {
  const projects = getRawProjects();
  const archivedProjects = projects.filter((project) => !featuredSlugs.includes(project.slug));

  return (
    <div className="alger-world" id="top">
      <a className="skip-link" href="#projects">Skip to projects</a>
      <WorldHeader />

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-skyline hero-skyline--kenney" aria-hidden="true" />
          <div className="wrapper world-hero-inner">
            <div className="hero-copy">
              <div className="status-pill">
                <span className="status-star">✦</span> PORTFOLIO 2026{" "}
                <span className="status-divider">/</span> PRODUCT ENGINEER{" "}
                <span className="status-star">✦</span>
              </div>
              <p className="hero-overline">PRODUCT ENGINEER · WEB &amp; MOBILE</p>
              <h1 id="hero-title">
                <span className="word-outline">HELLO,</span><br />
                I&apos;M <span className="name-underline">ALGER<span className="period">.</span></span>
              </h1>
              <p className="hero-titleline">
                <span className="tiny-star">✦</span> PRODUCT ENGINEER{" "}
                <span aria-hidden="true">/</span> TECH LEAD{" "}
                <span aria-hidden="true">/</span> BUILDER
              </p>
              <p className="hero-description">
                I turn complex ideas into software people love using. From enterprise platforms to
                independently shipped apps, I build for <em>web, iOS &amp; Android.</em>
              </p>
              <div className="hero-buttons">
                <a className="game-btn game-btn--red" href="#world-map">
                  <span aria-hidden="true">▶</span> GET THE OVERVIEW
                </a>
                <a className="game-btn game-btn--paper" href="#projects">
                  VIEW PROJECTS <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="hero-evidence">
                <span>✧ 8+ YEARS SHIPPING SOFTWARE</span>
                <span>✧ {projects.length} DOCUMENTED BUILDS</span>
              </div>
            </div>
            <HeroStage />
          </div>
          <div className="hero-grass" aria-hidden="true" />
          <div className="ground-blocks" aria-hidden="true" />
          <div className="level-strip">
            <div className="wrapper level-strip-inner">
              <span><b>★</b> 8+ YEARS EXPERIENCE</span>
              <span><b>★</b> WEB · MOBILE · SAAS</span>
              <span><b>★</b> REAL PRODUCTS, REAL USERS</span>
              <a href="#world-map">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="achievement-bar" aria-label="Engineering highlights">
          <div className="wrapper achievement-grid">
            <div className="achievement"><span className="ach-icon">✦</span><div><strong>08<span>+</span></strong><small>YEARS OF EXPERIENCE</small></div></div>
            <div className="achievement"><span className="ach-icon">▣</span><div><strong>{projects.length}</strong><small>DOCUMENTED BUILDS</small></div></div>
            <div className="achievement"><span className="ach-icon">★</span><div><strong>50K<span>+</span></strong><small>ALAMAT DOWNLOADS</small></div></div>
            <div className="achievement"><span className="ach-icon">⚑</span><div><strong>LEAD</strong><small>ENGINEERING &amp; ARCHITECTURE</small></div></div>
          </div>
        </section>

        <section className="map-section section-padding" id="world-map" aria-labelledby="world-title">
          <div className="wrapper">
            <div className="section-heading section-heading--horizontal">
              <div>
                <p className="eyebrow"><span>01</span> · OVERVIEW</p>
                <h2 id="world-title">GET THE <span className="title-highlight">OVERVIEW<span className="title-dot">.</span></span></h2>
                <p className="section-intro">
                  Eight sections covering my work, experience, and writing. Select
                  any section to preview it — or just scroll through the full page.
                </p>
              </div>
              <div className="map-level-badge" aria-hidden="true">
                BROWSE <span>FREELY</span> <strong>↗ 08 / 08</strong>
              </div>
            </div>
            <WorldMap />
          </div>
        </section>

        <section className="projects-section section-padding" id="projects" aria-labelledby="projects-title">
          <div className="wrapper">
            <div className="section-heading section-heading--horizontal">
              <div>
                <p className="eyebrow eyebrow--warm"><span>02</span> · SELECTED WORK</p>
                <h2 id="projects-title">WORK THAT <span className="title-highlight title-highlight--light">SHIPPED<span className="title-dot">.</span></span></h2>
                <p className="section-intro">
                  Not tutorial projects. Products, platforms and systems that solve real problems for real people.
                </p>
              </div>
              <Link className="text-link text-link--light" href="/portfolio">
                FULL ARCHIVE <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="feature-project">
              <div className="feature-art" aria-label="Stylized finance RPG dashboard concept art">
                <div className="art-grid" />
                <div className="hv-mini-coin">✦</div>
                <span className="feature-chip">★ FLAGSHIP PROJECT</span>
                <div className="vault-phone vault-phone--back">
                  <div className="vault-notch" />
                  <div className="vault-screen">
                    <small>MY VAULT</small><strong>₱ 42,850</strong><span>AVAILABLE BALANCE</span>
                    <div className="vault-meter"><i /></div>
                    <div className="vault-pills"><b>XP +150</b><b>LEVEL 08</b></div>
                  </div>
                </div>
                <div className="vault-phone vault-phone--front">
                  <div className="vault-notch" />
                  <div className="vault-screen">
                    <small>HUNTER STATUS <span>⚡</span></small><strong>RANK <em>A</em></strong><span>LEVEL UP YOUR MONEY</span>
                    <div className="vault-ring">A</div>
                    <div className="vault-pills"><b>DAILY QUEST</b><b>✓ DONE</b></div>
                  </div>
                </div>
                <div className="feature-art-caption">CONCEPT ART · FINANCE RPG</div>
              </div>
              <div className="feature-content">
                <span className="feature-num">PROJECT 01 / FINANCE · MOBILE</span>
                <div className="feature-head"><span className="feature-emblem">✦</span><h3>Hunter Vault</h3></div>
                <p className="feature-subtitle">Making money management feel like progress.</p>
                <p>
                  A gamified finance app that turns budgets, debt and savings into ranks, quests, XP and achievements.
                  Offline-first, with optional cloud sync and AI-powered money tools.
                </p>
                <div className="project-metric-row">
                  <span><strong>2,500+</strong><small>USERS</small></span>
                  <span><strong>11</strong><small>LANGUAGES</small></span>
                  <span><strong>iOS + Android</strong><small>PLATFORMS</small></span>
                </div>
                <div className="tag-row"><span>React</span><span>TypeScript</span><span>Dexie</span><span>Capacitor</span></div>
                <Link className="game-btn game-btn--cream" href="/project/hunter-vault">
                  VIEW CASE STUDY <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <div className="world-project-grid">
              <article className="project-card">
                <div className="card-visual card-visual--zendtri" aria-hidden="true">
                  <div className="pos-screen"><div className="pos-sidebar"><b>Z</b><i /><i /><i /></div><div className="pos-content"><div className="pos-top"><b>Sales overview</b><span>● LIVE</span></div><div className="pos-numbers"><span>₱ 84,920<small>TODAY&apos;S REVENUE</small></span><span>248<small>ORDERS</small></span></div><div className="pos-bars"><i /><i /><i /><i /><i /><i /><i /></div></div></div>
                  <span className="card-sticker">SAAS</span>
                </div>
                <div className="project-body"><span className="project-type">02 / RETAIL OPERATIONS</span><h3>Zendtri POS</h3><p>Multi-tenant POS, inventory and operations platform built for Philippine SMEs.</p><div className="tag-row"><span>React</span><span>Supabase</span><span>TypeScript</span></div><Link className="card-link" href="/project/zendtri-pos">EXPLORE PROJECT <span aria-hidden="true">↗</span></Link></div>
              </article>

              <article className="project-card">
                <div className="card-visual card-visual--alamat" aria-hidden="true">
                  <div className="story-hill back" /><div className="story-hill front" /><span className="story-star">✦</span>
                  <div className="storybook"><span className="storybook-title">MGA<br />ALAMAT</span><span className="storybook-mountain">❖</span><span className="storybook-footer">STORIES OF THE PHILIPPINES</span></div>
                  <span className="card-sticker">50K+ DL</span>
                </div>
                <div className="project-body"><span className="project-type">03 / CULTURE · MOBILE</span><h3>Filipino Alamat</h3><p>Preserving Filipino folklore through a story library with reading and audio.</p><div className="tag-row"><span>React Native</span><span>Expo</span><span>Firebase</span></div><Link className="card-link" href="/project/filipino-alamat">VIEW CASE STUDY <span aria-hidden="true">↗</span></Link></div>
              </article>

              <article className="project-card">
                <div className="card-visual card-visual--journal" aria-hidden="true">
                  <div className="trading-window"><div className="trade-head"><b>TRADE ANALYTICS</b><span>● ● ●</span></div><div className="trade-num">+24.8% <small>PERFORMANCE</small></div><svg viewBox="0 0 330 115" preserveAspectRatio="none"><path d="M0 88L24 79 44 82 71 51 96 59 119 38 148 48 180 28 208 42 242 19 266 28 299 9 330 22" fill="none" stroke="#8ED6BC" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><path d="M0 88L24 79 44 82 71 51 96 59 119 38 148 48 180 28 208 42 242 19 266 28 299 9 330 22V115H0Z" fill="#7FD6B3" opacity=".15" /></svg><div className="trade-dots"><i /><i /><i /></div></div>
                  <span className="card-sticker">WEB</span>
                </div>
                <div className="project-body"><span className="project-type">04 / TRADING · ANALYTICS</span><h3>Hero Journals</h3><p>Helping traders improve decisions with structured journals and risk analytics.</p><div className="tag-row"><span>React</span><span>Laravel</span><span>MySQL</span></div><Link className="card-link" href="/project/hero-journals">VIEW CASE STUDY <span aria-hidden="true">↗</span></Link></div>
              </article>
            </div>

            <ProjectArchiveToggle projects={archivedProjects} />
          </div>
        </section>

        <section className="about-section section-padding" id="about" aria-labelledby="about-title">
          <div className="wrapper about-layout">
            <div>
              <p className="eyebrow"><span>03</span> · PROFILE</p>
              <h2 id="about-title">ABOUT <span className="title-highlight">ME<span className="title-dot">.</span></span></h2>
              <p className="big-intro">Hey! I&apos;m Alger, a full-stack engineer who loves turning messy problems into thoughtful products.</p>
              <p>For more than eight years, I&apos;ve designed, built and shipped software across mobile, web, retail, finance and enterprise operations. Today I lead frontend and mobile engineering while continuing to build independent products of my own.</p>
              <p>I care about architecture, user experience, dependable releases—and making the technical details feel effortless to the people using the product.</p>
              <a className="text-link" href="#experience">READ MY FULL EXPERIENCE <span aria-hidden="true">↗</span></a>
            </div>
            <div className="player-profile">
              <div className="profile-top"><span>PROFILE</span><span>№ 001 / EST. 2018</span></div>
              <div className="profile-content">
                <div className="profile-portrait"><div className="portrait-glow" /><img src="/alger-world/alger-sprite.svg" alt="" loading="lazy" /></div>
                <div className="profile-detail">
                  <span className="profile-class">CURRENT ROLE</span><h3>PRODUCT ENGINEER</h3><span>Alger Makiputin</span>
                  <div className="profile-stat"><span>EXPERIENCE</span><strong>8+ YEARS</strong></div>
                  <div className="profile-stat"><span>SPECIALTY</span><strong>WEB + MOBILE</strong></div>
                  <div className="profile-stat"><span>LOCATION</span><strong>CEBU, PH</strong></div>
                </div>
              </div>
              <div className="profile-bottom"><span>★ ARCHITECTURE</span><span>★ SHIPPING</span><span>★ LEADERSHIP</span></div>
            </div>
          </div>
        </section>

        <section className="skill-section section-padding" id="skills" aria-labelledby="skills-title">
          <div className="wrapper">
            <div className="section-heading">
              <p className="eyebrow"><span>04</span> · CAPABILITIES</p>
              <h2 id="skills-title">TECHNICAL <span className="title-highlight">SKILLS<span className="title-dot">.</span></span></h2>
              <p className="section-intro">Tools don&apos;t make the engineer—but these help me bring the ideas to life.</p>
            </div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="world-skill-card" key={skill.title}>
                  <span className="skill-symbol">{skill.symbol}</span>
                  <div><h3>{skill.title}</h3><p>{skill.body}</p></div>
                  <span className="skill-counter">{String(index + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="boss-section section-padding" id="challenges" aria-labelledby="boss-title">
          <div className="wrapper">
            <div className="section-heading section-heading--horizontal">
              <div><p className="eyebrow"><span>05</span> · SPECIALTIES</p><h2 id="boss-title">THE HARD <span className="title-highlight">PROBLEMS<span className="title-dot">.</span></span></h2><p className="section-intro">The interesting work happens where the requirements get complicated.</p></div>
              <span className="boss-difficulty">SCOPE: <b>END-TO-END</b></span>
            </div>
            <div className="boss-grid">
              {challenges.map((challenge) => (
                <article key={challenge.number}>
                  <span className="boss-no">FOCUS {challenge.number} <b>{challenge.icon}</b></span>
                  <h3>{challenge.title}</h3><p>{challenge.body}</p>
                  <div className="boss-bar"><span style={{ width: `${challenge.level}%` }} /></div>
                  <small>{challenge.stack}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="career-section section-padding" id="experience" aria-labelledby="career-title">
          <div className="wrapper career-layout">
            <div><p className="eyebrow"><span>06</span> · EXPERIENCE</p><h2 id="career-title">CAREER <span className="title-highlight">TIMELINE<span className="title-dot">.</span></span></h2><p className="section-intro">Years of building, learning, leading—and staying close to the code.</p></div>
            <div className="career-track">
              <article className="career-entry"><span className="career-pin">02</span><span className="career-date">2022 — PRESENT</span><h3>Software Engineering Team Lead</h3><p>Leading frontend and mobile architecture, mentoring engineers, and shipping web and mobile solutions for complex business workflows.</p><div className="tag-row"><span>Architecture</span><span>Mobile</span><span>Leadership</span></div></article>
              <article className="career-entry"><span className="career-pin">01</span><span className="career-date">2018 — 2022</span><h3>Full Stack Developer</h3><p>Building and maintaining practical business systems across POS, inventory and mobile products, from interfaces to APIs and production support.</p><div className="tag-row"><span>Full Stack</span><span>Retail Systems</span><span>Delivery</span></div></article>
            </div>
          </div>
        </section>

        <section className="notes-section section-padding" id="field-notes" aria-labelledby="notes-title">
          <div className="wrapper">
            <div className="section-heading section-heading--horizontal">
              <div><p className="eyebrow"><span>07</span> · BLOG</p><h2 id="notes-title">LATEST <span className="title-highlight">ARTICLES<span className="title-dot">.</span></span></h2><p className="section-intro">Practical writing on engineering, architecture, and shipping real software.</p></div>
              <Link className="text-link" href="/blog">READ ALL ARTICLES <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="notes-grid">
              {recentPosts.slice(0, 3).map((post, index) => (
                <Link href={`/blog/${post.slug}`} className="note-card" key={post.slug}>
                  <span className="note-icon">{index === 0 ? "✳" : index === 1 ? "⌘" : "✦"}</span>
                  <span className="note-number">ARTICLE {String(index + 1).padStart(3, "0")} · {post.category}</span>
                  <h3>{post.shortTitle ?? post.title}</h3><p>{post.description}</p>
                  <span className="note-footer">{post.readTime.toUpperCase()} <b>↗</b></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-stars" aria-hidden="true" />
          <div className="wrapper contact-content">
            <div className="contact-left">
              <p className="eyebrow eyebrow--contact"><span>08</span> · CONTACT</p>
              <h2 id="contact-title">YOUR NEXT<br />GREAT BUILD <span>STARTS HERE.</span></h2>
              <p>Need an engineer who can own the hard parts and ship the whole thing? Let&apos;s make something that matters.</p>
              <div className="contact-buttons">
                <Link className="game-btn game-btn--gold" href="/contact">START A CONVERSATION <span aria-hidden="true">↗</span></Link>
                <Link className="contact-secondary" href="/portfolio">EXPLORE MORE BUILDS →</Link>
              </div>
            </div>
            <div className="contact-castle" aria-hidden="true"><div className="castle-sun" /><div className="castle-flag" /><div className="castle-tower tower-left" /><div className="castle-tower tower-right" /><div className="castle-center" /><div className="castle-door" /><div className="castle-steps" /></div>
          </div>
          <div className="contact-floor" aria-hidden="true" />
        </section>
      </main>

      <WorldFooter />
    </div>
  );
};

export default HomePage;
