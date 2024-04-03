import { useState } from "react";
import "./App.css";

function App() {
  //
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-gradient-to-r from-violet-100 to-indigo-300 h-screen  ">
        <p className="text-4xl flex justify-center items-center py-10">
          {" "}
          React Hooks
        </p>

        {/* UseState Hook */}

        <p className="text-xl ml-40 ">Use State Hook</p>
        <div className="usestate border-2 border-gray-500 rounded-xl ml-16 mt-6 h-56 w-80  py-4   ">
          <div className="bg-green-300 w-24 h-8 rounded-lg flex justify-center items-center mx-auto ">
            <p className="   ">Count is: {count}</p>
          </div>

          <div className=" mt-12 flex justify-center items-center space-x-4 ">
            <button
              className="bg-blue-500 rounded-lg  h-8 w-14"
              onClick={() => setCount(count + 1)}
            >
              Add 1
            </button>
            <button
              className="bg-blue-500 rounded-lg  h-8 w-24"
              onClick={() => setCount(count - 1)}
            >
              Decrease 1
            </button>

            <button
              className="bg-blue-500 rounded-lg  h-8 w-24"
              onClick={() => setCount(0)}
            >
              Reset count
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
