import { useNavigate } from "react-router-dom";
import { AccordionFaq } from "../../shared/Accordion/AccordionFaq";
import { Icon } from "@iconify/react/dist/iconify.js";
import useTitle from "../../hooks/useTitle";

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

export default function FAQ() {
  useTitle("Strike - FAQ");
  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center gap-5">
        <div
          onClick={() => navigate("/menu")}
          className="backBtn md:hidden block"
        >
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[2rem] font-bold italic">F.A.Q</h3>
      </div>
      {languageKeys?.map((qna) => (
        <AccordionFaq key={qna.id} qna={qna} />
      ))}
    </div>
  );
}
