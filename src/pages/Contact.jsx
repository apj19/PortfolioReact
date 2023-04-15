import React, { useState } from "react";

function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="min-h-[85vh]">
      Contact
      <p
        className="relative"
        onClick={() => {
          navigator.clipboard.writeText("Copy this text to clipboard");
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 500);
        }}
      >
        Copy to clipboard
        {showMessage && (
          <span className="absolute bottom-6 left-10 bg-black text-white p-2 rounded-md">
            Copied to Clipboard
          </span>
        )}
      </p>
    </div>
  );
}

export default Contact;
