import pMap from "p-map"
import type Writing from "src/types/Writing"

export async function get() {
	const modules = import.meta.glob("./*.svx")

	const writings = await pMap(
		Object.entries(modules),
		async function ([_, module]) {
			const { metadata } = await module()

			const writing: Writing = {
				title: metadata.title,
			}
			return {
				writing
			}
		}
	)

	return {
		body: { writings }
	}
}