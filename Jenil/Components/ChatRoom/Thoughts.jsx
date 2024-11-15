import React from "react";
import ThoughtOfDay from "./ThoughtOfDay";
import Loading from "../Loading";

const Thoughts = ({ thoughts , loading }) => {
  return (
   <>
    {!loading?<div className="pons w-full h-screen overflow-y-scroll overflow-x-hidden self-end">
      {thoughts &&
        thoughts.map((thought, index) => (
          <ThoughtOfDay key={index} text={thought} />
        ))}
    </div>:<><div className="w-full h-screen flex flex-col justify-center">
      <Loading/>
      </div></>
    }
   </>
  );
};

export default Thoughts;
