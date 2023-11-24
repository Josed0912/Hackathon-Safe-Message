import React from "react";
import "./styles.css";

const LoadingIcon = () => {
    return (
        <div className="loading-icon">
            <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="spinner"
        >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          className="path"
        />
      </svg>
        </div>
    )
}

export default LoadingIcon;