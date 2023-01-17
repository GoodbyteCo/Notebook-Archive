
export function goToPage(page: number | string | undefined, min?: number, max?: number): void {
	
	if (page == undefined || Number.isNaN(parseInt(String(page)))) {
		setPage(min ?? 0)
		return
	}

	const pageNumber = parseInt(String(page))

	if (max != undefined && pageNumber > max) {
		setPage(max)
	}
	else if (min != undefined && pageNumber < min) {
		setPage(min)
	}
	else {
		setPage(pageNumber)
	}
}

function setPage(page: number): void {

	const pageCounter = document.getElementById('page-count-input') as HTMLInputElement
	const allPages: NodeListOf<HTMLElement> = document.querySelectorAll('.notebook-page')
	const currentPage = document.getElementById(`notebook-page-${page}`) as HTMLElement

	pageCounter.blur()
	pageCounter.value = String(page)

	allPages.forEach(page => page.style.display = 'none')
	currentPage.style.display = 'block'

	const urlParams = new URLSearchParams(window.location.search)
	urlParams.set('page', String(page))
	window.history.replaceState(null, '', `?${urlParams.toString()}`)
}