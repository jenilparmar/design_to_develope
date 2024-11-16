import Top from "./LA";
import Card2 from "./Card2";
import { useEffect, useState } from "react";

export default function Galler({ code }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/getImageGallary", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImages(data.base64Images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [code]); // Runs when the component mounts or `code` changes

  return (
    <div className="ml-20 bg-[#29274c] h-screen">
      <div className="fixed z-30 w-full bg-[#29274c] shadow-2xl">
        <Top />
      </div>
      <div>
        <div className="h-36"></div>
        <div className="h-44"></div>
        <div className="pins bg-[#29274c] px-9 grid grid-cols-3 gap-4">
          {images.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${item}`}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
