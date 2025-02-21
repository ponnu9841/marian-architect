export const navItems = [
  { name: "Home", link: "/", id: "home" },
  { name: "Portfolio", link: "#portfolio", id: "portfolio" },
  { name: "Services", link: "#services", id: "services" },
  { name: "About", link: "#about", id: "about" },
  { name: "Contact", link: "#contact", id: "contact" },
];

export async function createFileFromImageUrl(imageUrl: string): Promise<File> {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  // Extract file extension from Content-Type (e.g., "image/png" -> "png")
  const contentType = blob.type; // e.g., "image/jpeg"
  const extension = contentType.split("/")[1] || "jpg"; // Default to jpg if unknown

  // Extract filename from URL if possible, otherwise use a fallback
  const urlParts = imageUrl.split("/");
  const originalFilename = urlParts[urlParts.length - 1]; // Get last part of URL
  const hasValidExtension = originalFilename.includes(".");
  const filename = hasValidExtension ? originalFilename : `image.${extension}`;

  return new File([blob], filename, { type: contentType });
}
