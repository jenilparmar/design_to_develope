"use server";
import HeaderChatRoom from "@/Jenil/Components/ChatRoom/HeaderChatRoom";
import TableOfChats from "@/Jenil/Components/ChatRoom/TableOfChats";
import Thoughts from "@/Jenil/Components/ChatRoom/Thoughts";
import { getCodesFromCookie } from "@/Jenil/Components/addCodeToCookies";
import React, { useState, useEffect } from "react";

const ChatRoom = () => {
  const [codes, setCodes] = useState([]);
  const [activeCode, setActiveCode] = useState(null);
  const [thoughtsArray, setThoughtsArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const arr = getCodesFromCookie();
    setCodes(arr);
  }, []);

  // Fetch thoughts for the active code
  useEffect(() => {
    const fetchThoughts = async () => {
      if (!activeCode) return;

      try {
        setLoading(true);
        const response = await fetch("/api/getThought", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: activeCode }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch thoughts");
        }

        const data = await response.json();

        setThoughtsArray(data.Thoughts);
        // console.log(data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching thoughts:", error);
      }
    };

    fetchThoughts();
  }, [activeCode]);

  // Set the initial activeCode when codes are populated
  useEffect(() => {
    if (codes.length > 0) {
      setActiveCode(codes[0]);
    }
  });

  return (
    <div className="w-full h-screen bg-[#29274c] flex flex-row justify-between">
      <TableOfChats codes={codes} setActiveCode={setActiveCode} />
      <div className="w-10/12 flex flex-col">
        <HeaderChatRoom activeCode={activeCode} />
        <Thoughts thoughts={thoughtsArray} loading={loading} />
      </div>
    </div>
  );
};

export default ChatRoom;
