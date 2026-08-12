export interface Project {
    title: string;
    desc: string;
    tech: string;
    link: string | null;
    demo: string | null;
    images: string[];
}

export const projects: Project[] = [
    {
        title: "Preserve Digital Archive",
        desc: "A digital archive for Sawmill Slough Preserve — featuring custom GIS maps and applications cataloging over 1,200 species, 10,000 photos, and oral histories.",
        tech: "WordPress · PHP · ArcGIS",
        link: null,
        demo: null,
        images: [
            "/images/projects/preserve/preserve-screenshot-1.png",
            "/images/projects/preserve/preserve-screenshot-2.png",
            "/images/projects/preserve/preserve-screenshot-3.png",
        ],
    },

    {
        title: "Duval Audubon Society",
        desc: "A full WordPress site for a nonprofit bird conservation chapter serving Northeast Florida — built to support 1,200+ members with event management, volunteer coordination, conservation resources, and donation integration.",
        tech: "WordPress · PHP · The Events Calendar",
        link: "https://duvalaudubon.org",
        demo: null,
        images: [
            "/images/projects/audubon/audubon-screenshot-1.png",
        ],
    },

    {
        title: "Calorie Calendar",
        desc: "A browser-based calorie tracking app with a calendar view — log meals by day and track progress toward a daily goal.",
        tech: "JavaScript · HTML · CSS · Firebase",
        link: null,
        demo: "https://calorie-demo.netlify.app/",
        images: [
            "/images/projects/calorie/calorie-screenshot-1.png",
        ],
    },

    {
        title: "Donation CRM",
        desc: "A full-stack Django CRM for nonprofit donor management featuring donation tracking, contact management, interactive maps, dashboards, and reporting.",
        tech: "Django · Python · PostgreSQL",
        link: null,
        demo: null,
        images: [
            "/images/projects/crm/crm-screenshot-1.png",
            "/images/projects/crm/crm-screenshot-2.png",
            "/images/projects/crm/crm-screenshot-3.png",
        ],
    },
];

