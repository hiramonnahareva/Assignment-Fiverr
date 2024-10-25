

const Testimonial = () => {
    return (
        <div className="bg-gray-100 lg:px-40 text-gray-900">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-5xl font-bold mb-16">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Sarah L.', testimonial: 'DEW helped me discover amazing spots in Detroit I never knew existed!' },
                { name: 'Mike T.', testimonial: 'Planning my weekend has never been easier. Thanks, DEW!' },
                { name: 'Emily R.', testimonial: 'As a tourist, DEW was my go-to guide for exploring Detroit like a local.' }
              ].map((user, index) => (
                <div key={index} className="bg-white p-6 shadow-md rounded-lg">
                  <p className="italic text-gray-600">{user.testimonial}</p>
                  <p className="mt-4 text-right font-semibold">{user.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </div>  
    );
};

export default Testimonial;