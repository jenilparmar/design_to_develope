import React, { useEffect, useState } from "react";

const ChatBox = ({ url, code, setActiveCode }) => {
  const [name, setName] = useState(null);
  useEffect(() => {

    const fetchThoughts = async () => {
      try {
        const response = await fetch("/api/getThought", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: code }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch thoughts");
        }

        const data = await response.json();

        setName(data.nameOfRoom);
        console.log(data);
      } catch (error) {
        console.error("Error fetching thoughts:", error);
      }
    };

    fetchThoughts();
  }, []);
  return (
    <>
      <div
        className="w-full h-fit flex flex-row my-2 hover:bg-[#534fa081] py-2 rounded-xl"
        onClick={() => {
          setActiveCode(name);
        }}>
        <div
          className="h-10 w-10 rounded-full self-center "
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
        <p className="self-center text-[#ffffffa4] ml-2 text-[10px]">{name}</p>
      </div>
      <div className="w-full h-[1px] bg-[#534fa0]"></div>
    </>
  );
};

export default ChatBox;
