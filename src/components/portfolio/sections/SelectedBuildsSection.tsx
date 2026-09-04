import Link from "next/link";
import { selectedBuilds } from "../../../data/portfolio";
import BlueprintBackground from "../decorative/BlueprintBackground";
import SectionMarker from "../decorative/SectionMarker";
import FeaturedProject from "../ui/FeaturedProject";
import ProjectCard from "../ui/ProjectCard";

export default function SelectedBuildsSection() {
  // Curated from data (not array position): only homepage builds, in order.
  const homepage = selectedBuilds
    .filter((b) => b.featuredOnHomepage)
    .sort((a, b) => (a.homepageOrder ?? 99) - (b.homepageOrder ?? 99));
  const featured = homepage.find((b) => b.featured);
  const supporting = homepage.filter((b) => !b.featured);

  return (
    <section id="builds" className="pf-section pf-builds">
      <BlueprintBackground tone="dark" />
      <div className="pf-container pf-builds__inner">
        <div className="pf-builds__head">
          <SectionMarker title="Selected Product Work" />
          <p className="pf-builds__note">
            Real products · Real users · Production systems
          </p>
        </div>

        {featured && <FeaturedProject build={featured} />}

        <div className="pf-builds__grid">
          {supporting.map((b) => (
            <ProjectCard key={b.slug} build={b} />
          ))}
        </div>

        <div className="pf-builds__more">
          <Link href="/portfolio" className="pf-build__link pf-build__link--more">
            View shipped products <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
