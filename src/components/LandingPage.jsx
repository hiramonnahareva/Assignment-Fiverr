

const LandingPage = () => {
    return (
    <div className="relative">
        <div className="bg-[url('../assets/banner.jpg')] bg-cover p-40 banner text-white relative bg-center flex items-center justify-center bg-gray-200" >
         <div className="absolute z-0 inset-0 bg-black/80" style={{ "backgroundImage": "url('../assets/banner.jpg')"}}></div>
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-6">Discover Detroit&apos;s Hidden Gems</h1>
          <p className="text-lg text-gray-200 mb-4">Plan Your Epic Weekend with DEW</p>
          <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-300 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
    );
  }

  export default LandingPage;
  