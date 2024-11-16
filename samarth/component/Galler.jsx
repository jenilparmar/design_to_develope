import Loading from "@/Jenil/Components/Loading";
import Top from "./LA";
import { useEffect, useState } from "react";
import { GrInfo } from "react-icons/gr";

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
    <div className="ml-20 bg-[#29274c] h-screen">
      <div className="fixed z-30 w-full bg-[#29274c] shadow-2xl">
        <Top />
      </div>
      <div>
        <div className="h-36"></div>
        <div className="h-44"></div>
       {!loading?<>
        <div className="pins bg-[#29274c] px-9 grid grid-cols-3 gap-4">
          { (
            images.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.base64Image} // Assuming `base64Image` contains the image data
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-auto object-cover"
                />

                {/* Info icon at the bottom corner */}
                <div
                  className="absolute bottom-2 right-2 cursor-pointer text-white text-2xl"
                  onClick={() => handleIconClick(index)}>
                  <GrInfo className="p-2 rounded-full bg-[#963885] text-2xl w-10 h-10 hover:scale-105 active:scale-95 transition-all duration-300" />
                </div>

                {/* Show caption as overlay on the image */}
                {showCaption[index] && item.caption && (
                  <p className="absolute bottom-0 left-0 w-full p-2 text-white bg-black bg-opacity-50 text-center">
                    {item.caption}
                  </p>
                )}
              </div>
            ))
          ) }
        </div>
       </>:<>
       <div className="w-full h-screen flex flex-col justify-start pt-20">
        <Loading/>
       </div>
       </>}
      </div>
    </div>
  );
}
