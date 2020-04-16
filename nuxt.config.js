require("dotenv").config();
const MonacoEditorPlugin = require("monaco-editor-webpack-plugin");

export default {
  mode: "universal",

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
    "@/styles/--var.css",
    "@/styles/base.css",
    "@/styles/button.css",
    "@/styles/layout.css",
    "@/styles/pill.css",
    "@/styles/typography.css",
    "@/styles/prism.css",
  ],

  plugins: [
    // new MonacoEditorPlugin({
    //   languages: ["markdown", "css", "html", "typescript"],
    // }),
  ],

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/dotenv",
    "@nuxtjs/tailwindcss",
  ],

  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  axios: {},

  auth: {
    strategies: {
      github: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
    },
  },

  serverMiddleware: ["@/api/index"],

  build: {
    extend(config, ctx) {},
  },
};
