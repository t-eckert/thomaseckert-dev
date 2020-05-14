require("dotenv").config();

export default {
  mode: "spa",

  head: {
    title: "Thomas Eckert",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  loading: { color: "#fff" },

  css: [
    "~/styles/--vars.css",
    "~/styles/components.css",
    "~/styles/layout.css",
    "~/styles/main.css",
    "~/styles/pills.css",
    "~/styles/prism.css",
    "~/styles/typography.css",
  ],

  plugins: [],

  serverMiddleware: ["~/api"],

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/dotenv",
  ],

  modules: ["@nuxtjs/dotenv", "@nuxtjs/axios", "@nuxtjs/auth"],

  auth: {
    redirect: { login: "/login", callback: "/auth" },
    strategies: {
      local: false,
      auth0: {
        domain: "thomaseckert.auth0.com",
        client_id: process.env.AUTH_0_CLIENT_ID,
      },
    },
  },

  build: {
    extend(config, ctx) {},
  },

  server: {
    host: "0.0.0.0",
  },
};
