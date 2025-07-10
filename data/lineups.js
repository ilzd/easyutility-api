const lineups = [
    {
        title: "Mirage Window Smoke from T-Spawn",
        grenadeType: "Smoke",
        origin: {
            position: { x: 120, y: 450 },
            calloutId: "mirage_t_spawn"
        },
        destination: {
            position: { x: 550, y: 600 },
            calloutId: "mirage_window"
        },
        throwDetails: {
            stance: "standing",
            type: "jump-throw",
            strength: "weak"
        },
        media: [
            { type: "image", url: "/images/lineups/mirage_window_1.jpg", caption: "Stand in this corner" },
            { type: "video", url: "https://www.youtube.com/watch?v=example" }
        ]
    },
    {
        title: "Inferno B-Site Molotov from Banana",
        grenadeType: "Molotov",
        origin: {
            position: { x: 300, y: 800 },
            calloutId: "inferno_banana"
        },
        destination: {
            position: { x: 700, y: 200 },
            calloutId: "inferno_b_site"
        },
        throwDetails: {
            stance: "crouching",
            type: "normal",
            strength: "strong"
        },
        media: [
            { type: "image", url: "/images/lineups/inferno_b_site_1.jpg", caption: "Aim at the roof" }
        ]
    }
];

module.exports = lineups;