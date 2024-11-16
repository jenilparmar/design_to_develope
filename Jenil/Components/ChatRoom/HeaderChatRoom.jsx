import React, { useState, useEffect } from "react";
import ChatText from "./ChatText";

const HeaderChatRoom = ({ activeCode }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    // Fetch the room name based on the code
    const fetchRoomName = async () => {
      try {
        const response = await fetch("/api/giveNameOfRoom", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: activeCode }), // Send code in the body
        });
        // console.log({ code: name });

        if (!response.ok) {
          console.log(response);
        }

        const data = await response.json();
        setName(data.name); // Update state with room name
      } catch (error) {
        console.error("Error fetching room name:", error);
      }
    };

    fetchRoomName();
  }); // Re-run if the code changes
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full h-fit px-8 py-2 flex flex-row justify-between">
          <div className="">
            <p className="content text-[#F5F5F5]  text-3xl font-bold">
              Top of the week!
            </p>
            <p className="font-bold text-[#C0CAD7AB]">
              explore the most viewed...
            </p>
          </div>
          <div className="flex flex-col-reverse justify-center">
            <p className="self-end mr-4 text-[#fff]">
              {(activeCode + "").toLocaleLowerCase()}
            </p>
            <p className="text-[#f5f5f5e2] font-medium mr-4">{name}</p>
          </div>
        </div>
        <div className="w-full h-fit py-2 flex flex-row justify-between px-8">
          <ChatText
            text={
              "Hi, I'm Jenil! We are doing this to win cool prizes!! Yeah, we know we won't be getting any prizes from college as expected, but still, the taste of winning will be good!!"
            }
          />
          <ChatText
            text={
              "Hey, Jenil! You never know... we might just surprise ourselves!"
            }
          />
          <ChatText
            text={
              "Hey, Jenil! You never know... we might just surprise ourselves!"
            }
          />
          <ChatText
            text={
              "Honestly, I don't care about the prizes as much as just having fun with the whole group!"
            }
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#534fa076]"></div>
    </>
  );
};

export default HeaderChatRoom;
