import "./Faq.css";
import { BsArrowRightSquareFill } from "react-icons/bs";

function Faq() {
  return (
    <>
    <div className="faq">
        <div className="faq-header">
            <h1 className="faq-heading">Here are our most frequently asked questions.</h1>
            <p className="faq-para">We know you might have questions, and we’re here to provide answers. This page is designed to help you find quick and clear responses to the most common inquiries about our services, events, or policies. If you don’t see your question listed, feel free to reach out to our support team—we’re always happy to help!</p>
        </div>
        <div className="faq-buttons">
            <div className="faq-button faq-button-first">
                <p className="faq-button-first-para">I have got a question</p>
                <BsArrowRightSquareFill className="faq-button-first-icon"/>
            </div>
            <div className="faq-button faq-button-second">
                <p className="faq-button-second-para">Chat to our team</p>
                <BsArrowRightSquareFill className="faq-button-second-icon"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Faq;
