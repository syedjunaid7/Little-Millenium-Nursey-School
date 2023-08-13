import React from 'react';

const PhoneLink = () => {
  const handlePhoneClick = () => {
    const phoneNumber = '+971585827919';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <span onClick={handlePhoneClick}>
      +91 6392789722
    </span>
  );
};

export default PhoneLink;
