import image1 from "../assets/image1.webp";

const Generator = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (     //If isLoggedIn is true it will let the user access the image generator
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
          {/* Header */}
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Welcome to the Image Generator
          </h2>

          {/* Image Preview */}
          <div className="w-72 h-72 bg-gray-200 rounded-xl shadow-md flex items-center justify-center mb-6">
            <img src={image1} alt="" className="rounded-xl object-cover" />
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 text-center max-w-md">
            Here you can create amazing images from text prompts. Just describe
            your imagination, and let AI bring it to life.
          </p>

          {/* Prompt Input */}
          <div className="flex gap-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your prompt..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition">
              Generate
            </button>
          </div>
        </div>
      ) : (       //If the isLoggedIn is false "Please Log In" will be displayed
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Please Log In
          </h2>
          <p className="text-gray-600 text-center max-w-md">
            You need to be logged in to use the image generator.  
            Log in and start creating your AI-powered images today.
          </p>
        </div>
      )}
    </>
  );
};

export default Generator;
