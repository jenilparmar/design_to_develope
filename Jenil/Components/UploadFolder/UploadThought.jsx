import React, { useState } from "react";

const UploadThought = ({ room , code  ,}) => {
  const [mess, setMess] = useState("");
  const handleSendThought = async () => {
    if (!room) return;

    try {
      const response = await fetch("/api/postThought", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { code: code, thought: mess } }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch thoughts");
      }

      const data = await response.json();

      console.log(data);
      alert("Thoughts Uploaded Successful");
      setMess("");
    } catch (error) {
      console.error("Error fetching thoughts:", error);
    }
  };
  return (
    <div className="flex flex-col justify-evenly h-full items-center p-6 bg-[#373567] rounded-lg shadow-md max-w-md mx-auto space-y-4">
      <h2 className="text-lg font-semibold text-white text-center">
        {room ? (
          <>
            Share Your Thought in <br />{" "}
            <span className="text-[#c645af] text-xl">{room}</span>
          </>
        ) : (
          "Please select a room first"
        )}
      </h2>
      <textarea
        value={mess}
        className="w-full p-3 bg-transparent text-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#fff] resize-none"
        rows="4"
        onChange={(e) => {
          setMess(e.target.value);
        }}
        placeholder={
          room
            ? "Type your thought here..."
            : "Select a room to enable this field"
        }
        disabled={!room}
      />
      <button
        onClick={handleSendThought}
        className={`w-full py-2 font-medium rounded-lg transition ${
          room
            ? "bg-[#963885] text-white hover:bg-[#963885]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!room}>
        Upload Thought
      </button>
    </div>
  );
};

export default UploadThought;
