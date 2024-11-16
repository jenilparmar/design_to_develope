import { addCodeToCookieArray } from "@/Jenil/Components/addCodeToCookies";
import React, { useState } from "react";
import { useRouter } from "next/router";
const MakeRoom = () => {
  let router = useRouter();
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading
  const [roomType, setRoomType] = useState(""); // State to track selected room type
  const [roomName, setRoomName] = useState(""); // State to track the room name
  const [join, setJoin] = useState(null);
  const handleGenerate = async () => {
    if (roomType !== "Thought Room") {
      alert("Please select 'Thought Room' to generate a code.");
      return;
    }

    if (!roomName.trim()) {
      alert("Please enter a name for the room.");
      return;
    }

    setLoading(true); // Start loading
    try {
      // Make a GET request to generate the code
      const response = await fetch("/api/giveThoughtGalleryCode");
      if (!response.ok) {
        throw new Error("Failed to generate code");
      }

      // Parse the response
      const data = await response.json();
      console.log("Generated Code:", data.code);

      // Save the generated code in the state
      setGeneratedCode(data.code);
      addCodeToCookieArray(data.code);

      // Call the saveData API to store the code, roomName, and an empty thought
      const saveResponse = await fetch("/api/postThought", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { code: data.code, thought: "", nameOfRoom: roomName },
        }),
      });

      // Log the response details
      const saveResponseData = await saveResponse.json();
      console.log("Save Response Status:", saveResponse.status);
      console.log("Save Response Data:", saveResponseData);

      console.log("Room data saved successfully.");
    } catch (error) {
      console.error("Error generating or saving code:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full h-screen bg-[#29274c] flex flex-col justify-center">
      <div className="bg-[#363462] w-1/3 h-fit self-center flex flex-col justify-start py-5 px-10 gap-4">
        <p className="self-center text-white text-center">
          Wanna invite your friends here?
          <br /> Or maybe try joining them!
        </p>
        {/* Room Type Selection */}
        <div className="w-60 flex flex-row justify-center gap-5 text-center self-center text-white">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="roomType"
              value="Thought Room"
              checked={roomType === "Thought Room"}
              onChange={(e) => setRoomType(e.target.value)}
              className="accent-white"
            />
            Thought Room
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="roomType"
              value="Image Gallery Room"
              checked={roomType === "Image Gallery Room"}
              onChange={(e) => setRoomType(e.target.value)}
              className="accent-white"
            />
            Image Gallery Room
          </label>
        </div>
        {/* Input for Room Name */}
        <input
          type="text"
          placeholder="Enter Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="h-10 px-2 bg-[#29274c] my-2 border-[1px] border-white text-white w-60 self-center"
        />
        {/* Input for Joining */}
        <input
          type="text"
          onChange={(e) => {
            setJoin(e.target.value);
          }}
          placeholder="Paste Code"
          className="h-10 px-2 bg-[#29274c] my-2 border-[1px] border-white text-white w-60 self-center"
        />
        <button
          onClick={() => {
            addCodeToCookieArray(join);
            router.push("/chatRoom");
          }}
          className="bg-white w-fit self-center px-6 rounded-xl">
          Join
        </button>
        {/* Input for Generated Code */}
        <input
          type="text"
          value={generatedCode} // Show the generated code
          placeholder="Generate Code" // Placeholder when no code is generated
          readOnly
          className="h-10 px-2 bg-[#29274c] my-2 border-[1px] border-white text-white w-60 self-center"
        />
        <button
          onClick={handleGenerate}
          disabled={loading} // Disable button when loading
          className={`bg-white w-fit self-center px-6 rounded-xl ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}>
          {loading ? "Generating..." : "Generate"} {/* Show loading text */}
        </button>
      </div>
    </div>
  );
};

export default MakeRoom;
