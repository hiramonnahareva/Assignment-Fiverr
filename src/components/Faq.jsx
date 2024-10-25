import  { useState } from "react";
import QuestionAns from "./QusetionAns";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track which question is open

    const faqData = [
        {
            title: "What makes Detroit Epic Weekend different from other travel planning services?",
            details: "Detroit Epic Weekend is unique because it uses AI to generate fully customized, multi-day itineraries tailored to your preferences. Whether you want to explore Detroit’s art, culture, food, or nightlife, we provide curated experiences based on your interests. It’s the only platform that offers real-time adjustments, ensuring an unforgettable weekend experience."
        },
        {
            title: "How does the itinerary customization work?",
            details: "After answering a series of questions about your preferences, such as dining, activities, and budget, DEW’s AI-driven system generates a personalized itinerary. You can choose to follow the plan, modify it, or explore additional suggestions throughout your weekend."
        },
        {
            title: "Can I choose the duration of my weekend experience?",
            details: "Yes! Detroit Epic Weekend offers flexible options for 1-day, 2-day, or 3-day curated experiences. You can also customize the itinerary for longer stays if you plan to explore beyond the weekend."
        },
        {
            title: "What types of activities can I include in my itinerary?",
            details: "DEW provides a wide range of activity options, including sightseeing, live music, sporting events, fine dining, outdoor activities, shopping, and relaxation. You can tailor your weekend to fit your interests, whether you want to explore Detroit’s history or enjoy the nightlife."
        },
        {
            title: "Can I modify my itinerary after it’s generated?",
            details: "Absolutely! Detroit Epic Weekend allows you to make changes to your itinerary at any time. Our system provides real-time recommendations, so you can adjust plans on the go if something catches your eye or if you want to switch things up."
        },
        {
            title: "Do you offer transportation and accommodation options?",
            details: "Yes! DEW helps you plan your transportation needs, from airport transfers to getting around the city. We also provide a range of accommodation options, from boutique hotels to luxury stays, based on your preferences and budget."
        },
        {
            title: "Can Detroit Epic Weekend accommodate special requests or occasions?",
            details: "Definitely. Whether you're celebrating an anniversary, birthday, or another special occasion, we can customize your itinerary to include special touches like romantic dinners, VIP experiences, or surprise events."
        },
        {
            title: "Is DEW only for visitors, or can locals use it too?",
            details: "DEW is perfect for both visitors and locals. Whether you're new to the city or just looking to explore Detroit in a new way, our platform helps you discover hidden gems and plan the ultimate weekend adventure."
        },
        {
            title: "Do I need to follow the entire itinerary?",
            details: "Not at all! While DEW provides a full itinerary based on your preferences, you’re free to follow it as much or as little as you like. You can also add or remove activities throughout your weekend to suit your mood and pace."
        },
        {
            title: "Can I get real-time updates and suggestions during my weekend?",
            details: "Yes! DEW offers real-time recommendations during your stay, ensuring you never miss out on exciting opportunities. Whether it’s a last-minute event or a great restaurant suggestion, you’ll have everything at your fingertips."
        },
        {
            title: "What is the cost of using Detroit Epic Weekend?",
            details: "Our basic service for generating an itinerary is free. However, certain premium features, such as VIP access, personalized recommendations, and exclusive events, may come with additional fees."
        },
        {
            title: "How do I get started with Detroit Epic Weekend?",
            details: "Simply visit our website, answer a few questions about your preferences and interests, and let our AI create a personalized itinerary for you. It's fast, easy, and will help ensure you have an epic weekend in Detroit!"
        }
    ]; 

    const handleToggle = (index) => {
        // If the same index is clicked, close it; otherwise, open the new one
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center py-20 lg:mx-40 m-[20px]">
            <h2 className="text-4xl mb-20 title">Frequently Asked Questions (FAQ)</h2>
                
                <div className="w-full">
                {faqData.map((item, index) => (
                <QuestionAns
                    key={index}
                    title={item.title}
                    details={item.details}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
               
            </div>
            
        </div>
           
    );
};

export default Faq;
