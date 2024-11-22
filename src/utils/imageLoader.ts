const images: Record<string, string> = import.meta.glob("../assets/cars/*", {
  eager: true,
  as: "url",
});

const imageMap: Record<string, string> = {};

for (const path in images) {
  const filename = path.split("/").pop() as string;
  imageMap[filename] = images[path];
}

export function getImageUrl(imageName: string): string | undefined {
  return imageMap[imageName];
}
