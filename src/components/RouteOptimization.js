import React from 'react';

const RouteOptimization = () => {
  return (
    <div className="route-optimization bg-gray-100 min-h-screen flex flex-col">
      <main className="p-8 flex-grow">
        <section className="text-center py-16">
          <h2 className="text-5xl font-extrabold text-teal-900">Route Optimization for Waste Collection</h2>
          <p className="mt-4 text-lg text-gray-700">
            Optimize collection routes using data-driven insights, reducing fuel consumption and improving service efficiency.
          </p>
        </section>

        <section className="mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-teal-800">How it Works</h3>
          <p className="mt-4 text-gray-600">
            Our system collects real-time waste bin data and uses algorithms such as the **Dijkstra** and **A* search algorithms** to generate the most efficient routes for waste collection vehicles. By continuously updating bin statuses and traffic data, it ensures that collection trucks always take the most fuel-efficient path while avoiding unnecessary stops.
          </p>
        </section>

        <section className="mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-teal-800">Algorithms and Technology</h3>
          <p className="mt-4 text-gray-600">
            The optimization process uses several advanced techniques:
          </p>
          <ul className="text-gray-600 text-left mt-4 list-disc list-inside">
            <li><strong>Dijkstra’s Algorithm:</strong> Finds the shortest path between the truck's starting point and the various waste bins, considering real-time traffic data and waste bin levels.</li>
            <li><strong>A* Search Algorithm:</strong> Enhances the shortest-path calculations by predicting future conditions, such as anticipated traffic, making the path even more efficient.</li>
            <li><strong>Genetic Algorithms:</strong> Used to optimize multiple vehicle routes across a city, balancing collection time, fuel consumption, and bin priorities.</li>
            <li><strong>Real-time GPS Data:</strong> Continuously updates vehicle locations, adjusting routes in real time to avoid traffic or reroute to bins that are close to overflowing.</li>
          </ul>
        </section>

        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-800">Real-time Data Integration</h3>
            <p className="text-gray-600 mt-2">
              Sensors monitor bin statuses across the city and integrate with real-time traffic data, ensuring that trucks take the most efficient routes.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-teal-800">Dynamic Routing</h3>
            <p className="text-gray-600 mt-2">
              Routes are dynamically updated throughout the day, taking into account bin levels, traffic, and other environmental factors.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-teal-900 text-white p-4 text-center">
        <p>&copy; 2024 SmartScrap Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RouteOptimization;
