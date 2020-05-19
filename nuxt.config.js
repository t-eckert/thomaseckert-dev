require("dotenv").config();
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";

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
    "~/styles/inputs.css",
    "~/styles/layout.css",
    "~/styles/main.css",
    "~/styles/pills.css",
    "~/styles/prism.css",
    "~/styles/typography.css",
  ],

  chainWebpack: (config) => {
    config.plugin("monaco-editor").use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ["markdown"],
      },
    ]);
  },

  serverMiddleware: ["~/api"],

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/dotenv",
  ],

  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/sitemap",
  ],

  auth: {
    redirect: { login: "/login", callback: "/auth" },
    strategies: {
      local: {
        login: {
          url: "/api/auth/login",
          method: "post",
          propertyName: "token",
        },
      },
    },
  },

  sitemap: {
    hostname: "https://thomaseckert.dev",
    gzip: true,
    generate: false,
    exclude: ["/admin", "/admin/**", "/login"],
    routes: [
      "/logging-execution-time-in-python",
      "/basketball-for-nerds",
      "/encryption-and-decryption-with-python-azure-functions",
    ],
  },

  build: {
    extend(config, ctx) {},
  },

  server: {
    host: "0.0.0.0",
  },
};
