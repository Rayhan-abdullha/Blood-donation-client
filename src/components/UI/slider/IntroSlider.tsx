
import banner from '../../../assets/banner/home_1_slider_1.jpg'
import banner2 from '../../../assets/banner/slider-2.jpg'
import { useState, useEffect } from 'react';

const images = [
    banner,
    banner2
]

const IntroSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
        setCurrentImageIndex((prevIndex: number) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="home-intro-section">
            <div className="banner-slider">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Banner ${index + 1}`}
                        className={`banner-image ${index === currentImageIndex ? 'active' : ''
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default IntroSlider