import { promises } from 'fs'
import { Resvg, ResvgRenderOptions } from '@resvg/resvg-js'

export async function writeToPng(outputDir: string, filename: string, svgCode: string, options?: ResvgRenderOptions) {
	const resvg = new Resvg(svgCode, options)
	const renderedImage = resvg.render()

	await promises.mkdir(`./dist/${outputDir}`, { recursive: true }) // ensure directory exists
	await promises.writeFile(`./dist/${outputDir}/${filename}`, renderedImage.asPng())
}