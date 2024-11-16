import TableOfChats from "@/Jenil/Components/ChatRoom/TableOfChats";
import Galler from "@/samarth/component/Galler";
import { useEffect } from "react";
import Cookies from "js-cookie";
export default function Gallery() {
  useEffect(() => {
    let user = Cookies.get("email");
    if (user !== "authentication-true") {
      alert("Please Signup first!");
      window.location.href = "/signup";
    }
  }, []);
  return (
    <>
      <div>
        <Galler></Galler>
      </div>
    </>
  );
}
