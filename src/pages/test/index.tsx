import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
    const ref = useRef<HTMLImageElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 } // وقتی 10% المان دیده شد
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <img
            ref={ref}
            src={isVisible ? src : undefined} // فقط وقتی دیده شد بارگذاری میشه
            alt={alt}
            className={`${className} transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"
                }`}
            onLoad={() => setLoaded(true)}
        />
    );
};


export default function Gallery() {
    const images = Array.from({ length: 50 }).map(
        (_, i) => `https://picsum.photos/id/${i + 10}/300/200`
    );

    return (
        <div className="p-8 grid grid-cols-3 gap-4">
            {images.map((src, index) => (
                <LazyImage
                    key={index}
                    src={src}
                    alt={`Random ${index}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                />
            ))}
        </div>
    );
}

