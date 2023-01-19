
export interface TimeAndPlace {
	date: Date
	location: string
}

export interface NotebookInfo {
	index: number
	started: TimeAndPlace
	completed: TimeAndPlace
	folderName: string
	gloss: string | undefined
}

export function getInfo(filename: string, index: number): NotebookInfo {

	const pathParts = filename.split('/')
	const folderName = pathParts.filter(part => part.includes('-->'))[0]

	if (folderName == null) {
		throw new Error('No notebook folder present, or folder name not in correct format.')
	}

	const startedAndCompleted = folderName.split('-->')

	return {
		index: index,
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

export function getAllNotebooks(): NotebookInfo[] {
	const importedCoverImages = import.meta.glob('/notebooks/*/00.png')
	const paths = Object.keys(importedCoverImages)
	const notebooks = paths.sort().map((path, index) => getInfo(path, index+1))
	return notebooks
}

export function getAllPages(notebook: NotebookInfo): string[] {
	const allPages = import.meta.glob('/notebooks/*/*.png')
	const paths = Object.keys(allPages)

	const pages = paths.filter(path => path.includes(notebook.folderName)).sort()
	return pages
}