

const LandingPage = () => {
    return (
    <div className="relative">
        <div className="bg-banner bg-cover p-40 banner text-white relative bg-center flex items-center justify-center bg-gray-200" >
         <div className="absolute z-0 inset-0 bg-black/70" style={{ "backgroundImage": "url('../assets/banner.jpg')"}}></div>
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-6">Experience Detroit Like Never Before!</h1>
          <p className="text-lg text-gray-200 mb-4">We plan your perfect weekend in Detroit, so you can sit back, relax, and enjoy the city’s best experiences.</p>
          <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-300 rounded-md">
          Start Planning My Weekend
          </button>
        </div>
      </div>
    </div>
    );
  }

  export default LandingPage;
  