import { AccordionFaq } from "../shared/Accordion/AccordionFaq";

const languageKeys = [
  { id: 1, question: "q1", answer: "a1" },
  { id: 2, question: "q2", answer: "a2" },
  { id: 3, question: "q3", answer: "a3" },
  { id: 4, question: "q4", answer: "a4" },
  { id: 5, question: "q5", answer: "a5" },
  { id: 6, question: "q6", answer: "a6" },
  { id: 7, question: "q7", answer: "a7" },
  { id: 8, question: "q8", answer: "a8" },
  { id: 9, question: "q9", answer: "a9" },
  { id: 10, question: "q10", answer: "a10" },
];

export default function FAQRightSideBar() {
  return (
    <div
      style={{boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)"}}
      className={`bg-white border-l-[1px] border-[#d3cccc] fixed top-0 right-0 w-[18rem] z-10 px-2 pb-[3rem] duration-300 h-[100vh] overflow-y-auto md:block hidden`}
    >
      <div className="mt-[6rem] px-2 pb-[2rem]">
        {
          languageKeys?.map(qna => <AccordionFaq key={qna?.id} qna={qna}/>)
        }
      </div>
    </div>
  );
}
