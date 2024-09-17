export default function LanguageModal() {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute md:p-[1.5rem] p-3 border-[1px] border-gray-300 rounded-[10px] md:top-[3.5rem] top-[-0.5rem] md:right-[-5rem] right-[1rem] shadow-lg z-40 md:w-[25rem] w-[18rem] bg-white"
    >
      <div className="flex flex-col gap-4">
        <button>English</button>
        <button>हिन्दी</button>
        <button>తెలుగు</button>
      </div>
    </div>
  );
}
