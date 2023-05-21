import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with custom options if needed
    }, []);


    return (
        <div className='bg-gray-100' >
            <div className='max-w-[1280px] mx-auto '>
                <div className='text-center'>
                    <h2 data-aos="fade-down" className='text-4xl pt-20 font-bold mb-5'>Toy Cars Hut: A Gallery of Automotive Masterpieces</h2>
                    <p data-aos="fade-down" className='mb-5'>Welcome to Toy Cars Hut: A Gallery of Automotive Masterpieces," where automotive enthusiasts and connoisseurs alike can indulge in the beauty and innovation of some of the most remarkable cars ever created. Step into a world where sleek lines, powerful engines, and impeccable craftsmanship converge to create works of art on wheels.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
                    <img data-aos="fade-down" className='rounded-lg shadow-lg' src={'https://i.ibb.co/BrcYRvX/G1.png'} alt="" />
                    <img data-aos="fade-down" className='rounded-lg shadow-lg' src={'https://i.ibb.co/QJFpCgQ/G2.png'} alt="" />
                    <img data-aos="fade-down" className='rounded-lg shadow-lg' src={'https://i.ibb.co/GTHBXqr/G3.png'} alt="" />
                    <img data-aos="fade-down" className='rounded-lg shadow-lg' src={'https://i.ibb.co/wBQvkYn/G4.png'} alt="" />
                    <img data-aos="fade-down" className='rounded-lg shadow-lg' src={'https://i.ibb.co/c8PWBs4/G5.png'} alt="" />
                    <img data-aos="fade-down" className='rounded-lg shadow-lg' src={'https://i.ibb.co/1bGSh9T/G6.png'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;