export default function SignUp() {
  return (
    <div className="relative  flex justify-center items-center">
      {/* Background Image */}
      <div>
        <img
          src="/login/image.png"
          alt="Background"
          className="  object-cover"
        />
      </div>

      {/* Overlay with content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 text-white  px-8 py-12">
        {/* Navigation Links */}
        <div className="text-sm mb-6">
          <span className="text-gray-400">Log In</span> /{" "}
          <span className="font-bold">Sign Up</span>
        </div>

        <div className="space-y-4  max-w-xs">
          <div className="flex items-center border-b border-gray-400 py-2">
            <span className="mr-2"></span>
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center border-b border-gray-400 py-2">
            <span className="mr-2"></span>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center border-b border-gray-400 py-2">
            <span className="mr-2"></span>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
        </div>

        <button className="mt-8 flex items-center justify-center bg-white bg-opacity-20 text-white py-2 px-8 rounded-full">
          SIGN UP
          <span className="ml-2"></span>
        </button>
      </div>
    </div>
  );
}
