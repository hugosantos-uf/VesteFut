import Image from "next/image";

export function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={528} // coloque um valor realista ou adequado
      height={600}
      className="w-full h-auto rounded-lg"
      style={{ height: "auto" }}
    />
  );
}
