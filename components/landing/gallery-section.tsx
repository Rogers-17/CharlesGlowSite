"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/images/gal8.jpg",
    alt: "Bridal makeup look",
    category: "Bridal",
  },
  {
    id: 2,
    src: "/images/gal1.jpg",
    alt: "Editorial fashion makeup",
    category: "Editorial",
  },
  {
    id: 3,
    src: "/images/gal2.jpg",
    alt: "Glamorous evening makeup",
    category: "Glam",
  },
  {
    id: 4,
    src: "/images/gal7.jpg",
    alt: "Natural soft makeup look",
    category: "Natural",
  },
  {
    id: 5,
    src: "/images/gal4.jpg",
    alt: "Birthday party glam makeup",
    category: "Birthday",
  },
  {
    id: 6,
    src: "/images/gal5.jpg",
    alt: "Professional photoshoot makeup",
    category: "Photoshoot",
  },
  {
    id: 7,
    src: "/images/gal9.jpg",
    alt: "Perfect lip makeup",
    category: "Lips",
  },
  {
    id: 8,
    src: "/images/gal6.jpg",
    alt: "Stunning eye makeup",
    category: "Eyes",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-medium">
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our collection of stunning transformations and makeup artistry.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${
                index === 0 || index === 5 ? "aspect-square" : "aspect-[3/4]"
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={index === 0 || index === 5 
                    ? "(max-width: 768px) 100vw, 50vw" 
                    : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="text-primary font-serif text-xl font-semibold">{image.category}</p>
                    <p className="text-foreground/80 text-sm mt-1">View</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          <div className="relative max-w-4xl w-full aspect-[3/4] md:aspect-video">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-primary font-serif text-xl font-semibold">{selectedImage.category}</p>
            <p className="text-muted-foreground text-sm mt-1">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
