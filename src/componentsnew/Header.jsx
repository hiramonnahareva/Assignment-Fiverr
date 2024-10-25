

const Header = () => {
  return (
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/your-image-path.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">Experience Detroit Like Never Before!</h1>
        <p className="text-xl mt-4">We plan your perfect weekend in Detroit, so you can sit back, relax, and enjoy the city’s best experiences.</p>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 mt-6 rounded-lg">
          Start Planning My Weekend
        </button>
      </div>
    </header>
  );
};

export default Header;
