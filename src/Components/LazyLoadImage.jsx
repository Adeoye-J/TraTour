// src/components/LazyLoadImage.js
import React, { useEffect, useRef, useState } from 'react';

const LazyLoadImage = ({ src, alt }) => {
    const imgRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    imgObserver.unobserve(entry.target);
                }
            });
        });

        if (imgRef.current) {
            imgObserver.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                imgObserver.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : undefined}
            alt={alt}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
            }}
        />
    );
};

export default LazyLoadImage;
