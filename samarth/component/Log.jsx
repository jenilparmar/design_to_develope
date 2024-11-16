import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Log() {
  const router = useRouter(); // Move useRouter inside the functional component

  let cookieAdd = () => {
    Cookies.set("email", "authentication-true");
    router.push("/gallery");
  };

  return (
    <div
      className={`relative flex justify-center items-center shadow-2xl robo`}
    >
      {/* Background Image */}
      <div>
        <img
          src="/login/image.png"
          alt="Background"
          className="w-96 object-cover"
        />
      </div>

      {/* Overlay with content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center ml-9 space-y-6 text-white px-2 py-12">
        {/* Navigation Links */}
        <div className="text-sm mb-6">
          <Link href={"/login"}>
            {" "}
            <span className="text-gray-400">Log In </span>/{" "}
          </Link>
          <Link href={"/signup"}>
            <span className="font-bold"> Sign Up</span>
          </Link>
        </div>

        <div className="space-y-4 max-w-xs">
          <div className="flex items-center border-b border-gray-400 py-2">
            <span className="mr-2">
              <GoPerson />
            </span>
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent robo text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center border-b border-gray-400 py-2">
            <span className="mr-2">
              <CiMail />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent robo text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center border-b border-gray-400 py-2">
            <span className="mr-2">
              <IoLockClosedOutline />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent robo text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
        </div>

        <button
          className="mt-16 w-72 h-16 flex items-center justify-center bg-[#5E346E] shadow-2xl bg-opacity-20 text-white py-2 px-8 rounded-full"
          onClick={cookieAdd}
        >
          SIGN UP
          <span className="ml-auto">
            <MdKeyboardArrowRight className="text-[#7A75B7 ] size-8" />
          </span>
        </button>
      </div>
    </div>
  );
}
