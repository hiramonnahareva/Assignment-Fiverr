import  { useState } from "react";
import QuestionAns from "./QusetionAns";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track which question is open

    const faqData = [
        {
            title: "Is it safe to travel alone?",
            details: "Yes, many destinations are safe for solo travelers. It's essential to research your destination, stay aware of your surroundings, and take standard safety precautions.",
        },
        {
            title: "How can I meet other travelers while solo traveling?",
            details: "You can meet other travelers by staying in hostels, joining group tours, attending local events, or using travel apps designed for connecting with fellow travelers.",
        },
        {
            title: "Is it safe to travel alone?",
            details: "Yes, many destinations are safe for solo travelers. It's essential to research your destination, stay aware of your surroundings, and take standard safety precautions.",
        },
        {
            title: "How can I meet other travelers while solo traveling?",
            details: "You can meet other travelers by staying in hostels, joining group tours, attending local events, or using travel apps designed for connecting with fellow travelers.",
        },
        {
            title: "Is it safe to travel alone?",
            details: "Yes, many destinations are safe for solo travelers. It's essential to research your destination, stay aware of your surroundings, and take standard safety precautions.",
        },
        {
            title: "How can I meet other travelers while solo traveling?",
            details: "You can meet other travelers by staying in hostels, joining group tours, attending local events, or using travel apps designed for connecting with fellow travelers.",
        }
        // Add more FAQ items here...
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
