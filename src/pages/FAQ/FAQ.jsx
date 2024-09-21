import { useNavigate } from "react-router-dom";
import { AccordionFaq } from "../../shared/Accordion/AccordionFaq";
import { Icon } from "@iconify/react/dist/iconify.js";
import useTitle from "../../hooks/useTitle";

const faqs = [
  {
    id: 1,
    question: "How do I buy a lottery ticket?",
    answer:
      "Select your numbers and draw date on our site, then proceed to checkout.",
  },
  {
    id: 2,
    question: "What lottery games are available?",
    answer: "We offer number draws, scratch-offs, and instant win games.",
  },
  {
    id: 3,
    question: "How can I check if I won?",
    answer: "Visit the 'Check Results' section and enter your ticket number.",
  },
  {
    id: 4,
    question: "What’s the minimum age to buy a ticket?",
    answer: "You must be at least 18 years old.",
  },
  {
    id: 5,
    question: "How do I claim my winnings?",
    answer:
      "Follow the instructions in your winning notification for claiming prizes.",
  },
  {
    id: 6,
    question: "Can I play from outside my country?",
    answer: "Check eligibility requirements on our site or contact support.",
  },
  {
    id: 7,
    question: "What payment methods are accepted?",
    answer: "We accept credit cards, PayPal, and other secure methods.",
  },
  {
    id: 8,
    question: "Is my information secure?",
    answer:
      "Yes, we use encryption to protect your personal and payment details.",
  },
  {
    id: 9,
    question: "Can I cancel a ticket?",
    answer: "No, once purchased, tickets cannot be canceled or refunded.",
  },
  {
    id: 10,
    question: "How often are draws held?",
    answer: "Draws vary by game; check the game rules for details.",
  },
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
      {faqs?.map((qna) => (
        <AccordionFaq key={qna.id} qna={qna} />
      ))}
    </div>
  );
}
