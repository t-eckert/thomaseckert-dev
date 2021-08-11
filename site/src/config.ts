const env = process.env.NODE_ENV

// Where the site gets its posts and yummy data.
let API: string

if (env === "production") {
    API = ""
} else if (env === "test") {
    API = ""
} else {
    API = "http://localhost:7071"
}

export { API }
