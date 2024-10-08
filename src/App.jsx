import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        setData(response.data.slice(0, 200));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-4">Vite + React</h1>

      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Fetched Images:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <li
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
