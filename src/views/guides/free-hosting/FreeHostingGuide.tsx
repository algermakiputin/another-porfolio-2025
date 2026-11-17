import "./guide.css";
import { GuideProgress } from "./islands";
import { Chapter1, Chapter2, GuideHero, GuideTakeaways, GuideToc } from "./content-a";
import { Chapter3 } from "./content-b";
import { Chapter4, Chapter5, Chapter6, Chapter7 } from "./content-c";

export default function FreeHostingGuide() {
  return (
    <div className="fh" lang="tl">
      <div className="fh-wrap">
        <nav className="fh-crumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true"> › </span>
          <span aria-current="page">Libreng Website Hosting Guide</span>
        </nav>
        <GuideProgress />
        <GuideHero />
        <GuideTakeaways />
        <div className="fh-layout">
          <div>
            <GuideToc />
          </div>
          <div>
            <Chapter1 />
            <Chapter2 />
            <Chapter3 />
            <Chapter4 />
            <Chapter5 />
            <Chapter6 />
            <Chapter7 />
          </div>
        </div>
      </div>
    </div>
  );
}
