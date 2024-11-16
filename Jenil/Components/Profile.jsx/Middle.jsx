import React, { useState } from "react";

const Middle = () => {
  const [description, setDescription] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed, eos odit officia temporibus deserunt. Voluptatem, cupiditate doloremque animi commodi quidem quo hic non fugiat voluptates ducimus laboriosam earum esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nesciunt dolorem architecto repellendus explicabo. Iure aliquam eaque doloribus tenetur excepturi repudiandae blanditiis, porro, error ipsum suscipit rerum, temporibus consequuntur cupiditate?"
  );

  const [editing, setEditing] = useState(false);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="w-2/3 h-fit bg-[#29274c] flex flex-col">
      <div
        className="w-full h-80"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1422493757035-1e5e03968f95?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full h-80 bg-[#29274c] -mt-20 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div
                className="w-40 h-40 rounded-full ml-20 -mt-10"
                style={{
                  backgroundImage:
                    "url(https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="self-center ml-20 py-2 text-xl text-[#87878d] font-medium">
                Joginder
              </p>
            </div>

            <div className="flex flex-col text-[#87878d] p-5">
              <p>IIIT Vadodara</p>
              <p>CSE</p>
              <p>Male</p>
              <p>Life Is Hard I Am Too</p>
            </div>
          </div>
          <button className="self-start m-5 px-3 py-1 rounded-xl border-2 border-[#87878d] text-[#87878d] hover:scale-105 transition-all duration-150">
            Set Up Profile
          </button>
        </div>
        <div className="ml-20 text-[#87878d]">
          {editing ? (
            <textarea
              className="bg-[#1c1a33] text-[#87878d] p-2 rounded-md w-full"
              value={description}
              onChange={handleDescriptionChange}
              rows="4"
            ></textarea>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <button
          className="ml-20 mt-4 px-3 py-1 rounded-xl border-2 w-14 border-[#87878d] text-[#87878d] hover:scale-105 transition-all duration-150"
          onClick={toggleEdit}
        >
          {editing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="flex flex-row justify-evenly gap-4">
        <p className="text-[#87878d] text-center hover:border-2 active:scale-95 transition-all duration-150 border-white py-1 px-3 rounded-xl">
          Image Galleries
        </p>
        <p className="text-[#87878d] text-center hover:border-2 border-white py-1 px-3 rounded-xl active:scale-95 transition-all duration-150">
          Thought Galleries
        </p>
      </div>
    </div>
  );
};

export default Middle;
