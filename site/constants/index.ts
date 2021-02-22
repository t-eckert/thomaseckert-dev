export const getHost = (): string =>
    process.env.NODE_ENV === "production"
        ? "https://thomaseckertdev.azurewebsites.net"
        : "http://localhost:3000";

export const routes = {
    POSTS: "/api/posts/",
    BOOKMARKS: "/api/bookmarks/",
};
