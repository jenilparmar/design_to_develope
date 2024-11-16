import React, { useEffect, useState } from "react";

const ChatBox = ({ url, name, setActiveCode }) => {
  const [NameOfBox, setNameOfBox] = useState("");

  useEffect(() => {
    // Fetch the room name based on the code
    const fetchRoomName = async () => {
      try {
        const response = await fetch("/api/giveNameOfRoom", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: name }), // Send code in the body
        });
        // console.log({ code: name });

        if (!response.ok) {
          console.log(response);
        }

        const data = await response.json();
        setNameOfBox(data.name); // Update state with room name
      } catch (error) {
        console.error("Error fetching room name:", error);
      }
    };

    fetchRoomName();
  }); // Re-run if the code changes

  return (
    <>
      <div
        className="w-full h-fit flex flex-row my-2 hover:bg-[#534fa081] py-2 rounded-xl"
        onClick={() => setActiveCode(name)}>
        <div
          className="h-10 w-10 rounded-full self-center"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
        <p className="self-center text-[#ffffffa4] ml-2 text-[10px]">
          {NameOfBox || "Loading..."} {/* Show 'Loading...' while fetching */}
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#534fa0]"></div>
    </>
  );
};

export default ChatBox;
