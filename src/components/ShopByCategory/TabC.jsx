import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignleTab from './SingleTab';


const TabC = () => {
    const [tab, setTab] = useState([])
    const [activeTab, setActiveTab] = useState("Sports Car");
    const [result, setResult] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with custom options if needed
    }, []);


    useEffect(() => {
        fetch("https://toy-cars-hut-server.vercel.app/toy")
            .then((res) => res.json())
            .then((result) => {
                setTab(result);
            })
    }, [])

    useEffect(() => {
        const filteredTab = tab?.filter((ta) => ta.subCategory === activeTab);
        setResult(filteredTab);
    }, [tab, activeTab]);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div className='bg-gray-100'>
            <div data-aos="fade-up" className='max-w-[1280px] mx-auto'>
                <h2 className='text-center font-bold text-5xl'>Shop By Category</h2>
                <div className='flex justify-center mt-10 mb-10 '>

                    <button onClick={() => handleTabClick("Sports Car")}
                        className={`text-white btn bg-orange-700 px-4 py-2 rounded-lg border-none superCar ${activeTab == "Sports Car" ? "" : ""
                            }`}
                    >
                        Sports Car
                    </button>


                    <button onClick={() => handleTabClick("Mini Fire Truck")}
                        className={`text-white font-bold btn mx-5 bg-orange-700 px-4 py-2 rounded-lg border-none  truck ${activeTab == "Mini Fire Truck" ? "" : ""
                            }`}
                    >
                        Mini Fire Truck
                    </button>

                    <button onClick={() => handleTabClick("Mini Plice Car")}
                        className={`text-white font-bold btn bg-orange-700 px-4 py-2 rounded-lg border-none  policeCar ${activeTab == "Mini Plice Car" ? "" : ""
                            }`}
                    >
                        Mini Plice Car
                    </button>
                </div>

                <div className='grid md:grid-cols-3'>
                    {
                        result?.map((ta) => (
                            <SignleTab

                                key={ta._id}
                                ta={ta}

                            ></SignleTab>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TabC;