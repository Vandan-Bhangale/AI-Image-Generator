import { Link } from "react-router-dom";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Turn text into image, in seconds
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Unleash your creativity with our AI-powered image generator.
          </p>

          <Link
            to="/generate"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all duration-300"
          >
            Generate Image
          </Link>
        </div>

        {/* Example Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-4xl">
          <div className="imgageContainer bg-gray-200 rounded-xl w-40 h-40"><img className="rounded-xl" src={image1} alt="AI image" /></div>
          <div className="imgageContainer bg-gray-200 rounded-xl w-40 h-40"><img className="rounded-xl" src={image2} alt="AI image" /></div>
          <div className="imgageContainer bg-gray-200 rounded-xl w-40 h-40"><img className="rounded-xl" src={image6} alt="AI image" /></div>
          <div className="imgageContainer bg-gray-200 rounded-xl w-40 h-40"><img className="rounded-xl" src={image4} alt="AI image" /></div>
          <div className="imgageContainer bg-gray-200 rounded-xl w-40 h-40"><img className="rounded-xl" src={image5} alt="AI image" /></div>
          <div className="imgageContainer bg-gray-200 rounded-xl w-40 h-40"><img className="rounded-xl" src={image7} alt="AI image" /></div>
        </div>

        <p className="text-gray-500 mt-6 text-lg">
          Generate images with <span className="font-bold text-indigo-600">Imagify</span>
        </p>

        {/* How it Works Section */}
        <div className="mt-16 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">How it works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">1. Describe your vision</h3>
              <p className="text-gray-600 text-sm">
                Write your prompt and let our AI understand your imagination.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">2. Watch the Magic</h3>
              <p className="text-gray-600 text-sm">
                The AI transforms your words into stunning visuals instantly.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">3. Download & Share</h3>
              <p className="text-gray-600 text-sm">
                Save your creations or share them with the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
