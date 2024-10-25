

const ContentCard = (data) => {
    const { img, destination, description } = data.data;
    return (
        <div className="hover:shadow-lg transition-all duration-700 lg:p-5 p-[20px] w-[100%] rounded-md">
          <div className="overflow-hidden rounded-md">
          <img className="md:h-full w-full lg:h-60 hover:scale-125 hover:opacity-75 transition-all duration-700" src={img} alt="" />
          </div>
            <h2 className="text-xl font-semibold my-4">{destination}</h2>
            <p>{description.slice(0, 60) + '...'}</p>
            <button className="px-[20px] py-[4x] w-full bg-transparent text-black border border-black hover:text-white">Read More</button>
        </div>
    );
};

export default ContentCard;