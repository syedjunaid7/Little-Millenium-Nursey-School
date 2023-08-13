import React from "react";

const EmailLink = () => {
  const handleEmailClick = () => {
    const email = "info@littlemillenium.com";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return <span onClick={handleEmailClick}>info@littlemillenium.com</span>;
};

export default EmailLink;
