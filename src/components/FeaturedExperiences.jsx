import { CiLocationOn, CiMusicNote1, CiCamera} from "react-icons/ci";
import { PiBowlFoodThin } from "react-icons/pi";
const FeaturedExperiences = () => {
    return (
        <section className="mb-28 lg:mx-40">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6">
            {[
              { title: 'Curated Experiences', icon: <CiLocationOn />, description: 'Handpicked local adventures' },
              { title: 'Live Events', icon: <CiMusicNote1/>, description: 'Up-to-date concert and event listings' },
              { title: 'Foodie Favorites', icon: <PiBowlFoodThin /> , description: 'Best local eateries and hidden gems' },
              { title: 'Photo Spots', icon: <CiCamera/>, description: 'Instagram-worthy locations' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 border border-gray-300 shadow-md rounded-lg">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
    );
};

export default FeaturedExperiences;