import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Solución para __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para generar un nombre único basado en el nombre del archivo original
const generateUniqueFileName = (fileName) => {
  const uniqueId = Date.now() + Math.floor(Math.random() * 1000); // ID único
  return `${fileName}_${uniqueId}.webp`;
};

// Función para comprimir una imagen
const compressImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(1024) // Ajusta el tamaño si es necesario
      .webp({ quality: 80 }) // Convierte a WebP con calidad del 80%
      .toFile(outputPath); // Guarda la imagen comprimida
    console.log(`Imagen comprimida correctamente: ${outputPath}`);
  } catch (error) {
    console.error('Error al comprimir la imagen:', error);
  }
};

// Función para leer las imágenes de la carpeta de entrada y comprimirlas
const compressAllImagesInFolder = async (inputFolder, outputFolder) => {
  try {
    const files = fs.readdirSync(inputFolder); // Leer todas las imágenes en la carpeta de entrada
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file)); // Filtrar solo imágenes con extensiones válidas

    if (imageFiles.length === 0) {
      console.log('No se encontraron imágenes en la carpeta de entrada.');
      return;
    }

    for (const file of imageFiles) {
      const inputFilePath = path.join(inputFolder, file);
      const fileNameWithoutExt = path.basename(file, path.extname(file)); // Nombre del archivo sin extensión
      const uniqueFileName = generateUniqueFileName(fileNameWithoutExt); // Generar un nombre único
      const outputFilePath = path.join(outputFolder, uniqueFileName); // Ruta completa de salida

      await compressImage(inputFilePath, outputFilePath); // Comprimir la imagen
    }

    console.log('Todas las imágenes han sido comprimidas.');
  } catch (error) {
    console.error('Error al procesar las imágenes:', error);
  }
};

// Función para pedir confirmación al usuario
const askForConfirmation = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('¿Deseas continuar con la compresión de imágenes? (sí/no): ', (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'sí' || answer.toLowerCase() === 'si');
    });
  });
};

// Función principal
const main = async () => {
  const inputFolder = path.join(__dirname, 'ImagenesSinComprimir'); // Carpeta de entrada
  const outputFolder = path.join(__dirname, 'ImagenesComprimidas'); // Carpeta de salida

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder); // Crear la carpeta de salida si no existe
  }

  const confirmed = await askForConfirmation();

  if (confirmed) {
    await compressAllImagesInFolder(inputFolder, outputFolder); // Comprimir todas las imágenes
  } else {
    console.log('Proceso cancelado por el usuario.');
  }
};

// Ejecutar el script
main();