import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-[1280px] mx-auto my-5'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/NxGMPgg/Banner.jpg'} className="w-full rounded-xl h-[600px]" />
                    <div className='absolute rounded-xl flex items-center pl-10 h-full w-full top-0 left-0 bg-gradient-to-r from-[#1f1f1f] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white w-1/3 ml-12'>
                            <h2 className='text-5xl font-bold'>Mini Motors: Rev Up Your Fun with Toy Cars!</h2>
                            <p className='mt-5'>Welcome to the exciting world of toy cars! Whether you're a collector, a hobbyist, or a parent looking for the perfect gift, our toy cars will surely ignite your imagination and bring joy to your life.</p>
                            <button className='bg-orange-700 px-4 py-2 rounded-lg mt-5'>Explore More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/8szhtdf/Banner2.jpg'} className="w-full rounded-xl h-[600px]" />
                    <div className='absolute rounded-xl flex items-center pl-10 h-full w-full top-0 left-0 bg-gradient-to-r from-[#1f1f1f] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white w-1/3 ml-12'>
                            <h2 className='text-5xl font-bold'>Mini Motors: Rev Up Your Fun with Toy Cars!</h2>
                            <p className='mt-5'>Welcome to the exciting world of toy cars! Whether you're a collector, a hobbyist, or a parent looking for the perfect gift, our toy cars will surely ignite your imagination and bring joy to your life.</p>
                            <button className='bg-orange-700 px-4 py-2 rounded-lg mt-5'>Explore More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/7vk8L92/Banner3-min.png'} className="w-full rounded-xl h-[600px]" />
                    <div className='absolute rounded-xl flex items-center pl-10 h-full w-full top-0 left-0 bg-gradient-to-r from-[#1f1f1f] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white w-1/3 ml-12'>
                            <h2 className='text-5xl font-bold'>Mini Motors: Rev Up Your Fun with Toy Cars!</h2>
                            <p className='mt-5'>Welcome to the exciting world of toy cars! Whether you're a collector, a hobbyist, or a parent looking for the perfect gift, our toy cars will surely ignite your imagination and bring joy to your life.</p>
                            <button className='bg-orange-700 px-4 py-2 rounded-lg mt-5'>Explore More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;