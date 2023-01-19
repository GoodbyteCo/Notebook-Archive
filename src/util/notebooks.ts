
export interface TimeAndPlace {
	date: Date
	location: string
}

export interface NotebookInfo {
	started: TimeAndPlace
	completed: TimeAndPlace
	folderName: string
	gloss: string | undefined
}

export function getInfo(filename: string): NotebookInfo {

	const pathParts = filename.split('/')
	const folderName = pathParts.filter(part => part.includes('-->'))[0]

	if (folderName == null) {
		throw new Error('No notebook folder present, or folder name not in correct format: ' + filename)
	}

	const startedAndCompleted = folderName.split('-->')

	return {
		started: getTimeAndPlace(startedAndCompleted[0]),
		completed: getTimeAndPlace(startedAndCompleted[1]),
		folderName: folderName,
		gloss: startedAndCompleted[2], // todo: refactor to make less ugly; gloss value is not part of start/completed
	}
}

function getTimeAndPlace(data: string | undefined): TimeAndPlace {
	if (data == undefined) {
		return {
			date: getTime(undefined),
			location: getPlace(undefined),
		}
	}

	const [ timeString, ...locationString ] = data.trim().split(' ')

	return {
		date: getTime(timeString),
		location: getPlace(locationString.join(' ')),
	}
}

function getTime(dateString: string | undefined): Date {
	if (dateString == undefined) {
		return new Date('1970-01-01')
	}

	return new Date(dateString)
}

function getPlace(locationString: string | undefined): string {
	if (locationString == undefined) {
		return 'Unknown'
	}

	return locationString.trim()
}

/**
 * Due to what appears to be a bug in the Astro framework, the wildcard glob imports
 * (that work during `dev` builds) import more than just notebooks during static build.
 * This function simply filters out anything that doesn't have the distinctive "-->" of
 * the notebook folder.
 */
export function onlyNotebookFolders(notebook: Record<string, any>): boolean {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
	return notebook.default.includes('-->')
}