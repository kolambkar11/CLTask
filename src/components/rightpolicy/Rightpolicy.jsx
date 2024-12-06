import React from "react";
import "./rightpolicy.css";
import Policy from "./Policy";

const data = [
  {
    id: 1,
    title: "Understand Your Requirements",
    desc: "Decide whether you need Third-Party Insurance (mandatory) or Comprehensive Insurance (covers both third-party liabilities and own damages).",
  },
  {
    id: 2,
    title: "Compare Multiple Insurers",
    desc: "Use online comparison tools to evaluate policies based on Premium Amount,Insured Declared Value (IDV),Coverage Benefits",
  },
  {
    id: 3,
    title: "Check the Insurer’s Reputation",
    desc: "Review the Claim Settlement Ratio (CSR) to assess reliability. Read customer reviews about claim processing and overall service quality.",
  },
  {
    id: 4,
    title: "Consider Add-Ons for Extra Coverage",
    desc: "Add-ons can enhance your protection, such as Zero Depreciation Cover,Roadside Assistance,Engine Protection Cover",
  },
  {
    id: 5,
    title: "Verify Cashless Garage Network",
    desc: "Ensure the insurer has a wide network of cashless garages near your area for seamless repairs.",
  },
  {
    id: 6,
    title: "Look for Discounts",
    desc: "Check for No Claim Bonus (NCB) discounts if you haven’t made claims in previous years.Explore long-term policy options for additional savings.",
  },
  {
    id: 7,
    title: "Review Policy Terms and Conditions",
    desc: "Carefully read the inclusions and exclusions to avoid surprises during claims.Confirm coverage for natural disasters, theft, and personal accident coverage.",
  },
  {
    id: 8,
    title: "Opt for a Digital-Friendly Insurer",
    desc: "Choose an insurer offering online policy issuance, easy renewal processes, and a user-friendly app/website.",
  },
  {
    id: 9,
    title: "Customer Support",
    desc: "Ensure the insurer provides 24/7 customer assistance for any queries or emergencies.",
  },
  {
    id: 10,
    title: "Finalize and Purchase",
    desc: "After comparing and evaluating, select the policy that meets your needs and budget.Purchase securely through the insurer’s official website or a trusted aggregator.",
  },
];

const Rightpolicy = () => {
  return (
    <>
      <section className="rightpolicy">
        <h1 className="heading">
          How to choose the right car insurance policy online?
        </h1>
        <div className="main-block">
          <div className="inner-block">
            {data.map((d) => {
              return (
                <>
                  <Policy title={d.title} desc={d.desc} key={d.id} id={d.id} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rightpolicy;
