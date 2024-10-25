/* eslint-disable react/prop-types */


const QuestionAns = ({ title, details, isOpen, onToggle }) => {
    return (
        <div className="lg:w-[100%] w-[80vw]">
            <div
                className="m-[20px] flex justify-between mb-4 border-b border-b-gray-950 cursor-pointer"
                onClick={onToggle}
            >
                <h2 className="text-2xl py-4">{title}</h2>
                <div className="flex flex-col gap-2 relative top-2 -z-10">
                    <div className={`line ${!isOpen && 'absolute top-0 rotate-90'}`}></div>
                    <div className={`line ${isOpen && 'absolute top-1 hidden'}`}></div>
                </div>
            </div>

            {isOpen ? (
                <p className="px-[20px] py-[10px] transition-all duration-700">{details}</p>
            ) : (
                <p className="px-[20px] py-0 transition-all duration-700"></p>
            )}
        </div>
    );
};

export default QuestionAns;
