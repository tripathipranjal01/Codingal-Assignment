import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import logo from "../assets/codingal-logo.webp";

Modal.setAppElement("#root");

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [isTimerRunning, setTimerRunning] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [subReason, setSubReason] = useState("");
  const [otherText, setOtherText] = useState("");

  // Timer logic
  useEffect(() => {
    if (!isTimerRunning || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const handleEndClassClick = () => {
    setTimerRunning(false);
    setModalOpen(true);
  };

  const handleEndClassConfirm = () => {
    setModalOpen(false);
    setReason("");
    setSubReason("");
    setOtherText("");
    setTimeLeft(600);
    setTimerRunning(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setTimerRunning(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Codingal Logo" className="w-10 h-10 rounded-full" />
          <div className="hidden sm:block text-lg font-semibold">
            Trial Lesson [Grade 1-3]
          </div>
        </div>

        <div className="text-gray-700 text-lg font-bold sm:hidden">
          {formatTime(timeLeft)}
        </div>

        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="sm:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div className="hidden sm:flex items-center space-x-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <Link to="/posts" className="text-blue-600 hover:text-blue-800">
            Posts
          </Link>
          <div className="text-gray-700 text-lg font-bold">{formatTime(timeLeft)}</div>
          <button
            onClick={handleEndClassClick}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            End Class
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden bg-gray-100 shadow-lg rounded-b-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/posts"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Posts
          </Link>
          <button
            onClick={() => {
              handleEndClassClick();
              setMenuOpen(false);
            }}
            className="block px-4 py-2 text-red-600 hover:bg-gray-200 rounded"
          >
            End Class
          </button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCancel}
        className="bg-white w-[90%] sm:w-1/3 mx-auto p-4 sm:p-6 rounded shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Select a reason to end class</h2>
        <div>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="reason"
              value="completed"
              checked={reason === "completed"}
              onChange={() => setReason("completed")}
            />
            <span className="ml-2">Class completed</span>
          </label>

          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="reason"
              value="interrupted"
              checked={reason === "interrupted"}
              onChange={() => setReason("interrupted")}
            />
            <span className="ml-2">Class interrupted/aborted</span>
          </label>

          {reason === "interrupted" && (
            <div className="ml-4">
              {[
                "Student didn't show up for the class",
                "Student didn't show any interest",
                "Student got disconnected",
                "I got disconnected",
                "Other reason",
              ].map((item) => (
                <label key={item} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="sub-reason"
                    value={item}
                    checked={subReason === item}
                    onChange={() => setSubReason(item)}
                  />
                  <span className="ml-2">{item}</span>
                </label>
              ))}

              {subReason === "Other reason" && (
                <textarea
                  placeholder="Type here..."
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                  className="w-full p-2 border rounded mt-2 bg-white"
                />
              )}
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={handleEndClassConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            End Class
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
