export const host = "http://localhost:3000";

export const routes = {
  POST_CONTENT: "/api/posts/content/",
  POST_METADATA: "/api/posts/metadata/",
  FAVORITES: "/api/favorites/",
  AUTH_TOKEN: "/api/auth/token",
};

export enum LoadStatus {
  Loading = "LOADING",
  Loaded = "LOADED",
  NotFound = "NOT FOUND",
}
