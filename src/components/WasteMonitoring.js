import React from 'react';
import { motion } from 'framer-motion';
import sensorImg from '../assets/wasteSeg.png'; // Replace with appropriate image
import { Link } from 'react-router-dom';

const WasteSegregationMonitoring = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-teal-600">
        Waste Segregation: Sorting for a Better Tomorrow
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-teal-500">
          Advanced Sensors: The Sorting Experts
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img src={sensorImg} alt="Waste segregation sensor" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3 text-lg leading-relaxed">
            <p>
              Our smart bins utilize a combination of infrared and ultrasonic sensors to analyze the waste deposited. Infrared sensors detect the material's composition, while ultrasonic sensors measure its size and shape.
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg mt-4">
              {`
// Simplified waste classification logic
function classifyWaste(item) {
  const material = analyzeInfrared(item); 
  const dimensions = measureUltrasonic(item);

  if (material === 'organic' && dimensions.volume < threshold) {
    return 'compostable';
  } else if (recyclableMaterials.includes(material)) {
    return 'recyclable';
  } else {
    return 'general waste'; 
  }
}
              `}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-teal-500">
          Segregation in Action: Real-Time Sorting
        </h2>
        <div className="md:w-2/3 text-lg leading-relaxed">
          <p>
            As waste is deposited, our sensors instantly classify it and trigger the appropriate sorting mechanism within the bin. This ensures that different waste streams are separated at the source, maximizing recycling potential and minimizing contamination.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4">
            {`
// Conceptual code for waste sorting
onWasteDeposited(item) {
  const wasteType = classifyWaste(item);
  activateSorter(wasteType); // Move item to correct compartment
}
            `}
          </pre>
        </div>
      </section>

      <section className="text-center">
        <p className="text-gray-700 mb-6 text-xl">
          Ready to contribute to a cleaner planet? Learn more about our comprehensive waste management solutions.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-teal-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-teal-700 transition-all"
          >
            Discover Our Solutions
          </motion.button>
        </Link>
      </section>

      <footer className="bg-teal-900 text-white p-4 text-center mt-8">
        <p>&copy; 2024 SmartScrap Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WasteSegregationMonitoring;