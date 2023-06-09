import { useState } from "react";
import { ReactBoilerplate } from "../sdk/reactBoilerplate.sdk.js";

export default (props) => {
  const [componentName, setComponentName] = useState("");
  const [boilerplate, setBoilerplate] = useState("");

  async function generateBoilerplate(componentName) {
    try {
      const res = await ReactBoilerplate.generateComponent(componentName);
      console.log(res);
      if (res.success) {
        setBoilerplate(res.boilerplate);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#F7FAFC",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "4px",
          boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.1)",
        }}
      >
        <input
          style={{
            padding: "8px",
            border: "1px solid #D1D5DB",
            borderRadius: "4px",
            width: "100%",
          }}
          placeholder="Component name"
          value={componentName}
          onChange={(e) => setComponentName(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "#4299E1",
            color: "white",
            padding: "8px",
            marginTop: "16px",
            borderRadius: "4px",
            width: "100%",
          }}
          onClick={() => generateBoilerplate(componentName)}
        >
          Generate
        </button>
        <textarea
          style={{
            padding: "8px",
            border: "1px solid #D1D5DB",
            borderRadius: "4px",
            marginTop: "16px",
            width: "100%",
          }}
          value={boilerplate}
          readOnly
        />
      </div>
    </div>
  );
};
