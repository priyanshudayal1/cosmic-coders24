import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dhcjrzdgh",
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

/**
 * Uploads an image to Cloudinary and returns the secure URL.
 * @param {string} file - The file path or base64 string to upload.
 * @param {string} folder - The folder in Cloudinary to upload to.
 * @returns {Promise<string>} - The secure URL of the uploaded image.
 */
export const uploadImage = async (file, folder = "cosmic-coders") => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: folder,
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

/**
 * Deletes an image from Cloudinary using its secure URL.
 * @param {string} imageUrl - The secure URL of the image to delete.
 * @returns {Promise<void>}
 */
export const deleteImage = async (imageUrl) => {
  if (!imageUrl) return;
  try {
    const parts = imageUrl.split("/");
    const filename = parts[parts.length - 1];
    const folder = parts[parts.length - 2];
    // Remove extension
    const publicId = `${folder}/${filename.split(".")[0]}`;

    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Cloudinary delete error:", error);
  }
};

export default cloudinary;
