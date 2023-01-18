
export function toAvif(filePath: string): string {
	return replaceExtension(filePath, '.avif')
}

export function toWebP(filePath: string): string {
	return replaceExtension(filePath, '.webp')
}

export function partiallyEncode(path: string): string {
	return path
		.replaceAll(' ', encodeURIComponent(' '))
		.replaceAll('>', encodeURIComponent('>'))
		.replaceAll(',', encodeURIComponent(','))
		.replaceAll('"', encodeURIComponent('"'))
		.replaceAll('\'', encodeURIComponent('\''))
}

function replaceExtension(path: string, ext: string): string {
	const extention = path.lastIndexOf('.')
	const everythingButTheExtention = path.substring(0, extention)
	return partiallyEncode(everythingButTheExtention + ext)
}