import React from "react";

const Navbar = () => {
  return (
    <div className="w-20 px-2 h-screen bg-[#373562] flex flex-col gap-4 justify-start fixed left-0">
      <div
        className="h-16 w-16 active:scale-95 self-center transition-all duration-150"
        style={{
          backgroundImage: "url(image2.png)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}></div>

      <div className="flex flex-col justify-center gap-8 self-center py-2 ">
        <div
          className="h-12 w-12 hover:scale-105 active:scale-95 self-center transition-all duration-150"
          style={{
            backgroundImage: "url(image.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}></div>

        <div
          className="h-12 w-12 hover:scale-105 active:scale-95 self-center transition-all duration-150"
          style={{
            backgroundImage: "url(image3.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}></div>
      </div>
      <div className="w-12 h-1 self-center mt-2 rounded-xl bg-[#534fa0]"></div>

      <div className="flex flex-col justify-center gap-8 self-center py-6 ">
        <div
          className="h-12 w-12 hover:scale-105 active:scale-95 self-center transition-all duration-150"
          style={{
            backgroundImage: "url(image4.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}></div>

        <div
          className="h-12 w-12 hover:scale-105 active:scale-95 self-center transition-all duration-150"
          style={{
            backgroundImage: "url(image5.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}></div>
        <div
          className="h-12 w-12 hover:scale-105 active:scale-95 self-center transition-all duration-150"
          style={{
            backgroundImage: "url(image6.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}></div>
      
      </div>
    </div>
  );
};

export default Navbar;
