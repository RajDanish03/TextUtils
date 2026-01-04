import React from "react";

export default function About({ mode }) {
  return (
    <div
      className="container my-5"
      style={{
        color: mode === "dark" ? "white" : "#1f2937",
      }}
    >
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
            alt="TextUtils Project"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="mb-3">About TextUtils</h2>
          <p className="lead">
            TextUtils is a powerful and easy-to-use text utility web
            application built using React.
          </p>

          <p>
            It allows users to analyze and manipulate text efficiently.
            Whether you want to convert text to uppercase, remove extra
            spaces, copy text, or estimate reading time, TextUtils helps
            you do it instantly.
          </p>

          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              style={{
                backgroundColor: "transparent",
                color: mode === "dark" ? "white" : "#1f2937",
              }}
            >
              ✔ Convert text to Uppercase / Lowercase
            </li>
            <li
              className="list-group-item"
              style={{
                backgroundColor: "transparent",
                color: mode === "dark" ? "white" : "#1f2937",
              }}
            >
              ✔ Remove extra spaces
            </li>
            <li
              className="list-group-item"
              style={{
                backgroundColor: "transparent",
                color: mode === "dark" ? "white" : "#1f2937",
              }}
            >
              ✔ Copy text to clipboard
            </li>
            <li
              className="list-group-item"
              style={{
                backgroundColor: "transparent",
                color: mode === "dark" ? "white" : "#1f2937",
              }}
            >
              ✔ Light & Dark mode support
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row mt-5">
        <div className="col text-center">
          <h4>Why TextUtils?</h4>
          <p className="mt-2">
            TextUtils is designed for students, developers, and professionals
            who work with text daily and need quick, reliable tools in one
            place.
          </p>
        </div>
      </div>
    </div>
  );
}
