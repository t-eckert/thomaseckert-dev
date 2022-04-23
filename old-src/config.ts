const env = process.env.NODE_ENV || "development"

type Config = {
	URL: string
}

const configure = (env: string): Config => {
	switch (env) {
		case "development":
			return {
				URL: "http://localhost:3000"
			}
		case "production":
			return {
				URL: "https://thomaseckert.dev"
			}
	}
}

export default configure(env)