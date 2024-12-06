import React from "react";
import "./faq.css";
import Faqlisting from "./Faqlisting";
import Viewbtn from "../common/Viewbtn";
const data = [
  {
    question: "What is two-wheeler insurance, and why is it necessary?",
    answer:
      "Two-wheeler insurance provides financial protection against damages, theft, accidents, or third-party liabilities involving your two-wheeler. It’s legally mandatory in India to have at least a Third-Party Liability insurance policy to ride on public roads.",
  },
  {
    question: "What are add-ons in a two-wheeler insurance policy?",
    answer:
      "Add-ons are optional covers that enhance your policy. Popular ones include:",
    list: [
      "Zero Depreciation Cover: No depreciation deduction during claims.",
      "Roadside Assistance: Help during breakdowns.",
      "Engine Protection: Covers engine repair costs due to water damage or leakage.",
    ],
  },
  {
    question: "How is the premium for two-wheeler insurance calculated?",
    answer: "Premiums are calculated based on factors like:",
    list: [
      "Vehicle type, age, and location.",
      "Coverage type (Third-Party or Comprehensive).",
      "Add-ons chosen.",
      "No Claim Bonus (NCB) discounts.",
    ],
  },
  {
    question: "How can I claim insurance for two-wheeler damages?",
    answer: "",
    list: [
      "Inform your insurer immediately.",
      "Submit the required documents (e.g., FIR for theft, policy details, and photos of damages).",
      "The insurer will assess the claim and settle it based on the terms of your policy.",
    ],
  },
  {
    question: "What is a No Claim Bonus (NCB)?",
    answer:
      "NCB is a discount offered on your policy premium for every claim-free year, making renewals cheaper.",
  },
  {
    question: " Can I renew my two-wheeler insurance policy online?",
    answer:
      "Yes, most insurers offer a hassle-free online renewal process. You can renew even after your policy lapses (subject to inspection).",
  },
  {
    question: "What happens if I ride without insurance?",
    answer:
      "Riding without valid insurance is illegal in India and can result in fines or other legal penalties.",
  },
  {
    question: "What is Insured Declared Value (IDV)?",
    answer:
      "IDV is the maximum amount the insurer will pay if your two-wheeler is stolen or completely damaged. It’s based on the vehicle’s market value minus depreciation.",
  },
];
const Faq = () => {
  return (
    <>
      <section className="faqs">
        <div className="mainContent">
          <h1 className="heading">FAQs</h1>
          <p className="title">
            Get answers to common questions about two wheeler insurance policy
          </p>
          <input type="search" className="search" placeholder="Search Here" />
          <hr className="horizontalLine" />
          <div className="faqslisting">
            {data.map((d, index) => {
              return <Faqlisting key={index} details={d} />;
            })}
          </div>
          {/* <button className="view-more-btn">view more</button> */}
          <Viewbtn title="View More" cls="faq-btn" />
        </div>
      </section>
    </>
  );
};

export default Faq;
