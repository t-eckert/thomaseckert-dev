export async function get() {

	let writing = []
	try {
		const response = await fetch("http://localhost:3000/api/writing")
		writing = await response.json()
	} catch (error) {
		console.log(error)
	}

	return {
		body: {
			writing,
		}
	}
}