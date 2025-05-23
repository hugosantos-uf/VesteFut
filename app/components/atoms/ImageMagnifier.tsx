"use client";
import React, { useState, useRef } from "react";

type ImageMagnifierProps = {
  src: string;
  alt: string;
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
};

export default function ImageMagnifier({
  src,
  alt,
  magnifierHeight = 150,
  magnifierWidth = 150,
  zoomLevel = 2,
}: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const img = imgRef.current;
    if (!img) return;

    const { top, left } = img.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setMousePosition({ x, y });
  };

  const handleImageLoad = () => {
    const img = imgRef.current;
    if (img) {
      setImageSize({
        width: img.width,
        height: img.height,
      });
    }
  };

  return (
    <div
      className="relative w-full cursor-zoom-in"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className="w-[800px] h-[600px] object-cover rounded-lg"
      />
      {showMagnifier && (
        <div
          className="absolute pointer-events-none border-2 border-gray-300 rounded-full shadow-lg"
          style={{
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            top: `${mousePosition.y - magnifierHeight / 2}px`,
            left: `${mousePosition.x - magnifierWidth / 2}px`,
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imageSize.width * zoomLevel}px ${
              imageSize.height * zoomLevel
            }px`,
            backgroundPositionX: `${
              -mousePosition.x * zoomLevel + magnifierWidth / 2
            }px`,
            backgroundPositionY: `${
              -mousePosition.y * zoomLevel + magnifierHeight / 2
            }px`,
          }}
        />
      )}
    </div>
  );
}
