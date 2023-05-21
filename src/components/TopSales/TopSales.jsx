import React from 'react';

const TopSales = () => {
    return (
        <div className='max-w-[1280px] mx-auto my-20'>
            <h2 className='text-5xl font-bold text-center'>Our Top Sales Product</h2>
            <p className='py-5 text-center text-xl'>Driving Imagination: Unleashing the Fun and Adventure of Toy Car Sales!</p>
            <div className='grid md:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img className='w-[250px]' src={'https://i.ibb.co/TM3Ywyy/S1.jpg'} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl"> Green Big Truck Dump</h2>
                        <p>Get ready for an action-packed adventure with our Mighty Off-Road Toy Truck. This rugged and powerful toy truck is designed to conquer any terrain and provide hours of exciting playtime. Here's why it's the ultimate choice for young truck enthusiasts:</p>
                        <p className='text-orange-700'>Top Sales: 520</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img className='w-[250px]' src={'https://i.ibb.co/02f7G23/2222.jpg'} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl"> Recycling Garbage Truck</h2>
                        <p>Sturdy and Durable: Built to withstand the toughest play, our Heavy-Duty Toy Dump Truck is made from high-quality materials that ensure durability and long-lasting performance. It can withstand rough play and is built to endure countless construction projects.</p>
                        <p className='text-orange-700'>Top Sales: 1209</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img className='w-[250px]' src={'https://i.ibb.co/j620gDy/333333333333.jpg'} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl"> Transport Car Carrier</h2>
                        <p>Carrying Capacity: Our Toy Car Carrier Transporter is designed to carry multiple toy cars at once. It features a spacious and secure carrier trailer that can hold several cars, allowing your child to transport their entire fleet in one go. It's perfect for organizing and showcasing their car collection.</p>
                        <p className='text-orange-700'>Top Sales: 748</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSales;