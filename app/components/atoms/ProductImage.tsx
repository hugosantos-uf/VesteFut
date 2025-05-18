export function ProductImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-full h-auto rounded-lg" />;
}
