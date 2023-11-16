
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner/home_1_slider_1.jpg'
import banner2 from '../../assets/banner/slider-2.jpg'
import { useState, useEffect } from 'react';

const images = [
    banner,
    banner2
]

const IntroSlider = () => {
    const navigate = useNavigate()
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
            <div className="banner-slider h-[40vh] sm:h-[50vh] 2xl:h-[100vh]">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Banner ${index + 1}`}
                        className={`banner-image ${index === currentImageIndex ? 'active' : ''
                            } h-[100%] object-cover`}
                    />
                ))}
            </div>
            <div className='welcome-title sm:text-center absolute top-[100px] left-[20px] sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 text-white 2xl:mt-[-100px]'>
                <h3 className='text-[18px] mb-2 font-[500] uppercase'>&#129656; রক্ত দিন জীবন বাঁচান</h3>
                <h1 className='text-[30px] xl:text-[50px] mb-3 font-[600] uppercase'>স্বাগতম আমাদের ক্লাবে </h1>
                <button onClick={() => navigate('/be_volunteer')} className="uppercase rounded-md bg-[#FE3C47] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE3C47] xl:w-[200px] xl:h-[50px] hover:scale-105 transition-all duration-500">ডোনার হতে ক্লিক</button>
            </div>
        </section>
    )
}

export default IntroSlider