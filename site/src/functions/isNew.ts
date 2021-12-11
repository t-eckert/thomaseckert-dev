const week = 604800000

const isNew = (date: string): boolean => {
	const now = new Date()
	const then = new Date(date)

	return now.getTime() - then.getTime() < week
}

export default isNew