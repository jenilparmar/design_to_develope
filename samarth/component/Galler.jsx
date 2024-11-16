import { CiSearch } from "react-icons/ci";
import Card from "./Card";
import Mid from "./Mid";
import Card2 from "./Card2";
import LA from "./LA";
import Loading from "@/Jenil/Components/Loading"; // Import the Loading component
import { useEffect, useState } from "react";

export default function Galler() {
  const [images, setImages] = useState([]);
  const [showCaption, setShowCaption] = useState({}); // Track visibility of captions
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true); // Start loading
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
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchImages(); // Fetch images when the component mounts
  }, []); // Empty dependency array ensures this runs once on mount

  const handleIconClick = (index) => {
    // Toggle the caption visibility for the clicked image
    setShowCaption((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="ml-20 bg-[#29274c] h-screen">
      <div className="fixed z-30 w-full bg-[#29274c] shadow-2xl">
        <LA />
      </div>
      <div>
        <div className="h-36"></div>
        <div className="h-44"></div>
        {!loading ? (
          <div className="pins bg-[#29274c] px-9">
            {images.map((item, index) => (
              <Card2 li={item.base64Image} key={index} />
            ))}
          </div>
        ) : (
          <div className="w-full h-screen flex flex-col justify-start pt-20">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
