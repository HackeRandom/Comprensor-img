# Image Compression Tool using Node.js and Sharp

This project provides a command-line tool to compress and convert images into the WebP format, primarily designed for web use. It efficiently compresses all images within a folder, retains high image quality, and generates unique filenames to avoid overwriting existing files.

## Features

- Automatically compresses all images in a specified folder.
- Converts images to WebP format, ideal for web use due to its superior compression rates.
- Generates unique filenames for compressed images by appending a unique ID to avoid overwriting.
- Asks for user confirmation before starting the compression process to prevent accidental execution."
- Preserves original images in a separate folder.

## When to Use

Use this tool when you have a collection of images that need to be optimized for the web. It's ideal for:

- Web developers optimizing images for faster page load times.
- E-commerce websites managing large volumes of product images.
- Any project requiring images in WebP format with a balance between compression and quality.

## Dependencies

This project relies on the following Node.js modules:

**[Sharp](https://sharp.pixelplumbing.com/)** for image processing and compression.

```js
npm install sharp
```

- fs (File System): Native Node.js module, no need for installation.
- path: Native Node.js module, no need for installation.
- readline: Native Node.js module, no need for installation.

# Installation

1. Clone the repository

```js
git clone https://github.com/HackeRandom/Comprensor-img.git
cd comprensor img
```

2. Install the dependencies
Run the following command to install the necessary packages:

```js
npm install
```

3. Folder Structure
Make sure you have two folders in your project directory:

- ImagenesSinComprimir (folder with images to be compressed)
- ImagenesComprimidas (folder where compressed images will be saved)

# How to Use

Add the images you want to compress to the ImagenesSinComprimir folder.

Run the script:

```js
node index.js
```

The script will prompt you to confirm if you want to proceed:

```js
Do you want to continue with the image compression? (yes/no):
```

- Type yes to proceed or no to cancel the process.

The tool will compress and convert all the images in the ImagenesSinComprimir folder saving the compressed images in the ImagenesComprimidas folder with unique filename (original name + unique ID).

# Example Usage

- If you have a folder of .jpg or .png images in ImagenesSinComprimir, running the script will resize and convert them into .webp files, which are then saved in ImagenesComprimidas.

```js
ImagenesSinComprimir/
    - image1.jpg
    - image2.png

ImagenesComprimidas/
    - image1_1695823771912.webp
    - image2_1695823772234.webp

```

The timestamp ensures that the filenames are unique.

# Notes

- You can adjust the compression quality by modifying the quality parameter in the sharp().webp({ quality: 80 }) line of code. The value can range from 0 (lowest quality) to 100 (highest quality).

- The default output resolution is resized to a width of 1024px. You can modify or remove this resizing as per your needs in the script.

# License

This project is licensed under the MIT **[License](https://opensource.org/license/mit)** - see the LICENSE file for details.

# Contributing

Feel free to submit issues or pull requests to improve the tool. Your contributions are welcome!