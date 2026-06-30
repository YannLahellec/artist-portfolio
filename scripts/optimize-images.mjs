import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = "./public/assets";
const MAX_WIDTH = 2000;
const QUALITY = 82;
const EXTENSIONS = [".jpg", ".jpeg", ".JPG", ".JPEG"];

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
    } else if (EXTENSIONS.includes(extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const tempPath = filePath + ".tmp";
  try {
    const originalSize = (await stat(filePath)).size;
    const image = sharp(filePath);
    const { width } = await image.metadata();

    const pipeline =
      width > MAX_WIDTH
        ? image.resize(MAX_WIDTH, null, { withoutEnlargement: true })
        : image;

    await pipeline
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toFile(tempPath);

    const newSize = (await stat(tempPath)).size;
    await rename(tempPath, filePath);

    const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(
      `↓ ${basename(filePath).padEnd(40)} ${(originalSize / 1024).toFixed(0).padStart(6)} Ko → ${(newSize / 1024).toFixed(0).padStart(6)} Ko  (${saved}% gagné)`,
    );
    return { originalSize, newSize };
  } catch (err) {
    console.error(`✗ Erreur sur ${filePath}: ${err.message}`);
    return { originalSize: 0, newSize: 0 };
  }
}

async function run() {
  console.log(`\nOptimisation des images dans ${ASSETS_DIR}\n`);
  const files = await getImageFiles(ASSETS_DIR);
  console.log(`${files.length} images trouvées\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const { originalSize, newSize } = await optimizeImage(file);
    totalBefore += originalSize;
    totalAfter += newSize;
  }

  const totalSaved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`\n${"─".repeat(65)}`);
  console.log(
    `Total : ${(totalBefore / 1024 / 1024).toFixed(1)} Mo → ${(totalAfter / 1024 / 1024).toFixed(1)} Mo  (${totalSaved}% gagné)`,
  );
}

run();
