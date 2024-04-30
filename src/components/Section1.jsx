import React from "react";
import Button from "./Button";

function Section1() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:'550px'
      }}
    >
      <h1
        style={{
          width: "1143px",
          height: "127px",
          fontFamily: "Poppins",
          fontSize: "55px",
          fontWeight: "700",
          lineHeight: "73px",
          textAlign: "center",
        }}
      >
        Transform Your Online Presence with{" "}
        <span
          style={{
            color: "#65451F",
          }}
        >
          AI-Integrated
        </span>{" "}
        Web and App Solutions
      </h1>

      <p
        style={{
          width: "890px",
          height: "22px",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30px",
          textAlign: "center",
          color: "#000",
        }}
      >
        Unlock the Power of Artificial Intelligence , Build Next-Gen Websites &
        Apps with AI
      </p>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop:'2rem'
        }}
      >
        <Button
          text={"Start Free Trial"}
          styling={{
            width: "213px",
            height: "53px",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "30px",
            textAlign: "center",
            backgroundColor: "#765827",
            border: "1px solid #65451F",
            boxShadow: "2px 3px 4px 2px #00000040",
            borderRadius: "12px",
            color: "#FCFCFC",
          }}
        />
        <Button
          text={"Learn More"}
          styling={{
            width: "213px",
            height: "53px",
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "23.44px",
            textAlign: "center",
            backgroundColor: "#fff",
            border: "1px solid #65451F",
            boxShadow: "2px 5px 4px 1px #00000040",
            borderRadius: "12px",
            color: "#65451F",
          }}
        />
      </div>
    </div>
  );
}

export default Section1;
