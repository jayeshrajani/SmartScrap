import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/realTime.jpg';
import { Link } from 'react-router-dom'; 

const BinFillMonitoring = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-teal-600">
        How We Monitor Bin Fill Levels
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-teal-500">
          Ultrasonic Sensors: The Eyes of Our Bins
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img src={img1} alt="Ultrasonic sensor" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3 text-lg leading-relaxed">
            <p>
              We embed ultrasonic sensors in each bin. These sensors emit sound waves and measure the time it takes for the echo to return, allowing us to calculate the distance to the waste and hence the fill level.
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg mt-4">
              {`
// Sensor data acquisition
function getFillLevelFromSensor(binId) {
  const distance = readUltrasonicSensor(binId); 
  const fillLevel = (1 - (distance / binHeight)) * 100; // Percentage
  return fillLevel;
}
              `}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-teal-500">
          Real-Time Insights, Smarter Decisions
        </h2>
        <div className="md:w-2/3 text-lg leading-relaxed">
          <p>
            Sensors continuously transmit fill level data to our cloud platform, providing real-time visibility into bin status across the city. This empowers us to:
          </p>
          <ul className="list-disc list-inside ml-6 mt-4">
            <li>
              <strong>Optimize Collection Routes:</strong>  We prioritize bins nearing full capacity, reducing unnecessary trips and fuel consumption. 
              <pre className="bg-gray-100 p-4 rounded-lg mt-2">
                {`
// Example logic for route optimization
if (bin.fillLevel > 80) {
  prioritizeForCollection(bin);
}
                `}
              </pre>
            </li>
            {/* <li>
              <strong>Prevent Overflows:</strong> Proactive alerts enable us to schedule collections before bins overflow, maintaining cleanliness and public health.
            </li>
            <li>
              <strong>Data-Driven Planning:</strong> Historical fill level patterns help us forecast demand and allocate resources efficiently.
            </li> */}
          </ul>
        </div>
      </section>

      <section className="text-center">
        <p className="text-gray-700 mb-6 text-xl">
          Curious about the bigger picture? Get it touch and we will share how we're transforming waste management through technology.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-teal-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-teal-700 transition-all"
          >
            Explore Our Solution
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default BinFillMonitoring;