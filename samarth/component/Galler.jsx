import { CiSearch } from "react-icons/ci";
import Card from "./Card";

import Mid from "./Mid";
import Card2 from "./Card2";
import LA from "./LA";
import { useEffect, useState } from "react";
let image = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
];

export default function Galler() {
  const [images, setImages] = useState([]);
  const [showCaption, setShowCaption] = useState({}); // Track visibility of captions
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/getImageGallary", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        console.log(data); // Check the structure of the response

        setImages(data); // Assuming the response is an array of images
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages(); // Call fetchImages once when the component mounts
  }, []); // Empty dependency array ensures this runs once on mount

  const handleIconClick = (index) => {
    // Toggle the caption visibility for the clicked image
    setShowCaption((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div className="ml-20 bg-[#29274c]  h-screen  ">
      <div className=" fixed z-30 bg-[#29274c] shadow-2xl">
        <LA />
      </div>
      <div className="  ">
        <div className="h-36"></div>
        <div className="h-44"></div>
        <div className="pins bg-[#29274c] px-9">
          {images.map((item) => {
            return <Card2 li={item.base64Image} key={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
