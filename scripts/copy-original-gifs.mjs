import { copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const projectRoot = process.cwd()
const destination = resolve(projectRoot, 'public/portfolio-originals')
const originals = [
  {
    folder: 'Culzoni',
    prefix: 'culzoni',
    files: [
      ['124334', 'Grabación-2025-01-24-124334.gif'],
      ['124555', 'Grabación-2025-01-24-124555.gif'],
      ['124821', 'Grabación-2025-01-24-124821.gif'],
      ['125339', 'Grabación-2025-01-24-125339.gif'],
      ['125448', 'Grabación-2025-01-24-125448.gif'],
    ],
  },
  {
    folder: 'Portfolio',
    prefix: 'portfolio',
    files: [
      ['091328', 'Grabación 2025-02-03 091328.gif'],
      ['092129', 'Grabación 2025-02-03 092129.gif'],
      ['092226', 'Grabación 2025-02-03 092226.gif'],
    ],
  },
]

mkdirSync(destination, { recursive: true })

for (const project of originals) {
  const source = resolve(projectRoot, 'src/assets/images/Projects', project.folder)
  const filenames = existsSync(source) ? readdirSync(source) : []

  for (const [id, originalName] of project.files) {
    const destinationFile = resolve(destination, `${project.prefix}-${id}.gif`)
    const localName = filenames.find((name) => name.endsWith(`${id}.gif`))

    if (localName) {
      copyFileSync(resolve(source, localName), destinationFile)
      continue
    }

    const assetPath = `src/assets/images/Projects/${project.folder}/${originalName}`
    const assetUrl = `https://raw.githubusercontent.com/OctavioB17/Portfolio/main/${assetPath.split('/').map(encodeURIComponent).join('/')}`
    const response = await fetch(assetUrl)

    if (!response.ok) {
      throw new Error(`Could not retrieve the original GIF ${assetPath}: ${response.status}`)
    }

    const bytes = Buffer.from(await response.arrayBuffer())
    if (!bytes.subarray(0, 4).toString().startsWith('GIF8')) {
      throw new Error(`The retrieved file is not a GIF: ${assetPath}`)
    }
    writeFileSync(destinationFile, bytes)
  }
}

console.log('Copied 8 original Culzoni and Portfolio GIFs.')
