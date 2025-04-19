// This script can be run with Node.js to optimize images
// Usage: node scripts/optimize-images.js

const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const publicDir = path.join(process.cwd(), "public")
const outputDir = path.join(process.cwd(), "public/optimized")

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Get all image files from public directory
const imageFiles = fs.readdirSync(publicDir).filter((file) => {
  const ext = path.extname(file).toLowerCase()
  return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)
})

// Process each image
async function processImages() {
  console.log(`Found ${imageFiles.length} images to optimize`)

  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file)
    const outputPath = path.join(outputDir, file)
    const webpOutputPath = path.join(outputDir, `${path.parse(file).name}.webp`)

    try {
      // Get image info
      const metadata = await sharp(inputPath).metadata()
      console.log(`Processing ${file} (${metadata.width}x${metadata.height})`)

      // Resize if larger than 1200px
      let sharpInstance = sharp(inputPath)
      if (metadata.width > 1200) {
        sharpInstance = sharpInstance.resize(1200)
      }

      // Save optimized original format
      await sharpInstance.toFile(outputPath)

      // Save WebP version
      await sharpInstance.webp({ quality: 80 }).toFile(webpOutputPath)

      console.log(`✓ Optimized ${file}`)
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
    }
  }
}

processImages().then(() => {
  console.log("Image optimization complete!")
})
