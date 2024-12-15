import React, { useState } from "react";

function Myprofile() {
  const [points, setPoints] = useState(0);
  const [buttonIndex, setbuttonIndex] = useState(0);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-100 p-4 flex items-center justify-center">
      <div className="card bg-gray-800 shadow-lg rounded-lg p-6 w-[90vw] md:w-[30vw]">
        <div className="flex gap-4 items-center mb-6">
          <img
            className="logo w-16 md:w-20 md:h-20 object-cover border-4 border-gray-100 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybJSVgHqJemIZHKYL6gpCo2O1tIhclTMB8Q&s"
            alt="Profile"
          />
          <div>
            <span className="text-lg md:text-xl font-semibold">
              Welcome Back!
            </span>
            <p className="text-sm text-gray-400">
              Check your progress and tasks
            </p>
          </div>
        </div>

        <div className="tabs p-2 flex justify-between items-center border-b border-gray-700 mb-4">
          <button
            className={`text-lg px-4 py-2 rounded-md ${
              buttonIndex === 0 ? "bg-gray-700 text-white" : "text-gray-400"
            }`}
            onClick={() => setbuttonIndex(0)}
          >
            History
          </button>
          <button
            className={`text-lg px-4 py-2 rounded-md ${
              buttonIndex === 1 ? "bg-gray-700 text-white" : "text-gray-400"
            }`}
            onClick={() => setbuttonIndex(1)}
          >
            Task
          </button>
        </div>

        {buttonIndex === 1 ? (
          <div>
            <h1 className="text-2xl font-bold text-center mb-2">
              Get Rewarded 🎉🏆
            </h1>
            <p className="text-center text-gray-400 mb-4">
              Complete 10 haircuts to earn a reward!
            </p>

            <div className="progress-bar mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Progress</span>
                <span className="font-semibold text-lg">{points}/10</span>
              </div>
              <input
                className="w-full h-2 bg-gray-700 rounded-full cursor-pointer"
                type="range"
                name="range"
                min="0"
                max="10"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
              />
            </div>

            <button
              className={`w-full py-3 rounded-lg font-medium text-lg transition ${
                points >= 10
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              disabled={points < 10}
            >
              {points >= 10 ? "Claim Reward 🎁" : "Keep Going 💪"}
            </button>
          </div>
        ) : (
          <div>
            <div className="bg-gray-700 rounded-md p-3 flex justify-between items-center mb-2">
              <span className="text-md capitalize">Fade Cut Appointment</span>
              <span className="text-sm text-gray-400">2022-23-42</span>
            </div>
            <div className="bg-gray-700 rounded-md p-3 flex justify-between items-center mb-2">
              <span className="text-md capitalize">Classic Haircut</span>
              <span className="text-sm text-gray-400">2022-24-56</span>
            </div>
            <div className="bg-gray-700 rounded-md p-3 flex justify-between items-center mb-2">
              <span className="text-md capitalize">Classic Haircut</span>
              <span className="text-sm text-gray-400">2022-24-56</span>
            </div>
            <div className="bg-gray-700 rounded-md p-3 flex justify-between items-center mb-2">
              <span className="text-md capitalize">Classic Haircut</span>
              <span className="text-sm text-gray-400">2022-24-56</span>
            </div>
            <div className="bg-gray-700 rounded-md p-3 flex justify-between items-center">
              <span className="text-md capitalize">Classic Haircut</span>
              <span className="text-sm text-gray-400">2022-24-56</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Myprofile;
