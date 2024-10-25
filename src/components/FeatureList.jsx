const features = [
    {
        icon: "🚀", // Customize icon as needed
        title: "Boost Your Visibility",
        description: "Gain exposure to tourists and locals looking for tailored weekend plans."
    },
    {
        icon: "📈", // Customize icon as needed
        title: "Drive More Bookings",
        description: "Direct links to your reservations or offers make it easier for customers to choose you."
    },
    {
        icon: "🎯", // Customize icon as needed
        title: "Tailored Advertising",
        description: "DEW's AI ensures your business is recommended to users most likely to visit, maximizing your marketing spend."
    }
];

function FeatureList() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 border border-gray-300 shadow-md rounded-lg">
                    <div className="text-4xl">{feature.icon}</div>
                    <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
            ))}
        </div>
    );
}

export default FeatureList;
