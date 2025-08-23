import { useState } from "react";
import image1 from "../assets/image1.webp";
import { toast } from "react-toastify"; 

const Generator = ({ isLoggedIn }) => {
  const [image_url, setImage_url] = useState("/");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const imageGenerator = async () => {
    if (prompt === "") {
      return;
    }

    setLoading(true); // Start loader
    try {
      const response = await fetch(`${import.meta.env.API_END_POINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${import.meta.env.API_TOKEN}`,
        },
        body: JSON.stringify({
          prompt,
          n: 1,
          size: "512x512",
        }),
      });

      let data = await response.json();
      console.log(data);
      const imageUrl = data.images[0].url;
      setImage_url(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("You ran out of credits.");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  //  Download logic
  const downloadImage = () => {
    const link = document.createElement("a");   //creating anchor tag which in memory right now
    link.href = image_url;    //setting the href to the image url
    link.download = "generated_image.jpg";    //setting the download attribute and default file name
    document.body.appendChild(link); //as the anchor tag is in memory to simulate click temporary append to web page
    link.click();     //Allow to simulate click
    document.body.removeChild(link);    //remove the anchor tag from the web page
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
          {/* Header */}
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Welcome to the Image Generator
          </h2>

          {/*  Download Button (only when image generated) */}
          {image_url !== "/" && !loading && (
            <button
              onClick={downloadImage}
              className="mb-3 px-3 py-1 text-sm border border-black text-black rounded-md hover:bg-black hover:text-white transition"
            >
              Download
            </button>
          )}

          {/* Image Preview */}
          <div className="w-72 h-72 bg-gray-200 rounded-xl shadow-md flex items-center justify-center mb-6">
            {loading ? (
              <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <img
                src={image_url === "/" ? image1 : image_url}
                alt=""
                className="rounded-xl object-cover w-full h-full"
              />
            )}
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
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => imageGenerator()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Generate
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Please Log In
          </h2>
          <p className="text-gray-600 text-center max-w-md">
            You need to be logged in to use the image generator. Log in and
            start creating your AI-powered images today.
          </p>
        </div>
      )}
    </>
  );
};

export default Generator;
