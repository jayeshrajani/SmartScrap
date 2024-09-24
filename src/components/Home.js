import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/realTime.jpg'; 
import img2 from'../assets/img2.avif';
import img3 from'../assets/wasteSeg.png';

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { 
            title: "Introduction", 
            content: "Traditional waste management practices often rely on fixed collection schedules and manual checks, leading to inefficiencies and wasted resources. Our smart waste management system is designed to change that by utilizing cutting-edge sensor technology and real-time data insights." 
        },
        { 
            title: "Technology", 
            content: "With advanced ultrasonic, infrared, and gas sensors, our system monitors waste bin levels, segregates waste automatically, and detects hazardous materials, all in real-time. This allows for dynamic route optimization, reducing unnecessary trips and improving overall collection efficiency." 
        },
        { 
            title: "Adaptability", 
            content: "Designed to be scalable and adaptable, the system can operate in both urban and rural environments, even in areas with limited connectivity. Data collected from the system provides actionable insights into waste generation patterns, enabling smarter resource allocation and supporting sustainability efforts." 
        },
        { 
            title: "Conclusion", 
            content: "Whether you're a city planner, a waste management company, or simply looking to contribute to a cleaner, more eco-friendly world, our smart waste management system is a comprehensive solution built for modern needs." 
        }
    ];

    return (
        <div className="home bg-gray-100 text-gray-800 min-h-screen flex flex-col"> 
            <main className="p-8 flex-grow"> 
                <section className="text-center py-16">
                    <h2 className="text-5xl font-extrabold text-teal-900">Welcome to SmartScrap</h2>
                    <p className="mt-4 text-lg text-gray-700">Optimize waste collection with our smart scrap system.</p>

                    {/* Tabs with reduced size */}
                    <div className="mt-8 flex justify-center space-x-2"> {/* Adjusted space between tabs */}
                        {tabs.map((tab, index) => (
                            <button 
                                key={index}
                                className={`px-2 py-1 rounded-lg transition-colors duration-300 
                                    ${activeTab === index ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'} 
                                    hover:bg-teal-700`} 
                                onMouseEnter={() => setActiveTab(index)}
                            >
                                <span className={`transition-all duration-300 text-base
                                    ${activeTab === index ? 'transform scale-110' : ''}`}> {/* Smaller text */}
                                    {tab.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Tab content with more visible text */}
                    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg transition-opacity duration-500">
                        {activeTab !== null && (
                            <p className={`text-lg text-gray-800 font-medium
                                ${activeTab !== null ? 'opacity-100' : 'opacity-0'}`}>
                                {tabs[activeTab].content}
                            </p>
                        )}
                    </div>

                    <Link to="/features">
                        <button className="mt-12 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105">
                            Learn More
                        </button>
                    </Link>
                </section>

                {/* Feature Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                        <img src={img1} alt="Feature 1" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-teal-800">Real-time Monitoring</h3>
                            <p className="text-gray-600 mt-2">Monitor waste levels in real-time to optimize collection routes and schedules.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                        <img src={img2} alt="Feature 2" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-teal-800">Predictive Maintenance</h3>
                            <p className="text-gray-600 mt-2">Receive alerts when bins need service to prevent overflows and missed collections.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                        <img src={img3} alt="Feature 3" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-teal-800">Waste Segregation</h3>
                            <p className="text-gray-600 mt-2">Ensure proper waste segregation with sensors that detect the type of waste.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-teal-900 text-white p-4 text-center">
                <p>&copy; 2024 SmartScrap Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
