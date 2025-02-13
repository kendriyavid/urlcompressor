import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { Theme } from "@radix-ui/themes";


export default function LinkShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {
    if (!url) return;
    const response = await fetch(import.meta.env.VITE_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inURL: url }),
    });
    const data = await response.json();
    setShortUrl(data.ShortURL);
};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <motion.h1 
        className="text-5xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        🚀 SwiftURL
      </motion.h1>
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl p-6">
        <input
          placeholder="Enter your long URL..."
          className="w-full mb-4 text-black rounded-lg p-3 border-none focus:ring-2 focus:ring-purple-500"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold p-3 rounded-lg" onClick={shortenUrl}>
          Shorten URL
        </button>
        {shortUrl && (
          <div className="mt-4 flex items-center justify-between bg-gray-800 p-3 rounded-lg border border-gray-700">
            <span className="break-all text-purple-400">{shortUrl}</span>
            <button className="p-2 text-purple-400 hover:text-white" onClick={() => navigator.clipboard.writeText(shortUrl)}>
              <Copy className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
