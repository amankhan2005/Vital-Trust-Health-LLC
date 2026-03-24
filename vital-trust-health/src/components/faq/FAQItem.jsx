 const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">

      {/* HEADER */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 transition"
      >
        {question}

        {/* ICON */}
        <span
          className={`text-orange-500 text-xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {/* CONTENT */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-5 pb-5 text-slate-500 leading-relaxed">
          {answer}
        </div>
      </div>

    </div>
  );
};

export default FAQItem;