export function formatFullDate(date: Date): string {
	
	const getOrdinal = function(day: number) {
		if (day > 3 && day < 21) return 'th'
		switch (day % 10) {
			case 1:  return 'st'
			case 2:  return 'nd'
			case 3:  return 'rd'
			default: return 'th'
		}
	}

	const month = date.toLocaleDateString('en-US', { month: 'long' })
	const day = date.toLocaleDateString('en-US', { day: 'numeric' })
	const ordinal = getOrdinal(date.getDate())
	const year = date.toLocaleDateString('en-US', { year: 'numeric' })

	return `${month} ${day}${ordinal}, ${year}`
}

export function formatShortDate(date: Date): string {
	const month = date.toLocaleDateString('en-US', { month: 'short' })
	const year = date.toLocaleDateString('en-US', { year: 'numeric' })

	return `${month} ${year}`
}