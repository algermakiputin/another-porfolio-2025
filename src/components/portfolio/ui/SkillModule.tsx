import TechIcon from "./TechIcon";

/** A single tech-stack tile (icon + real text label) for the Experience grid. */
type Props = { name: string; icon: string };

export default function SkillModule({ name, icon }: Props) {
  return (
    <div className="pf-tech-tile">
      <span className="pf-tech-tile__icon">
        <TechIcon name={icon} size={40} />
      </span>
      <span className="pf-tech-tile__name">{name}</span>
    </div>
  );
}
