export const getHost = (): string =>
  process.env.NODE_ENV === "production"
    ? "https://thomaseckertdev.azurewebsites.net"
    : "http://localhost:3000";

export const routes = {
  POSTS_METADATA: "/api/posts/metadata/",
  POSTS_CONTENT: "/api/posts/content/",
};
