import { useState } from 'react';

const ItineraryCard = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [showDesktopShareInfo, setShowDesktopShareInfo] = useState(null); // Used to show instructions for desktop sharing
  const itineraryLink = "https://visit-detroit.com/itinerary/123";

  // Function to handle sharing using the Web Share API (Mobile)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Weekend in Detroit",
          text: "Explore the best of Detroit in 48 hours.",
          url: itineraryLink,
        });
        console.log("Itinerary shared successfully");
      } catch (error) {
        console.error("Error sharing itinerary:", error);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  // Function to handle copying the link using the Clipboard API
  const handleCopy = () => {
    navigator.clipboard.writeText(itineraryLink).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset the success message after 2 seconds
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  // Function to handle TikTok share
  const handleTikTokShare = () => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      // Open TikTok app if on mobile
      window.location.href = "tiktok://";
    } else {
      // Desktop user: Show a message or instructions
      setShowDesktopShareInfo("TikTok");
    }
  };

  // Function to handle Instagram share
  const handleInstagramShare = () => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      // Open Instagram app if on mobile
      window.location.href = "instagram://";
    } else {
      // Desktop user: Show a message or instructions
      setShowDesktopShareInfo("Instagram");
    }
  };

  // Function to open the Facebook share window
  const handleFacebookShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      itineraryLink
    )}`;
    window.open(facebookShareUrl, "_blank");
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Image Section */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Image Placeholder</span>
      </div>

      {/* Title Section */}
      <h3 className="text-xl font-semibold mt-4">Weekend in Detroit</h3>
      <p className="text-gray-600 mt-2">
        Explore the best of Detroit in 48 hours
      </p>

      {/* Share Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded flex items-center"
          onClick={handleShare}
        >
          Share
        </button>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleFacebookShare}
        >
          Facebook
        </button>
        <button
          className="bg-pink-500 text-white py-2 px-4 rounded"
          onClick={handleInstagramShare}
        >
          Instagram
        </button>
        <button
          className="bg-gray-100 text-black py-2 px-4 rounded"
          onClick={handleTikTokShare}
        >
          TikTok
        </button>
      </div>

      {/* Link Section */}
      <div className="mt-4">
        <input
          type="text"
          value={itineraryLink}
          readOnly
          className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700"
        />
        <button
          onClick={handleCopy}
          className="bg-gray-200 text-gray-700 py-2 px-4 mt-2 rounded w-full"
        >
          Copy
        </button>
        {copySuccess && (
          <p className="text-green-500 text-sm mt-2">Link copied to clipboard!</p>
        )}
      </div>

      {/* Display a message with instructions for desktop users */}
      {showDesktopShareInfo && (
        <div className="mt-4 p-4 border border-gray-300 bg-gray-50 rounded">
          <h4 className="text-lg font-semibold mb-2">
            How to share on {showDesktopShareInfo}
          </h4>
          <p className="text-gray-700">
            To share on {showDesktopShareInfo}, please copy the link and:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            {showDesktopShareInfo === "Instagram" ? (
              <>
                <li>
                  Paste the link in your bio and direct your followers to check it
                  out.
                </li>
                <li>
                  Share the link via Direct Messages (DM) with your friends or
                  followers.
                </li>
              </>
            ) : (
              <>
                <li>
                  Paste the link in your TikTok bio or profile description.
                </li>
                <li>
                  Share the link in a direct message with your friends.
                </li>
              </>
            )}
          </ul>
          <button
            onClick={() => setShowDesktopShareInfo(null)}
            className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ItineraryCard;
