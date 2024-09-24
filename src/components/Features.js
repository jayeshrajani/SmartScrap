import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/realTime.jpg'; 
import img2 from'../assets/img2.avif';
import img3 from'../assets/wasteSeg.png';
import img4 from '../assets/routeOptimization.jpeg';

const Features = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-teal-900 mb-12 text-center">Explore Our Features</h2>
      
      <div className="space-y-12">
        {/* Feature 1 */}
        <section className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
          <img src={img1} alt="Real-time Monitoring" className="w-full md:w-1/2 h-64 object-contain rounded-2xl rounded-lg "/>
          <div className="p-6 md:w-1/2">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">Real-time Waste Level Monitoring</h3>
            <p className="text-gray-600 mb-4">Efficiently monitor waste levels with our state-of-the-art sensors, providing real-time data to optimize waste collection processes.</p>
            <Link to="/real-time-monitoring">
              <button className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Feature 2 */}
        <section className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
          <img src={img2} alt="Predictive Maintenance" className="w-full md:w-1/2 h-64 object-contain rounded-2xl rounded-lg"/>
          <div className="p-6 md:w-1/2">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">Predictive Maintenance Alerts</h3>
            <p className="text-gray-600 mb-4">Get timely alerts for maintenance needs before issues arise, helping you avoid overflows and ensuring efficient service.</p>
            <Link to="/predictive">
              <button className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Feature 3 */}
        <section className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
          <img src={img3} alt="Waste Segregation Monitoring" className="w-full md:w-1/2 h-64 object-contain rounded-2xl rounded-lg"/>
          <div className="p-6 md:w-1/2">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">Waste Segregation Monitoring</h3>
            <p className="text-gray-600 mb-4">Advanced sensors to detect and sort different types of waste, enhancing recycling efforts and promoting eco-friendly practices.</p>
            <Link to="/waste-monitoring">
              <button className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Feature 4 */}
        <section className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
          <img src={img4} alt="Route Optimization" className="w-full md:w-1/2 h-64 object-contain rounded-2xl rounded-lg"/>
          <div className="p-6 md:w-1/2">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">Route Optimization for Waste Collection</h3>
            <p className="text-gray-600 mb-4">Optimize collection routes using data-driven insights, reducing fuel consumption and improving service efficiency.</p>
            <Link to="/route">
              <button className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
