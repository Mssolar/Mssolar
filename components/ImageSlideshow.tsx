import React, { useState, useEffect } from 'react';

interface ImageSlideshowProps {
    images: string[];
    alt: string;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length > 1) {
            const timer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000); // Change image every 4 seconds
            return () => clearTimeout(timer);
        }
    }, [currentIndex, images.length]);

    return (
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${alt} - slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
        </div>
    );
};

export default ImageSlideshow;
