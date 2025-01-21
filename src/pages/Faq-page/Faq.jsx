import { useEffect, useState } from "react";
import "./Faq.css";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Faq() {
  const [indexCount, setIndexCount] = useState(0);

  const toggleAccordian = (index) => {
    setIndexCount(indexCount === index ? -1 : index);
  };
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'instant', 
    });

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    }, 100); 
  }, []);
  const faqs = [
    {
      question: "What is the refund policy for event tickets?",
      answer:
        "Refunds for event tickets are available up to 7 days before the event start date. To initiate a refund, please contact our support team with your order number. Refunds may not be processed for cancellations made less than 7 days before the event unless otherwise specified in the event terms. For special cases like event cancellation or postponement, full refunds will be provided automatically. Please allow 5-7 business days for the refund to reflect in your account.",
    },
    {
      question: "How can I access the event schedule and location details?",
      answer:
        "The event schedule and location details are available on our official event page. Once you purchase your ticket, a confirmation email with a personalized link to the schedule will also be sent to you. The schedule includes session times, speaker details, and map navigation to the venue. For online events, the link to join will be included in the same email, and reminders will be sent 24 hours before the event.",
    },
    {
      question: "Are there any discounts available for group bookings?",
      answer:
        "Yes, we offer discounts for group bookings of 10 or more tickets. The discount percentage varies depending on the size of the group and the type of event. For corporate or educational groups, we can also provide customized packages that include reserved seating and additional perks. To request a group discount, please contact our sales team with the group size and preferred seating arrangement, and we’ll provide you with a tailored quote.",
    },
    {
      question: "What are the parking and transportation options for the event venue?",
      answer:
        "Our event venue has ample parking space, and parking is free for all attendees. For those using public transportation, the venue is easily accessible via bus and metro, with the nearest metro station being a 5-minute walk away. Ride-sharing services like Uber and Lyft also have designated drop-off and pick-up points at the venue. Detailed parking instructions and a map will be included in your event confirmation email. We recommend arriving early to secure your spot and avoid delays.",
    },
    {
      question: "What health and safety measures are in place for the event?",
      answer:
        "Your safety is our top priority. For in-person events, we adhere to all local health and safety regulations, including regular sanitization of high-touch areas, availability of hand sanitizing stations, and ensuring proper ventilation in indoor spaces. Masks may be required based on current health guidelines, and temperature checks will be conducted at the entrance. For food services, we offer contactless options and individually packaged meals. If you feel unwell, we kindly request that you refrain from attending in person and contact our support team to explore alternative options, such as live streaming access.",
    },
  ];
  

  return (
    <>
      <div className="faq">
        <div className="faq-header">
          <h1 className="faq-heading">
            Here are our most frequently asked questions.
          </h1>
          <p className="faq-para">
            We know you might have questions, and we’re here to provide answers.
            This page is designed to help you find quick and clear responses to
            the most common inquiries about our services, events, or policies.
            If you don’t see your question listed, feel free to reach out to our
            support team—we’re always happy to help!
          </p>
        </div>
        <div className="faq-buttons">
          <div className="faq-button faq-button-first">
            <p className="faq-button-first-para">I have got a question</p>
            <BsArrowRightSquareFill className="faq-button-first-icon" />
          </div>
          <div className="faq-button faq-button-second">
            <p className="faq-button-second-para">Chat to our team</p>
            <BsArrowRightSquareFill className="faq-button-second-icon" />
          </div>
        </div>
        <div className="faq-faq faq-header" style={{ background: "#334BCE" }}>
          <h1 className="faq-heading" style={{ color: "#fff" }}>
            General FAQs
          </h1>
          <p className="faq-para" style={{ color: "#fff" }}>
            Everything You need to know about our website.
          </p>
          <div className="faq-accordin">
            {faqs.map((item, index) => {
              return (
                <>
                  <div
                    className="faq-question"
                    key={index}
                    onClick={() => toggleAccordian(index)}
                  >
                    <p className="faq-question-para">{item?.question}</p>
                    {indexCount === index ? <IoIosArrowUp/> : <IoIosArrowDown />}
                  </div>
                  {indexCount === index && (
                    <div className="faq-answer" key={index}>
                      <p className="faq-answer-para">{item?.answer}</p>
                    </div>
                  )}

                  <div className="faq-underline"></div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
