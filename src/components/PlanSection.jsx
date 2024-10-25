

const PlanSection = () => {
  return (
    <section className="py-12 bg-gray-100 text-center flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold">How It Works</h2>
      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-12">
        <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold"><span className="text-[14px] my-6">Step 1</span> <br/> Tell Us About Yourself</h3>
          <p className="my-4">Share your preferences for dining, entertainment, and budget.</p>
        </div>
        <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold"><span className="text-[14px] my-6">Step 2</span> <br/> Get Your Custom Itinerary</h3>
          <p className="my-4">DEW’s AI will curate the perfect weekend just for you.</p>
        </div>
        <div className="max-w-xs p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold"><span className="text-[14px] my-6">Step 3</span> <br/> Enjoy Your Trip</h3>
          <p className="my-4">Book everything in a few clicks and get ready for an epic weekend.</p>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
