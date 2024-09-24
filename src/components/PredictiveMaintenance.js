import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import images (make sure you have these in your project)
import imgMonitoring from '../assets/realTime.jpg'; // Replace with an image related to monitoring
import imgPrediction from '../assets/img2.avif'; // Replace with an image related to prediction
import imgAnomaly from '../assets/wasteSeg.png'; // Replace with an image related to anomaly detection
// import imgAlerts from '../assets/alerts.jpg'; // Replace with an image related to alerts 

const PredictiveMaintenance = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Real-time Monitoring",
      image: imgMonitoring,
      content: "Our smart bins are equipped with sensors that continuously monitor waste levels. This real-time data provides a constant stream of information about the bin's usage patterns, allowing us to track fill rates and identify potential issues early on.",
    },
    {
      title: "AI-based Predictions",
      image: imgPrediction,
      content: "We utilize machine learning algorithms to analyze the historical fill level data collected from the sensors. By identifying trends and patterns in this data, we can build predictive models that forecast when a bin is likely to reach capacity. This enables us to schedule maintenance proactively, preventing overflows and optimizing collection routes.",
      algorithms: ["Time Series Forecasting", "Regression Models"]
    },
    {
      title: "Anomaly Detection",
      image: imgAnomaly,
      content: "In addition to predicting normal fill patterns, our system also uses anomaly detection algorithms to identify unusual events or deviations from expected behavior. This helps us detect potential problems like sensor malfunctions or unexpected spikes in waste generation, before they lead to problems like overflows.",
    },
    {
      title: "Proactive Alerts",
    //   image: imgAlerts,
      content: "Based on the predictions and anomaly detection results, our system generates timely alerts to notify waste management teams of upcoming maintenance needs. These alerts can be delivered through various channels, such as email notifications, SMS alerts, or mobile app notifications. By taking proactive action based on these alerts, waste management teams can avoid costly and disruptive issues, ensuring smooth and efficient operations.",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="predictive-maintenance bg-gray-100 min-h-screen flex flex-col"
    >
      <main className="p-8 flex-grow">
        {/* Heading and introduction section */}
        <section className="text-center py-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-extrabold text-teal-900"
          >
            Predictive Maintenance Alerts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 text-lg text-gray-700"
          >
            Get timely alerts for maintenance needs before issues arise, helping you avoid overflows and ensuring efficient service.
          </motion.p>
        </section>

        {/* Tabs section */}
        <section className="mt-8">
          <div className="flex justify-center space-x-4 mb-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 
                  ${activeTab === index ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'} 
                  hover:bg-teal-700`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <img src={tabs[activeTab].image} alt={tabs[activeTab].title} className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">{tabs[activeTab].title}</h3>
                <p className="text-gray-700">{tabs[activeTab].content}</p>
                {tabs[activeTab].algorithms && (
                  <div className="mt-4">
                    <p className="text-gray-700">Some of the specific algorithms we employ include:</p>
                    <ul className="list-disc list-inside ml-6 mt-2">
                      {tabs[activeTab].algorithms.map((algo, idx) => (
                        <li key={idx}>{algo}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Call to action or additional information (same as before) */}
      </main>

      <footer className="bg-teal-900 text-white p-4 text-center">
        <p>&copy; 2024 SmartScrap Solutions. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

export default PredictiveMaintenance;