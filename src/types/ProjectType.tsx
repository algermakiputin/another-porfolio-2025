export type Project = {
    category: string;
    image: string;
    platform: string;
    slug: string;
    title: string;
    metaDescription: string;
    shortDescription: string;
    meta: {
        industry: string;
        size: string;
        website: string;
        platform?: string;
        category?: string;
        targetAudience?: string;
        language?: string;
    },
    requirements: string[],
    overview: string;
    challenge: string;
    approach: string;
    results: Result[],
    conclusion: string;
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