import { getCodesFromCookie } from "@/Jenil/Components/addCodeToCookies";
import ThoughtRoomList from "@/Jenil/Components/UploadFolder/ThoughtRoomList";
import UploadThought from "@/Jenil/Components/UploadFolder/UploadThought";
import React, { useEffect, useState } from "react";

const Upload = () => {
  const [codes, setCodes] = useState([]);
  const [activeRoom, setactiveRoom] = useState(null);
  const [presentCode, setPresentCode] = useState(null);
  const [section, setSection] = useState("Thought"); // Track the current section
  const [image, setImage] = useState(null); // Base64 image
  const [caption, setCaption] = useState(""); // Image caption

  useEffect(() => {
    const arr = getCodesFromCookie();
    setCodes(arr);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set Base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCaptionChange = (e) => {
    const words = e.target.value.split(/\s+/);
    if (words.length <= 25) {
      setCaption(e.target.value); // Update caption if within limit
    }
  };

  const handleUploadClick = async () => {
    if (image) {
      try {
        const response = await fetch("/api/getImageGallary", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: presentCode,
            base64Image: image,
            caption: caption,
          }),
        });

        if (response.ok) {
          alert("Image and caption uploaded successfully!");
          setImage(null); // Clear the uploaded image
          setCaption(""); // Clear the caption
        } else {
          const errorData = await response.json();
          alert(`Failed to upload: ${errorData.message}`);
        }
      } catch (error) {
        alert("An error occurred while uploading the image.");
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full h-screen bg-[#29274c] flex flex-col justify-center">
      {/* Section Toggle */}
      <div className="flex flex-row text-xl text-[#fff] self-center gap-10 rounded-2xl border-2 border-white py-2 px-2 justify-center">
        <p
          className={`hover:bg-[#963885] px-4 py-1 rounded-2xl transition-all duration-300 ${
            section === "Thought" ? "bg-[#963885]" : ""
          }`}
          onClick={() => setSection("Thought")}>
          Thought
        </p>
        <p
          className={`hover:bg-[#963885] px-4 py-1 rounded-2xl transition-all duration-300 ${
            section === "Image" ? "bg-[#963885]" : ""
          }`}
          onClick={() => setSection("Image")}>
          Image
        </p>
      </div>

      {/* Content */}
      <div className="flex my-4 flex-row w-7/12 h-96 self-center bg-[#373567]">
        {/* Left Side */}
        <div className="w-1/2 bg-[#373567]">
          {section === "Thought" && (
            <UploadThought room={activeRoom} code={presentCode} />
          )}
          {section === "Image" && (
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col">
                <label className="text-white mb-2">Upload Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="text-white"
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <label className="text-white mb-2">
                  Caption (Max 25 words):
                </label>
                <textarea
                  value={caption}
                  onChange={handleCaptionChange}
                  rows="3"
                  className="p-2 text-black rounded-md"
                  placeholder="Enter a caption..."
                />
                <p className="text-gray-400 mt-1 text-sm">
                  {caption.split(/\s+/).length}/25 words
                </p>
                <button
                  onClick={handleUploadClick}
                  disabled={!image}
                  className={`w-full py-2 px-7 self-center mt-6 rounded-xl font-medium ${
                    image
                      ? "bg-[#963885] text-white hover:bg-[#7a2d6e] transition-all duration-300"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}>
                  Upload Image
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="w-1/2 h-full overflow-y-scroll py-2 flex flex-col items-center">
          {section === "Thought" && (
            <ThoughtRoomList
              setactiveRoom={setactiveRoom}
              codes={codes}
              setPresentCode={setPresentCode}
            />
          )}
          {section === "Image" && (
            <div className="flex flex-col items-center justify-center">
              {image ? (
                <div className="flex flex-col items-center">
                  <p className="text-white mb-2">Image Preview:</p>
                  <img
                    src={image}
                    alt="Preview"
                    className="w-48 h-48 object-contain border border-gray-400 rounded-md"
                  />
                  {caption && (
                    <p className="text-white mt-4 text-center text-sm">
                      {caption}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">
                  Upload an image to see the preview here.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
