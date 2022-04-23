export async function get() {
	return {
		body: {
			writing: [{ test: true }],
		}
	}
}