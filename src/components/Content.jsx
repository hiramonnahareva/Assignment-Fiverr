import ContentCard from "./ContentCard";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';



const Content = () => {
    const content = [
        {
          id: 1,
          img: img1,
          destination: "Lisbon, Portugal",
          description: "A vibrant city known for its friendly locals, stunning architecture, and rich history.",
          tips: ["Learn a few basic Portuguese phrases.", "Stay in a hostel to meet other travelers."],
          bestTimeToVisit: "March to May",
          highlights: ["Belem Tower", "Alfama District", "Fado Music"],
        },
        {
          id: 2,
          img: img2,
          destination: "Kyoto, Japan",
          description: "A serene city filled with temples, gardens, and traditional tea houses.",
          tips: ["Use public transport for easy navigation.", "Try to participate in a tea ceremony."],
          bestTimeToVisit: "April for cherry blossoms",
          highlights: ["Kinkaku-ji (Golden Pavilion)", "Arashiyama Bamboo Grove", "Fushimi Inari Shrine"],
        },
        {
          id: 3,
          img: img3,
          destination: "Barcelona, Spain",
          description: "A bustling city famous for its art, architecture, and beaches.",
          tips: ["Stay alert in crowded areas.", "Join a walking tour to meet fellow travelers."],
          bestTimeToVisit: "May to June or September to October",
          highlights: ["Sagrada Familia", "Park Güell", "La Rambla"],
        },
        {
          id: 4,
          img: img4,
          destination: "Iceland",
          description: "A nature lover's paradise with stunning landscapes, waterfalls, and geothermal springs.",
          tips: ["Rent a car for the best experience.", "Stay in guesthouses to meet locals."],
          bestTimeToVisit: "June to August for mild weather",
          highlights: ["Golden Circle", "Blue Lagoon", "Reykjavik"],
        },
        {
          id: 5,
          img: img5,
          destination: "Chiang Mai, Thailand",
          description: "A laid-back city known for its temples, street markets, and outdoor adventures.",
          tips: ["Try a cooking class to learn about Thai cuisine.", "Be open to meeting locals."],
          bestTimeToVisit: "November to February",
          highlights: ["Doi Suthep Temple", "Night Bazaar", "Elephant Nature Park"],
        },
        {
          id: 6,
          img: img6,
          destination: "Vancouver, Canada",
          description: "A cosmopolitan city surrounded by stunning natural beauty, perfect for outdoor enthusiasts.",
          tips: ["Explore Stanley Park on foot or bike.", "Join local tours to meet other travelers."],
          bestTimeToVisit: "May to September for warm weather",
          highlights: ["Stanley Park", "Granville Island", "Capilano Suspension Bridge"],
        },
      ];       
    return (
        <div className="flex lg:mx-40 mb-[20px] flex-col items-center justify-center pb-20" id="Content">
            <h2 className="text-4xl title mb-20">Our Content</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                {
                    content.map((data) => <ContentCard key={data.id} data={data}/> )
                }
            </div>
        </div>
    );
};

export default Content;