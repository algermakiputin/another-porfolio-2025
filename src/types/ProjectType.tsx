export type ProjectEvidence = {
    value: string;
    label: string;
    kind: "outcome" | "scale" | "delivery";
    source?: string;
}

export type ArchiveCategory = "web" | "mobile" | "cross";

/** Flattened, presentation-ready shape the archive renders from. */
export type ProjectSummary = {
    slug: string;
    title: string;
    shortTitle: string;
    summary: string;
    category: ArchiveCategory;
    categoryLabel: string;
    platforms: string[];
    role?: string;
    status?: string;
    year?: string;
    stack: string[];
    image: string;
    imageAlt: string;
    imagePosition?: string;
    featuredOnArchive?: boolean;
    evidence?: ProjectEvidence;
}

export type Project = {
    category: string;
    image: string;
    platform: string;
    slug: string;
    title: string;
    shortTitle?: string;
    metaDescription: string;
    shortDescription: string;
    role?: string;
    responsibilities?: string[];
    techStack?: string[];
    platforms?: string[];
    status?: string;
    year?: string;
    imageAlt?: string;
    imagePosition?: string;
    accentColor?: string;
    featuredOnArchive?: boolean;
    evidence?: ProjectEvidence;
    archCaption?: string;
    meta: {
        industry?: string;
        size?: string;
        website?: string;
        platform?: string;
        category?: string;
        targetAudience?: string;
        language?: string;
        link?: string;
        linkLabel?: string;
        client?: string;
        builtFor?: string;
        scope?: string;
        timeline?: string;
    },
    requirements?: string[];
    overview?: string;
    challenge?: string;
    approach?: string;
    results?: Result[];
    conclusion?: string;
}

type Result = {
    title: string;
    metric: string;
    description: string;
}

export enum ProjectType {
    WEB_APP = "web-app",
    MOBILE_APP = "mobile-app"
}
