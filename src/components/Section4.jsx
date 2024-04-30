import React, { useState } from "react";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

function Section4() {
  const [active, setactive] = useState(1);
  return (
    <div
      style={{
        // width:'1224px',
        height:'800px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={
          {
            // display:'flex',
            // flexDirection:'column',
            // justifyContent:'center',
            // alignItems:'center'
          }
        }
      >
        <h3
          style={{
            height: "45px",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "45px",
            textAlign: "center",
            color: "#000",
          }}
        >
          Our Services
        </h3>
        <h1
          style={{
            width: "1217px",
            height: "56px",
            fontSize: "37px",
            fontWeight: "700",
            lineHeight: "55.5px",
            textAlign: "center",
            color: "#65451F",
          }}
        >
          We Build the Future, Today: Websites & Apps with AI Integration
        </h1>
      </div>

      {active === 1 ? (
        <div
          style={{
            display: "flex",
            height:'515px',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:'#fff'
          }}
        >
          <div
            style={{
                marginBottom:'0.9rem',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifyContent: "space-around",
              width: "1220.07px",
              height: "84.79px",
              rotate: "-89.66 deg",
              background: "linear-gradient(90deg, #755530 0%, #DBA05A 100%)",
            }}
          >
            <span
              onClick={() => {
                setactive(1);
              }}
              style={
                active === 1
                  ? {
                      width: "280px",
                      height: "49px",
                      borderRadius: "5px",
                      background: "#fff",
                      color: "#755530",
                      fontWeight: "600",
                      fontSize: "29px",
                      lineHeight: "43.5px",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : {
                      width: "250px",
                      height: "45px",
                      color: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "45px",
                      cursor: "pointer",
                    }
              }
            >
              AI Integration
            </span>
            <span
              onClick={() => {
                setactive(2);
              }}
              style={
                active === 2
                  ? {
                      width: "280px",
                      height: "49px",
                      borderRadius: "5px",
                      background: "#fff",
                      color: "#755530",
                      fontWeight: "600",
                      fontSize: "29px",
                      lineHeight: "43.5px",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : {
                      width: "206px",
                      height: "45px",
                      color: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "45px",
                      cursor: "pointer",
                    }
              }
            >
              Development
            </span>
            <span
              onClick={() => {
                setactive(3);
              }}
              style={
                active === 3
                  ? {
                      width: "280px",
                      height: "49px",
                      borderRadius: "5px",
                      background: "#fff",
                      color: "#755530",
                      fontWeight: "600",
                      fontSize: "29px",
                      lineHeight: "43.5px",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : {
                      width: "206px",
                      height: "45px",
                      color: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "45px",
                      cursor: "pointer",
                    }
              }
            >
              Design
            </span>
          </div>

          <div
            style={
              {
                // display:'flex',
                // flexDirection:'column',
                // justifyContent:'center',
                // alignItems:'center'
              }
            }
          >
            <p
              style={{
                height: "53px",
                fontSize: "35px",
                fontWeight: "600",
                lineHeight: "52.5px",
                textAlign: "center",
                color: "#65451F",
              }}
            >
              AI Integration Services
            </p>
            <p
              style={{
                width: "771px",
                height: "23px",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "23.44px",
                textAlign: "center",
                color: "#000",
              }}
            >
              We specialize in a range of AI-driven solutions tailored to meet
              diverse needs.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",
              }}
            >
              <img
                src={img2}
                alt=""
                style={{
                  width: "94px",
                  height: "87.84px",
                }}
              />

              <p
                style={{
                  width: "156px",
                  height: "47px",
                  fontSize: "17px",
                  fontWeight: "400",
                  lineHeight: "25.5px",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Chatbots/Virtual Assistants
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",
              }}
            >
              <img
                src={img3}
                alt=""
                style={{
                  width: "94px",
                  height: "87.84px",
                }}
              />

              <p
                style={{
                  width: "156px",
                  height: "47px",
                  fontSize: "17px",
                  fontWeight: "400",
                  lineHeight: "25.5px",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                A/B Testing Optimization
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",
              }}
            >
              <img
                src={img4}
                alt=""
                style={{
                  width: "94px",
                  height: "87.84px",
                }}
              />

              <p
                style={{
                  width: "156px",
                  height: "47px",
                  fontSize: "17px",
                  fontWeight: "400",
                  lineHeight: "25.5px",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Natural Language Processing (NLP)
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",
              }}
            >
              <img
                src={img5}
                alt=""
                style={{
                  width: "94px",
                  height: "87.84px",
                }}
              />

              <p
                style={{
                  width: "156px",
                  height: "47px",
                  fontSize: "17px",
                  fontWeight: "400",
                  lineHeight: "25.5px",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                User Behavior Analysis
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",
              }}
            >
              <img
                src={img6}
                alt=""
                style={{
                  width: "94px",
                  height: "87.84px",
                }}
              />

              <p
                style={{
                  width: "156px",
                  height: "47px",
                  fontSize: "17px",
                  fontWeight: "400",
                  lineHeight: "25.5px",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Recommendation Engines
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifyContent: "space-around",
              width: "1220.07px",
              height: "84.79px",
              rotate: "-89.66 deg",
              background: "linear-gradient(90deg, #755530 0%, #DBA05A 100%)",
            }}
          >
            <span
              onClick={() => {
                setactive(1);
              }}
              style={
                active === 1
                  ? {
                      width: "280px",
                      height: "49px",
                      borderRadius: "5px",
                      background: "#fff",
                      color: "#755530",
                      fontWeight: "600",
                      fontSize: "29px",
                      lineHeight: "43.5px",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : {
                      width: "250px",
                      height: "45px",
                      color: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "45px",
                      cursor: "pointer",
                    }
              }
            >
              AI Integration
            </span>
            <span
              onClick={() => {
                setactive(2);
              }}
              style={
                active === 2
                  ? {
                      width: "280px",
                      height: "49px",
                      borderRadius: "5px",
                      background: "#fff",
                      color: "#755530",
                      fontWeight: "600",
                      fontSize: "29px",
                      lineHeight: "43.5px",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : {
                      width: "206px",
                      height: "45px",
                      color: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "45px",
                      cursor: "pointer",
                    }
              }
            >
              Development
            </span>
            <span
              onClick={() => {
                setactive(3);
              }}
              style={
                active === 3
                  ? {
                      width: "280px",
                      height: "49px",
                      borderRadius: "5px",
                      background: "#fff",
                      color: "#755530",
                      fontWeight: "600",
                      fontSize: "29px",
                      lineHeight: "43.5px",
                      textAlign: "center",
                      cursor: "pointer",
                    }
                  : {
                      width: "206px",
                      height: "45px",
                      color: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "45px",
                      cursor: "pointer",
                    }
              }
            >
              Design
            </span>
          </div>
          <h1>Content display here...</h1>
        </>
      )}
    </div>
  );
}

export default Section4;
