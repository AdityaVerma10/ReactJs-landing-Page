import React, { useState } from "react";
const steps = [
  {
    number: 1,
    title: "Idea Conceptualization and Research",
    details: [
      {
        detailsTitle: "Market Analysis:",
        content:
          "Research the target audience, competitors, market trends, and customer preferences.",
      },
      {
        detailsTitle: "Defining Goals:",
        content:
          "Understand the purpose of the app, unique selling points, and the problems it aims to solve.",
      },
    ],
  },
  { number: 2, title: "Step 2 Title", details: [      {
    detailsTitle: "Details for step 2...",
    content:
      "",
  },] },
  { number: 3, title: "Step 3 Title", details: [ {
    detailsTitle: "Details for step 3...",
    content:
      "",
  }] },
  { number: 4, title: "Step 4 Title", details: [ {
    detailsTitle: "Details for step 4...",
    content:
      "",
  }] },
  { number: 5, title: "Step 5 Title", details: [ {
    detailsTitle: "Details for step 5...",
    content:
      "",
  }] },
  { number: 6, title: "Step 6 Title", details: [ {
    detailsTitle: "Details for step 6...",
    content:
      "",
  }] },
];
function Section3() {
  const [activeStep, setActiveStep] = useState(1);

  const handleClick = (number) => {
    setActiveStep(number);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop:'3.5rem'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            width: "1005px",
            height: "60px",
            fontSize: "40px",
            fontWeight: "600",
            lineHeight: "60px",
            textAlign: "center",
            color: "#000",
          }}
        >
          Our Work Process To Make Your{" "}
          <span
            style={{
              color: "#65451F",
            }}
          >
            Business Solution
          </span>
        </h1>
        <p
          style={{
            width: "791px",
            height: "52px",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "26px",
            textAlign: "center",
            color: "#000",
          }}
        >
          Our streamlined process ensures a fast and efficient journey. We'll
          guide you through each step, from initial concept to final launch.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              width: "218px",
              height: "41px",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "26px",
              textAlign: "center",
              color: "#000",
            }}
          >
            {" "}
            <span
              style={{
                color: "#65451F",
              }}
            >
              Idea Conceptualization
            </span>{" "}
            and Research
          </p>

          <p
            style={{
              width: "218px",
              height: "41px",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "26px",
              textAlign: "center",
              color: "#000",
            }}
          >
            {" "}
            <span
              style={{
                color: "#65451F",
              }}
            >
              Strategic Planning
            </span>      {" "}
              and Feature Set
          </p>

          <p
            style={{
              width: "218px",
              height: "41px",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "26px",
              textAlign: "center",
              color: "#000",
            }}
          >
            {" "}
            <span
              style={{
                color: "#65451F",
              }}
            >
              Wireframing
            </span>      {" "}
              and Prototyping
          </p>

          <p
            style={{
              width: "218px",
              height: "41px",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "26px",
              textAlign: "center",
              color: "#65451F",
            }}
          >
            {" "}
            Development
          </p>

          <p
            style={{
              width: "218px",
              height: "41px",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "26px",
              textAlign: "center",
              color: "#000",
            }}
          >
            {" "}
            <span
              style={{
                color: "#65451F",
              }}
            >
              Testing and
            </span>       {" "}
              Quality Assurance
          </p>
          <p
            style={{
              width: "218px",
              height: "41px",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "26px",
              textAlign: "center",
              color: "#65451F",
            }}
          >
            {" "}
            Development
          </p>
        </div>

        {/* <div style={{
           width: "1329px",
           height: "254px",
           boxShadow: '3px 4px 4px 8px #F4F4F4'

        }}>
          <h1 style={{
             height: "26px",
             fontSize: "35px",
             fontWeight: "700",
             lineHeight: "26px",
             textAlign: "center",
             color: "#000",
          }}> <span style={{
            color:'#65451F'
          }}>Idea Conceptualization </span>{" "}and Research</h1>

          <div>
            <li>
              Market Analysis: Research the target audience, competitors, market
              trends, and customer preferences.
            </li>
            <li>
              Defining Goals: Understand the purpose of the app, unique selling
              points, and the problems it aims to solve.
            </li>
          </div>
        </div> */}
        <div className="app">
          <div className="steps-container">
            {steps.map((step) => (
              <div style={{
                fontSize:'1.5rem'
              }}
                key={step.number}
                className={`step ${activeStep === step.number ? "active" : ""}`}
                onClick={() => handleClick(step.number)}
              >
                {step.number}
              </div>
            ))}
          </div>
          <div className="details">
            <h2
              style={{
                height: "26px",
                fontSize: "35px",
                fontWeight: "700",
                lineHeight: "26px",
                color: "#000",
              }}
            >
              {steps[activeStep - 1].title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column",
         }}>
              {steps[activeStep - 1].details.map((item, indx) => (

                
         <li key={indx} style={
    {
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "26px",
        color: "#000",
    }
                    }>
                    <span style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                lineHeight: "26px",
                                color: "#000",
                    }}>{item.detailsTitle}</span>
                    {" " + item.content}
                    </li>

))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
