// tailwind.config.js
module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === "production",
        content: [
            "components/**/*.vue",
            "layouts/**/*.vue",
            "pages/**/*.vue",
            "plugins/**/*.js",
            "nuxt.config.js",
        ],
    },
};
